/* ============================================================
   GEMINI — streaming por REST cru, sem SDK.

   O chat do Kit F4 usa `@google/generative-ai`; aqui não, de propósito:
   precisamos do controle do `alt=sse` para aplicar o holdback de
   marcadores (ver markers.ts), e o REST é o mesmo caminho que os outros
   três assistentes do Leo já seguem — o que torna qualquer correção
   portável entre os projetos.
   ============================================================ */

import { MODELO, MAX_OUTPUT_TOKENS } from './config';
import type { ChatMsg } from './markers';

const ENDPOINT = 'https://generativelanguage.googleapis.com';

export class SemChaveError extends Error {}

/**
 * Faz o streaming da resposta, cedendo pedaços de texto.
 *
 * `temperature` baixa de propósito: a Sônia tem regra dura de preço e de
 * escopo, e criatividade aqui só produz valor inventado.
 */
export async function* streamGemini(system: string, msgs: ChatMsg[]): AsyncGenerator<string> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new SemChaveError('GEMINI_API_KEY ausente');

  const contents = msgs.map((m) => ({
    // A Gemini chama o assistente de 'model', não de 'assistant'.
    role: m.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: m.content }],
  }));

  /* ⚠️ `thinkingBudget: 0` NÃO é otimização, é correção de bug.
     Os modelos Flash atuais pensam antes de responder por padrão, e os
     tokens de raciocínio contam DENTRO do `maxOutputTokens`. Com o teto em
     500 o pensamento consumia quase tudo e sobravam ~15 tokens de texto:
     a resposta chegava cortada no meio da frase, sem aviso nenhum. A Sônia
     tem um prompt de regras apertadas e responde em até 900 caracteres —
     não há o que raciocinar aqui, e o pensamento só custava latência.

     O teto também subiu (ver MAX_OUTPUT_TOKENS em config.ts): mesmo com o
     pensamento desligado, 500 era apertado demais para não voltar a
     acontecer. */
  const corpo = (comThinking: boolean) =>
    JSON.stringify({
      systemInstruction: { parts: [{ text: system }] },
      contents,
      generationConfig: {
        temperature: 0.3,
        topP: 0.9,
        maxOutputTokens: MAX_OUTPUT_TOKENS,
        ...(comThinking ? { thinkingConfig: { thinkingBudget: 0 } } : {}),
      },
    });

  const chamar = (comThinking: boolean) =>
    fetch(`${ENDPOINT}/v1beta/models/${MODELO}:streamGenerateContent?alt=sse`, {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-goog-api-key': apiKey },
      body: corpo(comThinking),
    });

  let resp = await chamar(true);

  /* Se um dia o modelo configurado não aceitar `thinkingConfig`, a API
     devolve 400 e a Sônia ficaria MUDA — trocaríamos "resposta cortada"
     por "assistente fora do ar", que é pior. Uma tentativa sem o campo
     cobre isso. */
  if (resp.status === 400) {
    console.warn('[assistente] modelo recusou thinkingConfig; repetindo sem ele');
    resp = await chamar(false);
  }

  if (!resp.ok || !resp.body) {
    const detalhe = await resp.text().catch(() => '');
    throw new Error(`Gemini ${resp.status}: ${detalhe.slice(0, 300)}`);
  }

  const reader = resp.body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';

  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });

    // O SSE separa eventos por linha; a última pode estar pela metade,
    // então ela volta para o buffer.
    const linhas = buffer.split('\n');
    buffer = linhas.pop() ?? '';

    for (const linha of linhas) {
      const t = linha.trim();
      if (!t.startsWith('data:')) continue;
      const payload = t.slice(5).trim();
      if (!payload || payload === '[DONE]') continue;
      try {
        const json = JSON.parse(payload);
        const partes = json?.candidates?.[0]?.content?.parts;
        if (Array.isArray(partes)) {
          for (const p of partes) if (typeof p?.text === 'string') yield p.text;
        }
        /* O motivo da parada era IGNORADO, e foi por isso que a resposta
           cortada passou despercebida até um visitante reclamar: o corte
           chegava idêntico a um fim normal de stream. Agora ele grita no
           log — MAX_TOKENS quer dizer teto apertado (ou pensamento comendo
           o orçamento), SAFETY quer dizer filtro de conteúdo. */
        const fim = json?.candidates?.[0]?.finishReason;
        if (fim && fim !== 'STOP') {
          console.error(
            `[assistente] a Gemini parou por ${fim} — a resposta chegou incompleta ao visitante.`,
            { modelo: MODELO, tokens: json?.usageMetadata },
          );
        }
      } catch {
        // Keepalive ou fragmento que não fechou: ignorar é o certo aqui.
      }
    }
  }
}
