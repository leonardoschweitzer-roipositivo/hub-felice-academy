import { NextResponse } from 'next/server';
import { sendApplicationEvent } from '@/lib/tracking/lead';

export const runtime = 'nodejs';

/* ---------- Rate limit simples em memória (por IP) ---------- */
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
};

/* Recebe o lead do questionário e repassa a um webhook configurável
   (LEAD_WEBHOOK_URL — CRM, Zapier, Make, planilha…). Sem webhook
   definido, registra no log do servidor e segue (não bloqueia o fluxo). */
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

  const lead = { ...body, recebidoEm: new Date().toISOString(), ip };
  const webhook = process.env.LEAD_WEBHOOK_URL;

  if (webhook) {
    try {
      await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lead),
      });
    } catch (err) {
      // Não falha o lead do usuário se o webhook estiver fora do ar.
      console.error('[lead] webhook falhou:', err);
    }
  } else {
    console.log('[lead] LEAD_WEBHOOK_URL não definido. Lead recebido:', JSON.stringify(lead));
  }

  // SubmitApplication ao Meta CAPI (adicional; não bloqueia o lead).
  // O slug vem do path /produtos/{slug}/consultoria/api/lead/.
  const tracking = body.tracking;
  if (tracking?.eventId) {
    const slug = new URL(req.url).pathname.split('/')[2] || 'kitgestaof4';
    try {
      await sendApplicationEvent({
        slug,
        leadType: 'post_purchase',
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
      console.error('[lead] CAPI SubmitApplication falhou:', err);
    }
  }

  return NextResponse.json({ ok: true });
}
