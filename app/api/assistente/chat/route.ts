/* ============================================================
   POST /api/assistente/chat/  →  stream de texto puro da Sônia.
   GET  /api/assistente/chat/  →  { ok } — o widget sonda antes de
                                   desenhar o botão flutuante.

   ⚠️ O next.config tem `trailingSlash: true`: o cliente PRECISA chamar com
   a barra final, senão vem um 308 e o POST vira GET pelo caminho.
   ============================================================ */

import {
  ASSISTENTE_ENABLED,
  MAX_CHARS_PER_MSG,
  MAX_DOSSIES,
  MAX_RESPOSTAS,
  MAX_TURNS,
} from '@/lib/assistente/config';
import { POR_SLUG } from '@/lib/assistente/catalogo';
import { contextoDaPagina, rotaBloqueada } from '@/lib/assistente/paginas';
import { buildSystemPrompt, cortarHistorico, montarDossies } from '@/lib/assistente/prompt';
import { recuperarOfertas } from '@/lib/assistente/retrieve';
import { streamGemini, SemChaveError } from '@/lib/assistente/gemini';
import { limitado, ipDe } from '@/lib/assistente/rate-limit';
import { pontoSeguro, sanitizarHistorico, type ChatMsg } from '@/lib/assistente/markers';
import { WHATSAPP_NUMERO } from '@/lib/whatsapp/contato';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type Body = {
  messages: ChatMsg[];
  pathname?: string;
  /** Nome de quem já deixou o contato — o prompt para de pedir de novo. */
  contato?: string | null;
};

/** "5588981391199" → "(88) 98139-1199". Derivado da fonte única do repo
 *  (lib/whatsapp/contato.ts) para o número não ser digitado de novo aqui —
 *  ele já esteve escrito à mão em 17 lugares neste projeto. */
const WPP_DISPLAY = (() => {
  const d = WHATSAPP_NUMERO.replace(/\D/g, '').replace(/^55/, '');
  return `(${d.slice(0, 2)}) ${d.slice(2, -4)}-${d.slice(-4)}`;
})();

/** Toda falha vira texto em português apontando o WhatsApp. O visitante
 *  nunca vê stack, status nem "algo deu errado". */
const FALLBACK = `Tive um problema técnico aqui. Para não te deixar esperando, fale direto com a equipe no WhatsApp ${WPP_DISPLAY}.`;

const texto = (s: string, status = 200) =>
  new Response(s, {
    status,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-store',
      'X-Accel-Buffering': 'no',
    },
  });

export async function GET() {
  const ok = ASSISTENTE_ENABLED && Boolean(process.env.GEMINI_API_KEY);
  return Response.json({ ok }, { headers: { 'Cache-Control': 'no-store' } });
}

export async function POST(req: Request) {
  if (!ASSISTENTE_ENABLED) return texto('Assistente desativado.', 503);
  if (limitado(ipDe(req))) {
    return texto(`Você mandou muitas mensagens em pouco tempo. Aguarde um instante — ou fale direto no WhatsApp ${WPP_DISPLAY}.`, 429);
  }

  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return texto('Formato inválido.', 400);
  }

  const pathname = typeof body.pathname === 'string' ? body.pathname : '/';
  // O gating também vive no servidor: o cliente pode ser adulterado, e a
  // área de entrega do Kit F4 tem chat próprio — não deve haver dois.
  // Vem ANTES da checagem de chave de propósito: página bloqueada responde
  // a mesma coisa com ou sem IA configurada, e é o que torna o gate
  // verificável em ambiente sem GEMINI_API_KEY.
  if (rotaBloqueada(pathname)) return texto('Assistente indisponível nesta página.', 404);

  if (!process.env.GEMINI_API_KEY) return texto('IA indisponível no momento.', 503);

  const bruto = Array.isArray(body.messages) ? body.messages : [];
  const msgs: ChatMsg[] = bruto
    .filter((m) => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
    // Trunca em vez de rejeitar: quem colou um texto longo não tem culpa,
    // e mandar a pessoa reescrever perde a conversa.
    .map((m) => ({ role: m.role, content: m.content.trim().slice(0, MAX_CHARS_PER_MSG) }))
    .filter((m) => m.content.length > 0)
    .slice(-MAX_TURNS);

  if (msgs.length === 0) return texto('Mensagem vazia.', 400);
  if (msgs[msgs.length - 1].role !== 'user') {
    return texto('A última mensagem deve ser do usuário.', 400);
  }

  // Fechamento por número de respostas: a partir daqui NÃO chamamos a
  // Gemini. É o teto de custo por sessão, e evita a conversa infinita que
  // nunca vira lead.
  const respostas = msgs.filter((m) => m.role === 'assistant').length;
  if (respostas >= MAX_RESPOSTAS) {
    return texto(
      `A gente já conversou bastante por aqui — e a partir deste ponto quem resolve melhor é a equipe. ` +
        `Chame no WhatsApp ${WPP_DISPLAY} que eles continuam de onde paramos.`,
    );
  }

  /* ---------- Contexto ---------- */
  const contexto = contextoDaPagina(pathname);
  const daPagina = contexto.oferta?.slug;

  // A conversa recente é o que decide qual dossiê anexar. Só as mensagens
  // do usuário: as dela repetem o nome do produto que ela mesma sugeriu e
  // travariam a recuperação no primeiro palpite.
  const consulta = msgs
    .filter((m) => m.role === 'user')
    .slice(-3)
    .map((m) => m.content)
    .join(' ');

  const recuperados = recuperarOfertas(
    consulta,
    daPagina ? MAX_DOSSIES - 1 : MAX_DOSSIES,
    daPagina ? [daPagina] : [],
  ).map((o) => o.slug);

  const dossies = montarDossies([...(daPagina ? [daPagina] : []), ...recuperados]);

  const system = buildSystemPrompt({
    contexto,
    dossies,
    contatoCapturado: typeof body.contato === 'string' ? body.contato : null,
  });

  const historico = cortarHistorico(
    sanitizarHistorico(msgs, (s) => POR_SLUG[s]?.nome ?? s),
  );

  /* ---------- Stream ---------- */
  const encoder = new TextEncoder();
  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      let buffer = '';
      let emitiuAlgo = false;
      try {
        for await (const pedaco of streamGemini(system, historico)) {
          buffer += pedaco;
          // Segura o sufixo que ainda pode virar marcador, senão o
          // visitante vê "[[prod" piscando antes de o card aparecer.
          const corte = pontoSeguro(buffer);
          if (corte > 0) {
            const liberar = buffer.slice(0, corte);
            buffer = buffer.slice(corte);
            if (liberar) {
              emitiuAlgo = true;
              controller.enqueue(encoder.encode(liberar));
            }
          }
        }
        if (buffer) {
          emitiuAlgo = true;
          controller.enqueue(encoder.encode(buffer));
        }
        if (!emitiuAlgo) controller.enqueue(encoder.encode(FALLBACK));
      } catch (e) {
        // Chave ausente já foi tratada antes; aqui é rede, cota ou 5xx da
        // Gemini. O cabeçalho já foi enviado, então o erro só pode ser
        // entregue como texto dentro do próprio stream.
        console.error('[assistente/chat]', e instanceof SemChaveError ? 'sem chave' : e);
        controller.enqueue(encoder.encode(emitiuAlgo ? `\n\n${FALLBACK}` : FALLBACK));
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-store',
      'X-Accel-Buffering': 'no',
    },
  });
}
