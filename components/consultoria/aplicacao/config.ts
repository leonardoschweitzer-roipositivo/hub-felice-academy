import { WHATSAPP_NUMERO, whatsappUrl } from '@/lib/whatsapp/contato';

/* ============================================================
   Aplicação da Consultoria Gestão F4 — configuração central.

   Atenção ao nome da rota: as outras landings usam
   /produtos/<slug>/consultoria para o agendamento da consultoria
   gratuita do funil. Aqui o produto É a consultoria, então a
   sub-rota se chama `aplicacao` (senão viraria
   /produtos/consultoria/consultoria).
   ============================================================ */

/** Rota do questionário de aplicação — destino de todos os CTAs. */
export const APLICACAO_URL = '/produtos/consultoria/aplicacao';

/** Rota da página de confirmação (recebimento dos dados). */
export const CONFIRMACAO_URL = '/produtos/consultoria/aplicacao/confirmado';

/** Volta para a landing (link discreto de "agora não"). */
export const LANDING_URL = '/produtos/consultoria';

/** O WhatsApp da Felice — (88) 98139-1199. O número mora em
    `lib/whatsapp/contato.ts`; aqui é só o reexport, porque o quiz deste
    funil importa `WHATSAPP_NUMERO` deste config. */
export { WHATSAPP_NUMERO };

/** Identificação do funil DENTRO da mensagem do WhatsApp. A equipe atende
    os 7 questionários no mesmo número, então a resposta precisa dizer de
    onde veio sem depender da frase de abertura. */
export const ORIGEM_LABEL = 'Consultoria Gestão F4 · candidatura (landing)';

/** WhatsApp de suporte. */
export const WHATSAPP_URL = whatsappUrl('Olá! Me candidatei à Consultoria Gestão F4 e gostaria de falar com a equipe.');
