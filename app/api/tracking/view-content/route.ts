/* ============================================================
   POST /api/tracking/view-content/ — par de servidor do ViewContent.

   O <ViewContent /> dispara o evento no Pixel com eventID 'vc_<uuid>' e
   manda o mesmo id para cá por sendBeacon; esta rota reenvia ao CAPI com
   IP, user-agent e os cookies first-party (_fbp, _fbc, visitor_id). Mesmo
   event_name + event_id → o Meta deduplica.

   Só para as landings de cursos (funil com `offer` no Greenn). Consultoria
   e mentorias não têm checkout e ficam fora.

   Sempre responde 204: é um beacon, ninguém lê a resposta, e falhar aqui
   nunca pode afetar a página.
   ============================================================ */

import { cookies } from 'next/headers';
import { buildViewContentEvent, sendCapiEvent } from '@/lib/tracking/capi';
import { SITE_URL } from '@/lib/tracking/config';
import { funnelBySlug } from '@/lib/tracking/funnels';
import { ipDe } from '@/lib/assistente/rate-limit';

export const runtime = 'nodejs';

const EVENT_ID = /^vc_[A-Za-z0-9_-]{8,64}$/;

/* Rate limit próprio, em memória, por IP (mesma limitação de serverless
   descrita em lib/assistente/rate-limit.ts). Não reusa o `limitado()` de lá
   de propósito: ele divide o Map com o chat do assistente, e cada ViewContent
   contaria contra o limite de mensagens da mesma pessoa. */
const WINDOW_MS = 60_000;
const MAX_REQ = 20;
const buckets = new Map<string, number[]>();
function limitado(ip: string): boolean {
  const now = Date.now();
  const hits = (buckets.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  hits.push(now);
  buckets.set(ip, hits);
  if (buckets.size > 5000) buckets.clear(); // instância longeva: não cresce sem fim
  return hits.length > MAX_REQ;
}

function semConteudo() {
  return new Response(null, { status: 204 });
}

/** Só aceita URL do domínio canônico; qualquer outra (preview, localhost,
 *  lixo) vira a URL canônica da landing. */
function urlDaLanding(raw: unknown, slug: string): string {
  const canonica = `${SITE_URL}/produtos/${slug}/`;
  if (typeof raw !== 'string') return canonica;
  try {
    const u = new URL(raw);
    return u.origin === new URL(SITE_URL).origin ? u.toString() : canonica;
  } catch {
    return canonica;
  }
}

export async function POST(req: Request) {
  const ip = ipDe(req);
  if (limitado(ip)) return semConteudo();

  let body: { eventId?: unknown; slug?: unknown; url?: unknown };
  try {
    body = JSON.parse(await req.text());
  } catch {
    return semConteudo();
  }

  const slug = typeof body.slug === 'string' ? body.slug : '';
  const eventId = typeof body.eventId === 'string' ? body.eventId : '';
  const funnel = funnelBySlug(slug);
  if (!funnel?.offer || !EVENT_ID.test(eventId)) return semConteudo();

  const jar = cookies();
  const event = buildViewContentEvent({
    eventId,
    slug,
    eventSourceUrl: urlDaLanding(body.url, slug),
    value: funnel.value,
    contentName: funnel.contentName,
    identity: {
      visitorId: jar.get('visitor_id')?.value ?? null,
      fbp: jar.get('_fbp')?.value ?? null,
      fbc: jar.get('_fbc')?.value ?? null,
      ip: ip === 'desconhecido' ? null : ip,
      userAgent: req.headers.get('user-agent'),
    },
  });

  const result = await sendCapiEvent(event);
  if (!result.ok) {
    console.error('[view-content] CAPI falhou', {
      event_id: event.event_id,
      status: result.status,
      body: result.body,
    });
  }
  return semConteudo();
}
