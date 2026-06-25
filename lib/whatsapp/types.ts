/* ============================================================
   WhatsApp — tipos da camada de envio.
   Espelham a WhatsApp Cloud API (Meta). Hoje só o mock os usa;
   quando ligarmos a API Oficial, o cliente real implementa a mesma
   interface (ver client.ts) e as telas não mudam.
   Docs: https://developers.facebook.com/docs/whatsapp/cloud-api
   ============================================================ */

/** Status de entrega — equivalente aos webhooks de status da Meta. */
export type WaStatus = 'enviada' | 'entregue' | 'lida' | 'falha';

export type WaSendResult = {
  /** wamid retornado pela Meta (mock gera um id local). */
  id: string;
  status: WaStatus;
};

/** Mensagem de sessão (texto livre) — só permitida dentro da janela de 24h. */
export type WaTextMessage = {
  to: string;
  text: string;
};

/** Mensagem por template HSM — única forma de INICIAR conversa fora da janela. */
export type WaTemplateMessage = {
  to: string;
  /** Nome do template aprovado na Meta. */
  template: string;
  /** Variáveis do corpo ({{1}}, {{2}}, ...). */
  vars: string[];
  /** Locale do template (default pt_BR). */
  locale?: string;
};
