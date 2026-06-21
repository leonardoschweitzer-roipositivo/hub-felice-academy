import { NextResponse } from 'next/server';
import { GREEN_WEBHOOK_TOKEN } from '@/lib/tracking/config';
import { funnelByOffer } from '@/lib/tracking/funnels';
import { buildPurchaseEvent, sendCapiEvent, type IdentityInput } from '@/lib/tracking/capi';

export const runtime = 'nodejs';

type ParsedSale = {
  type: string;
  status: string;
  transactionId: string;
  offer: string | null;
  value: number | null;
  identity: IdentityInput;
};

/* Extração defensiva do payload do Green.
   TODO: confirmar contra um payload REAL do Green e ajustar os caminhos.
   Cobrimos tanto campos no topo quanto aninhados em sale/data, e nomes
   alternativos comuns (customer/buyer, document/cpf, etc.). */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function parseGreenWebhook(raw: any): ParsedSale {
  const sale = raw?.sale ?? raw?.data ?? raw ?? {};
  const client = sale?.client ?? sale?.customer ?? sale?.buyer ?? raw?.client ?? {};
  const tracking = sale?.tracking ?? raw?.tracking ?? sale?.metadata ?? {};

  const type = String(raw?.type ?? raw?.event ?? sale?.type ?? 'sale').toLowerCase();
  const status = String(sale?.status ?? raw?.status ?? '').toLowerCase();
  const transactionId = String(
    sale?.id ?? sale?.transaction_id ?? sale?.transactionId ?? raw?.id ?? ''
  );
  const offerRaw = sale?.offer?.hash ?? sale?.offer ?? sale?.offer_id ?? raw?.offer ?? null;
  const rawValue = sale?.amount ?? sale?.value ?? sale?.total ?? raw?.amount ?? null;
  const value = rawValue != null ? Number(rawValue) : null;

  return {
    type,
    status,
    transactionId,
    offer: offerRaw ? String(offerRaw) : null,
    value: Number.isFinite(value as number) ? (value as number) : null,
    identity: {
      email: client?.email ?? null,
      phone: client?.phone ?? client?.cellphone ?? client?.whatsapp ?? client?.mobile ?? null,
      cpf: client?.cpf ?? client?.document ?? client?.doc ?? null,
      visitorId: tracking?.visitor_id ?? sale?.visitor_id ?? null,
      fbp: tracking?.fbp ?? null,
      fbc: tracking?.fbc ?? null,
      ip: client?.ip ?? sale?.ip ?? null,
      userAgent: tracking?.user_agent ?? null,
    },
  };
}

function tokenFromRequest(req: Request, url: URL): string {
  return (
    req.headers.get('x-green-token') ||
    req.headers.get('authorization')?.replace(/^Bearer\s+/i, '') ||
    url.searchParams.get('token') ||
    ''
  );
}

const PAID_STATUSES = ['paid', 'approved', 'completed', 'complete'];

export async function POST(req: Request) {
  const url = new URL(req.url);

  // 1. Token
  if (!GREEN_WEBHOOK_TOKEN || tokenFromRequest(req, url) !== GREEN_WEBHOOK_TOKEN) {
    return NextResponse.json({ ok: false, error: 'unauthorized' }, { status: 401 });
  }

  // 2. Body
  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  const sale = parseGreenWebhook(raw);

  // 3. Só venda paga dispara (senão 200 silencioso, p/ o Green não reenviar)
  if (sale.type !== 'sale' && sale.type !== 'purchase') {
    return NextResponse.json({ ok: true, ignored: 'type' });
  }
  if (!PAID_STATUSES.includes(sale.status)) {
    return NextResponse.json({ ok: true, ignored: 'status' });
  }
  if (!sale.transactionId) {
    return NextResponse.json({ ok: true, ignored: 'no_transaction_id' });
  }

  // 4. Rotear produto pela oferta. Oferta não mapeada → atribuição genérica
  //    (NÃO assume Kit) + aviso p/ preencher o `offer` em funnels.ts.
  const funnel = funnelByOffer(sale.offer);
  if (!funnel) {
    console.warn('[green-webhook] oferta não mapeada em funnels.ts', {
      offer: sale.offer,
      tx: sale.transactionId,
    });
  }
  const value = funnel?.value ?? sale.value ?? 0;
  const contentName = funnel?.contentName ?? 'Produto Felice';

  // 5. Monta o Purchase (event_id = purchase_{tx}) e envia ao CAPI
  const event = buildPurchaseEvent({
    transactionId: sale.transactionId,
    slug: funnel?.slug, // undefined → event_source_url genérico, sem misrotear pro Kit
    value,
    contentName,
    identity: sale.identity,
  });

  const result = await sendCapiEvent(event);
  if (!result.ok) {
    // Não derruba o endpoint: loga p/ retry manual e responde 200 (evita reentrega infinita).
    console.error('[green-webhook] CAPI falhou', {
      event_id: event.event_id,
      status: result.status,
      body: result.body,
    });
  }

  return NextResponse.json({ ok: true, event_id: event.event_id, sent: result.ok });
}
