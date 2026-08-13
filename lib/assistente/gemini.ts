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

  const resp = await fetch(
    `${ENDPOINT}/v1beta/models/${MODELO}:streamGenerateContent?alt=sse`,
    {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-goog-api-key': apiKey },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: system }] },
        contents,
        generationConfig: {
          temperature: 0.3,
          topP: 0.9,
          maxOutputTokens: MAX_OUTPUT_TOKENS,
        },
      }),
    },
  );

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
      } catch {
        // Keepalive ou fragmento que não fechou: ignorar é o certo aqui.
      }
    }
  }
}
