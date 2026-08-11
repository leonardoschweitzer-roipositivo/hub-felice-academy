/* ============================================================
   Aplicação da Mentoria de Zigomático — configuração central.

   A mentoria não tem checkout: a entrada é por candidatura. Como a
   sub-rota `consultoria` das outras landings é o agendamento da
   consultoria gratuita do funil, aqui ela se chama `aplicacao`
   (mesmo padrão da Consultoria Gestão F4).
   ============================================================ */

/** Rota do questionário de candidatura — destino de todos os CTAs. */
export const APLICACAO_URL = '/produtos/mentoria-zigomatico/aplicacao';

/** Rota da página de confirmação (candidatura recebida). */
export const CONFIRMACAO_URL = '/produtos/mentoria-zigomatico/aplicacao/confirmado';

/** Volta para a landing (link discreto de "agora não"). */
export const LANDING_URL = '/produtos/mentoria-zigomatico';

/** Slug do produto para o tracking (Pixel + CAPI). */
export const TRACKING_SLUG = 'mentoria-zigomatico';

/** WhatsApp da Felice, só dígitos (formato wa.me). Fonte única do número —
    usado pelo envio da candidatura e pelo link de suporte. */
export const WHATSAPP_NUMERO = '5588981391199';

/** WhatsApp de suporte (quem não conseguiu enviar pelo questionário). */
export const WHATSAPP_URL =
  `https://wa.me/${WHATSAPP_NUMERO}?text=` +
  encodeURIComponent(
    'Olá! Me candidatei à Mentoria de Zigomático e gostaria de falar com a equipe.',
  );
