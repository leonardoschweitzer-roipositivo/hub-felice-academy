'use client';

/* ============================================================
   O estado da conversa: envio, streaming, marcadores e balões.

   A rota devolve texto puro (não SSE, não JSON): a gente lê com
   getReader() e vai reescrevendo a última mensagem. É o mesmo desenho do
   useChatStream do Kit F4 — quem já mexeu lá reconhece.
   ============================================================ */

import { useCallback, useEffect, useRef, useState } from 'react';
import { analisar, type ChatMsg, type LeadSugerido, type Segmento } from '@/lib/assistente/markers';
import { trackLeadOferecido, trackPrimeiraMensagem } from './tracking';

export type Balao = {
  id: string;
  autor: 'ia' | 'voce';
  /** Os segmentos do §§§ viram balões separados na tela, cada um com os
   *  cards de produto que foram recomendados dentro dele. */
  partes: Segmento[];
  /** Ainda chegando pelo stream. */
  parcial?: boolean;
};

export type EstadoAssistente = ReturnType<typeof useAssistente>;

let seq = 0;
const novoId = () => `m${++seq}`;

export function useAssistente(pathname: string, saudacao: string) {
  const [baloes, setBaloes] = useState<Balao[]>([
    { id: novoId(), autor: 'ia', partes: [{ texto: saudacao, produtos: [] }] },
  ]);
  const [enviando, setEnviando] = useState(false);
  const [erro, setErro] = useState<string | null>(null);
  const [lead, setLead] = useState<LeadSugerido | null>(null);
  /** null = sem captura na tela; 'consentimento' = os dois botões;
   *  'formulario' = os campos. */
  const [faseLead, setFaseLead] = useState<'consentimento' | 'formulario' | null>(null);
  const [contato, setContato] = useState<string | null>(null);
  const [comecou, setComecou] = useState(false);

  /** Histórico cru (com marcadores) — é o que volta para a rota, que o
   *  higieniza antes de mandar ao modelo. */
  const historico = useRef<ChatMsg[]>([]);
  /** Guarda contra duas capturas: uma vez oferecido, não oferece de novo. */
  const leadJaOferecido = useRef(false);

  const enviar = useCallback(
    async (texto: string) => {
      const msg = texto.trim();
      if (!msg || enviando) return;

      setErro(null);
      setComecou(true);
      trackPrimeiraMensagem(pathname);
      setBaloes((b) => [
        ...b,
        { id: novoId(), autor: 'voce', partes: [{ texto: msg, produtos: [] }] },
      ]);
      historico.current = [...historico.current, { role: 'user', content: msg }];
      setEnviando(true);

      const idIa = novoId();
      setBaloes((b) => [...b, { id: idIa, autor: 'ia', partes: [], parcial: true }]);

      let bruto = '';
      try {
        const resp = await fetch('/api/assistente/chat/', {
          // ⚠️ barra final obrigatória: com `trailingSlash: true` a URL sem
          // ela devolve 308 e o POST vira GET no meio do caminho.
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: historico.current, pathname, contato }),
        });

        if (!resp.ok || !resp.body) {
          const t = await resp.text().catch(() => '');
          throw new Error(t || `HTTP ${resp.status}`);
        }

        const reader = resp.body.getReader();
        const dec = new TextDecoder();
        while (true) {
          const { value, done } = await reader.read();
          if (done) break;
          bruto += dec.decode(value, { stream: true });
          // A rota já segura marcadores incompletos (ver pontoSeguro), então
          // aqui dá para exibir direto o que chegou.
          const parcial = analisar(bruto);
          setBaloes((b) =>
            b.map((x) => (x.id === idIa ? { ...x, partes: parcial.segmentos, parcial: true } : x)),
          );
        }

        const fim = analisar(bruto);
        setBaloes((b) =>
          b.map((x) => (x.id === idIa ? { ...x, partes: fim.segmentos, parcial: false } : x)),
        );
        historico.current = [...historico.current, { role: 'assistant', content: bruto }];

        if (fim.lead && !leadJaOferecido.current && !contato) {
          leadJaOferecido.current = true;
          setLead(fim.lead);
          setFaseLead('consentimento');
          trackLeadOferecido(fim.lead.produto);
        }
      } catch (e) {
        // O visitante nunca vê erro técnico: a rota já degrada para uma
        // mensagem com o WhatsApp, e isto cobre a falha de rede antes dela.
        console.error('[assistente]', e);
        setBaloes((b) => b.filter((x) => x.id !== idIa));
        setErro('Não consegui responder agora. Tente de novo em instantes.');
      } finally {
        setEnviando(false);
      }
    },
    [enviando, pathname, contato],
  );

  /** Recusou deixar o contato: a conversa segue, e a Sônia não pede de
   *  novo (o marcador só é aceito uma vez — ver `leadJaOferecido`). */
  const recusarLead = useCallback(() => {
    setFaseLead(null);
    void enviar('prefiro continuar conversando por aqui');
  }, [enviar]);

  const aceitarLead = useCallback(() => setFaseLead('formulario'), []);

  /** Contato enviado: a confirmação é escrita LOCALMENTE, sem chamar a
   *  API — a pessoa está saindo para o WhatsApp e não faz sentido gastar
   *  uma requisição (nem fazê-la esperar) para dizer "pronto". */
  const registrarContato = useCallback(
    (nome: string) => {
      setContato(nome);
      setFaseLead(null);
      setLead(null);
      const primeiro = nome.split(' ')[0];
      setBaloes((b) => [
        ...b,
        {
          id: novoId(),
          autor: 'ia',
          partes: [
            {
              texto: `Pronto, ${primeiro} — abri o WhatsApp com o seu resumo. Se a janela não abrir, é só me chamar aqui que eu mando o link de novo.`,
              produtos: [],
            },
          ],
        },
      ]);
    },
    [],
  );

  return {
    baloes,
    enviando,
    erro,
    lead,
    faseLead,
    contato,
    comecou,
    /** O histórico cru, para o formulário mandar a conversa junto do lead. */
    historico: historico.current,
    enviar,
    aceitarLead,
    recusarLead,
    registrarContato,
  };
}

/** Sonda a rota uma vez por sessão: sem chave configurada o botão nem
 *  aparece, para não existir um assistente quebrado na tela. */
export function useAssistenteDisponivel(): boolean | null {
  const [ok, setOk] = useState<boolean | null>(null);
  useEffect(() => {
    let vivo = true;
    fetch('/api/assistente/chat/', { method: 'GET' })
      .then((r) => (r.ok ? r.json() : { ok: false }))
      .then((j) => vivo && setOk(Boolean(j?.ok)))
      .catch(() => vivo && setOk(false));
    return () => {
      vivo = false;
    };
  }, []);
  return ok;
}
