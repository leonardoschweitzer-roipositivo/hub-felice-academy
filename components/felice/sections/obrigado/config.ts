/* ============================================================
   Página de Obrigado · Kit Gestão F4 — configuração central
   Edite SÓ aqui os links/parâmetros da página de obrigado.
   ============================================================ */

/** ⚠️ PREENCHER: link de agendamento da consultoria (Calendly, etc.).
    Todos os CTAs primários apontam para cá. */
export const CONSULTORIA_URL = 'https://AGENDAR.EXEMPLO.COM';

/** Acesso aos 4 documentos do Kit (link secundário, discreto). */
export const DOCS_URL = '/gestao/kit-f4';

/** WhatsApp de suporte (botão flutuante). */
export const WHATSAPP_URL =
  'https://wa.me/5588981391199?text=' +
  encodeURIComponent(
    'Olá! Acabei de adquirir o Kit Gestão F4 e quero agendar minha consultoria gratuita.',
  );

/** Prazo, em dias, alinhado à garantia incondicional. Usado na copy de urgência. */
export const PRAZO_DIAS = 7;

/** Opcional: URL de um vídeo de boas-vindas (embed iframe). Vazio = esconde o slot.
    Wistia media ufbdtd0dj4 (embed por iframe, equivalente ao web-component). */
export const VIDEO_URL = 'https://fast.wistia.net/embed/iframe/ufbdtd0dj4';
