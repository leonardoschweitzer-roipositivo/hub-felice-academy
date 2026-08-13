/* ============================================================
   POST /api/assistente/lead/ — o contato capturado numa conversa.

   Por que não reusar uma das 8 rotas `.../api/lead/` que já existem:
   1. Elas hardcodam `slug` e `leadType`. O assistente roda nas 44 rotas e
      o produto é o que a IA recomendou — postar de uma landing de maestria
      na rota da consultoria etiquetaria todo lead como consultoria.
   2. Elas disparam `SubmitApplication`, que é o evento da CANDIDATURA.
      Misturar infla o volume de candidaturas e estraga a otimização de
      campanha. O que nasce numa conversa é um `Lead`.
   3. Elas montam `event_source_url` como /produtos/<slug>/consultoria/,
      que é falso para uma conversa que aconteceu na home.

   Fora isso, o handler é fork literal de
   app/produtos/consultoria/aplicacao/api/lead/route.ts: mesmo contrato,
   mesmo rate limit, mesmo LEAD_WEBHOOK_URL. Um webhook já configurado
   continua recebendo o mesmo formato, com dois campos a mais.
   ============================================================ */

import { NextResponse } from 'next/server';
import { sendLeadEvent } from '@/lib/tracking/lead';
import { POR_SLUG } from '@/lib/assistente/catalogo';
import { ORIGEM_LABEL } from '@/lib/assistente/config';

export const runtime = 'nodejs';

/* ---------- Rate limit simples em memória (por IP) ----------
   Mesma limitação das outras rotas do repo: um Map de processo não
   sobrevive a serverless. Ver o comentário longo em
   lib/assistente/rate-limit.ts. */
const WINDOW_MS = 60_000;
const MAX_REQ = 10;
const buckets = new Map<string, number[]>();
function rateLimited(ip: string): boolean {
  const now = Date.now();
  const hits = (buckets.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  hits.push(now);
  buckets.set(ip, hits);
  return hits.length > MAX_REQ;
}

type Lead = {
  contato?: { nome?: string; whatsapp?: string; email?: string; cidade?: string };
  qualificacao?: Record<string, string>;
  origem?: string;
  tracking?: { eventId?: string; fbp?: string; fbc?: string; visitor_id?: string };
  /** Produto que a IA recomendou. */
  produto?: string;
  /** Página onde a conversa aconteceu. */
  pagina?: string;
  /** A conversa inteira, para a equipe ler o contexto no CRM. */
  transcricao?: { role: string; content: string }[];
};

export async function POST(req: Request) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'anon';
  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false, error: 'rate_limited' }, { status: 429 });
  }

  let body: Lead;
  try {
    body = (await req.json()) as Lead;
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  const nome = body?.contato?.nome?.trim();
  const whatsapp = body?.contato?.whatsapp?.trim();
  if (!nome || !whatsapp) {
    return NextResponse.json({ ok: false, error: 'missing_fields' }, { status: 400 });
  }

  // Slug que a IA inventou não pode virar etiqueta de tracking.
  const produto = body.produto && POR_SLUG[body.produto] ? body.produto : null;

  const lead = {
    ...body,
    produto,
    origem: body.origem || ORIGEM_LABEL,
    recebidoEm: new Date().toISOString(),
    ip,
  };
  const webhook = process.env.LEAD_WEBHOOK_URL;

  if (webhook) {
    try {
      await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lead),
      });
    } catch (err) {
      // Webhook fora do ar não pode custar o lead do visitante.
      console.error('[assistente/lead] webhook falhou:', err);
    }
  } else {
    console.log('[assistente/lead] LEAD_WEBHOOK_URL não definido. Lead recebido:', JSON.stringify(lead));
  }

  const tracking = body.tracking;
  if (tracking?.eventId) {
    try {
      await sendLeadEvent({
        slug: produto,
        pagePath: body.pagina || '/',
        eventId: tracking.eventId,
        identity: {
          email: body.contato?.email,
          phone: body.contato?.whatsapp,
          visitorId: tracking.visitor_id,
          fbp: tracking.fbp,
          fbc: tracking.fbc,
          ip: ip === 'anon' ? null : ip,
          userAgent: req.headers.get('user-agent'),
        },
      });
    } catch (err) {
      console.error('[assistente/lead] CAPI Lead falhou:', err);
    }
  }

  return NextResponse.json({ ok: true });
}
