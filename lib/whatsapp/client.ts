import type { WaSendResult, WaTextMessage, WaTemplateMessage } from './types';

/* ============================================================
   WhatsApp — ponto ÚNICO de envio.
   O Atendimento e a Automação chamam SEMPRE `whatsapp`, nunca a API
   direto. Hoje aponta para o mock; para ativar a API Oficial (Meta
   Cloud API) basta criar `metaCloudClient` (implementando a mesma
   interface) e trocar o export — sem tocar nas telas.

   Integração futura (NÃO implementada agora):
   - POST app/api/whatsapp/send/route.ts → Graph API com
     WHATSAPP_TOKEN + WHATSAPP_PHONE_ID (ver .env.example).
   - app/api/webhooks/whatsapp/route.ts → recebe mensagens e status
     (sent/delivered/read) e atualiza o store/DB.
   ============================================================ */

export interface WhatsappClient {
  /** Texto livre (só dentro da janela de 24h). */
  sendText(msg: WaTextMessage): Promise<WaSendResult>;
  /** Template HSM (inicia conversa fora da janela). */
  sendTemplate(msg: WaTemplateMessage): Promise<WaSendResult>;
}

let mockSeq = 0;
const mockId = () => `wamid.mock-${(mockSeq += 1).toString(36)}`;

/** Mock: simula o aceite da Meta. Não faz rede. */
export const mockWhatsappClient: WhatsappClient = {
  async sendText({ to, text }) {
    if (!to || !text.trim()) return { id: mockId(), status: 'falha' };
    return { id: mockId(), status: 'enviada' };
  },
  async sendTemplate({ to, template }) {
    if (!to || !template) return { id: mockId(), status: 'falha' };
    return { id: mockId(), status: 'enviada' };
  },
};

// Troca aqui quando a API Oficial estiver pronta:
//   export const whatsapp = metaCloudClient;
export const whatsapp: WhatsappClient = mockWhatsappClient;
