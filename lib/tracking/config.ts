// Configuração central do tracking Meta (Pixel + CAPI).
// Segredos vivem só no servidor — NUNCA prefixar com NEXT_PUBLIC_.
// O único valor exposto ao browser é o ID do Pixel (que é público mesmo).

/** ID do Pixel — público; o mesmo no browser e no CAPI. ("masterclass pixel") */
export const META_PIXEL_ID =
  process.env.NEXT_PUBLIC_META_PIXEL_ID || '1608754590127302';

/** Versão da Graph API usada no CAPI (que é Marketing API). v25.0 é a
 *  vigente nas duas tabelas da Meta em 11/2026; a v21.0 de antes já tinha
 *  vencido na Marketing API (09/2025). Tabela: developers.facebook.com/docs/graph-api/changelog/versions */
export const GRAPH_VERSION = process.env.GRAPH_VERSION || 'v25.0';

/** Domínio canônico — usado no event_source_url (sem barra no fim). */
export const SITE_URL = (
  process.env.SITE_URL || 'https://www.feliceacademy.com.br'
).replace(/\/+$/, '');

/** Segredos de servidor (ausentes/'' no bundle do browser). */
export const META_CAPI_TOKEN = process.env.META_CAPI_TOKEN || '';
export const META_TEST_EVENT_CODE = process.env.META_TEST_EVENT_CODE || '';
export const GREEN_WEBHOOK_TOKEN = process.env.GREEN_WEBHOOK_TOKEN || '';

/** O webhook da Greenn envia o Purchase ao CAPI só com 'true'.
 *  Desligado por padrão: a fonte única de InitiateCheckout e Purchase é a
 *  integração Pixel + Conversions API configurada na própria Greenn. Ligar
 *  os dois conta cada venda em dobro (os event_ids não batem). */
export const META_PURCHASE_VIA_WEBHOOK = process.env.META_PURCHASE_VIA_WEBHOOK === 'true';

/** Endpoint de eventos do CAPI. */
export function graphEndpoint(): string {
  return `https://graph.facebook.com/${GRAPH_VERSION}/${META_PIXEL_ID}/events`;
}
