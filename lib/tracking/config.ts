// Configuração central do tracking Meta (Pixel + CAPI).
// Segredos vivem só no servidor — NUNCA prefixar com NEXT_PUBLIC_.
// O único valor exposto ao browser é o ID do Pixel (que é público mesmo).

/** ID do Pixel — público; o mesmo no browser e no CAPI. ("masterclass pixel") */
export const META_PIXEL_ID =
  process.env.NEXT_PUBLIC_META_PIXEL_ID || '1608754590127302';

/** Versão da Graph API. Confirmar a vigente antes do deploy. */
export const GRAPH_VERSION = process.env.GRAPH_VERSION || 'v21.0';

/** Domínio canônico — usado no event_source_url (sem barra no fim). */
export const SITE_URL = (
  process.env.SITE_URL || 'https://www.feliceacademy.com.br'
).replace(/\/+$/, '');

/** Segredos de servidor (ausentes/'' no bundle do browser). */
export const META_CAPI_TOKEN = process.env.META_CAPI_TOKEN || '';
export const META_TEST_EVENT_CODE = process.env.META_TEST_EVENT_CODE || '';
export const GREEN_WEBHOOK_TOKEN = process.env.GREEN_WEBHOOK_TOKEN || '';

/** Endpoint de eventos do CAPI. */
export function graphEndpoint(): string {
  return `https://graph.facebook.com/${GRAPH_VERSION}/${META_PIXEL_ID}/events`;
}
