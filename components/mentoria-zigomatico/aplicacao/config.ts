import { WHATSAPP_NUMERO, whatsappUrl } from '@/lib/whatsapp/contato';

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

/** Identificação do funil DENTRO da mensagem do WhatsApp. A equipe atende
    os 7 questionários no mesmo número, então a resposta precisa dizer de
    onde veio sem depender da frase de abertura. */
export const ORIGEM_LABEL = 'Mentoria de Zigomático · candidatura (landing)';

/** O WhatsApp da Felice — (88) 98139-1199. O número mora em
    `lib/whatsapp/contato.ts`; aqui é só o reexport, porque o quiz deste
    funil importa `WHATSAPP_NUMERO` deste config. */
export { WHATSAPP_NUMERO };

/** WhatsApp de suporte (quem não conseguiu enviar pelo questionário). */
export const WHATSAPP_URL = whatsappUrl(
  'Olá! Me candidatei à Mentoria de Zigomático e gostaria de falar com a equipe.',
);
