import {
  graphEndpoint,
  META_CAPI_TOKEN,
  META_TEST_EVENT_CODE,
  SITE_URL,
} from './config';
import { hashEmail, hashPhone, hashPlain, sha256hex } from './hash';

export type CapiResult = { ok: boolean; status: number; body: unknown };

/** Sinais de identidade brutos (antes de hashear). Campos ausentes são omitidos. */
export type IdentityInput = {
  email?: string | null;
  phone?: string | null;
  cpf?: string | null;
  visitorId?: string | null;
  fbp?: string | null;
  fbc?: string | null;
  ip?: string | null;
  userAgent?: string | null;
};

type UserData = {
  em?: string[];
  ph?: string[];
  external_id?: string[];
  fbp?: string;
  fbc?: string;
  client_ip_address?: string;
  client_user_agent?: string;
};

type CapiEvent = {
  event_name: string;
  event_time: number;
  event_id: string;
  action_source: 'website';
  event_source_url: string;
  user_data: UserData;
  custom_data?: Record<string, unknown>;
};

/** Monta user_data hasheando PII; fbp/fbc/ip/ua vão em texto puro. Omite ausentes. */
function buildUserData(id: IdentityInput): UserData {
  const ud: UserData = {};

  const em = hashEmail(id.email);
  if (em) ud.em = [em];

  const ph = hashPhone(id.phone);
  if (ph) ud.ph = [ph];

  const ext: string[] = [];
  const cpf = id.cpf?.replace(/\D/g, '');
  if (cpf) ext.push(sha256hex(cpf));
  const vid = hashPlain(id.visitorId);
  if (vid) ext.push(vid);
  if (ext.length) ud.external_id = ext;

  if (id.fbp) ud.fbp = id.fbp;
  if (id.fbc) ud.fbc = id.fbc;
  if (id.ip) ud.client_ip_address = id.ip;
  if (id.userAgent) ud.client_user_agent = id.userAgent;

  return ud;
}

function nowSec(): number {
  return Math.floor(Date.now() / 1000);
}

export function buildPurchaseEvent(args: {
  transactionId: string;
  slug?: string; // ausente quando a oferta não está mapeada → URL genérica
  value: number;
  contentName: string;
  identity: IdentityInput;
  eventTime?: number;
}): CapiEvent {
  const eventSourceUrl = args.slug
    ? `${SITE_URL}/produtos/${args.slug}/obrigado/`
    : `${SITE_URL}/`;
  return {
    event_name: 'Purchase',
    event_time: args.eventTime ?? nowSec(),
    event_id: `purchase_${args.transactionId}`,
    action_source: 'website',
    event_source_url: eventSourceUrl,
    user_data: buildUserData(args.identity),
    custom_data: {
      currency: 'BRL',
      value: args.value,
      order_id: args.transactionId,
      content_name: args.contentName,
    },
  };
}

export function buildApplicationEvent(args: {
  eventId: string; // 'app_<uuid>' — mesmo do Pixel do browser (dedup)
  slug: string;
  leadType: 'post_purchase' | 'cold';
  contentName?: string;
  identity: IdentityInput;
  eventTime?: number;
}): CapiEvent {
  return {
    event_name: 'SubmitApplication',
    event_time: args.eventTime ?? nowSec(),
    event_id: args.eventId,
    action_source: 'website',
    event_source_url: `${SITE_URL}/produtos/${args.slug}/consultoria/`,
    user_data: buildUserData(args.identity),
    custom_data: {
      source: args.slug,
      lead_type: args.leadType,
      ...(args.contentName ? { content_name: args.contentName } : {}),
    },
  };
}

/** Envia um evento ao CAPI. Nunca lança fatal — devolve o resultado p/ log. */
export async function sendCapiEvent(event: CapiEvent): Promise<CapiResult> {
  if (!META_CAPI_TOKEN) {
    return { ok: false, status: 0, body: 'META_CAPI_TOKEN ausente' };
  }

  const payload: Record<string, unknown> = { data: [event] };
  if (META_TEST_EVENT_CODE) payload.test_event_code = META_TEST_EVENT_CODE;

  const url = `${graphEndpoint()}?access_token=${encodeURIComponent(META_CAPI_TOKEN)}`;
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      // Não deixa o Meta lento travar a request (webhook / rota de lead).
      signal: AbortSignal.timeout(5000),
    });
    const body = await res.json().catch(() => null);
    return { ok: res.ok, status: res.status, body };
  } catch (err) {
    return { ok: false, status: 0, body: String(err) };
  }
}
