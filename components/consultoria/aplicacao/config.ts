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

/** WhatsApp da Felice, só dígitos (formato wa.me). Fonte única do número —
    usado pelo link de suporte e pelo envio da candidatura. */
export const WHATSAPP_NUMERO = '5588981391199';

/** Identificação do funil DENTRO da mensagem do WhatsApp. A equipe atende
    os 7 questionários no mesmo número, então a resposta precisa dizer de
    onde veio sem depender da frase de abertura. */
export const ORIGEM_LABEL = 'Consultoria Gestão F4 · candidatura (landing)';

/** WhatsApp de suporte. */
export const WHATSAPP_URL =
  `https://wa.me/${WHATSAPP_NUMERO}?text=` +
  encodeURIComponent('Olá! Me candidatei à Consultoria Gestão F4 e gostaria de falar com a equipe.');
