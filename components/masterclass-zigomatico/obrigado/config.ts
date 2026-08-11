/* ============================================================
   Página de Obrigado · Masterclass Zigomático Descomplicado — config
   Edite SÓ aqui os links/parâmetros da página de obrigado.

   Gatilho NEUTRO: a copy fala em "acesso liberado", e não em "compra".
   Nasceu assim porque a landing tinha acesso grátis e Premium; o gratuito
   saiu em 10/08/2026 e hoje todo mundo que chega aqui pagou os R$ 67 —
   a copy neutra continua valendo, mas já pode falar em compra.
   ============================================================ */

/** Rota do questionário de qualificação — para onde os CTAs "Agendar
    consultoria" levam. O lead responde e é direcionado à confirmação. */
export const QUESTIONARIO_URL = '/produtos/masterclass-zigomatico/consultoria';

/** Rota da página de confirmação (recebimento dos dados). */
export const CONFIRMACAO_URL = '/produtos/masterclass-zigomatico/consultoria/confirmado';

/** Onde a pessoa assiste à masterclass. A aula COMPLETA toca no hero desta
    própria página (10/08/2026), então "assistir" é uma âncora para o player —
    e não mais a área do aluno, que não tem a aula. */
export const ACESSO_URL = '/produtos/masterclass-zigomatico/obrigado#aula';

/** WhatsApp da Felice, só dígitos (formato wa.me). Fonte única do número —
    usado pelo botão flutuante e pelo envio do questionário de consultoria. */
export const WHATSAPP_NUMERO = '5588981391199';

/** Identificação do funil DENTRO da mensagem do WhatsApp. A equipe atende
    os 7 questionários no mesmo número, então a resposta precisa dizer de
    onde veio sem depender da frase de abertura. */
export const ORIGEM_LABEL = 'Masterclass Zigomático · consultoria gratuita (pós-aula)';

/** WhatsApp de suporte (botão flutuante). */
export const WHATSAPP_URL =
  `https://wa.me/${WHATSAPP_NUMERO}?text=` +
  encodeURIComponent(
    'Olá! Acabei de garantir meu acesso à Masterclass Zigomático Descomplicado e quero agendar minha consultoria gratuita.',
  );

/** Prazo, em dias, alinhado à garantia incondicional. Usado na copy de urgência. */
export const PRAZO_DIAS = 7;

/** A MASTERCLASS COMPLETA (16:9), no Panda. Não é mais um vídeo de
    boas-vindas: é a entrega do produto, e é por isso que o hero pede o play.
    Vazio = esconde o slot. O wrapper `.obg-video` já é 16:9, então do snippet
    do Panda entra só o src. */
export const VIDEO_URL =
  'https://player-vz-90784769-874.tv.pandavideo.com.br/embed/?v=902930f1-914b-4c5e-b37c-0e7ce427355f';

/** id que o player do Panda usa para se achar na página (`panda-<uuid>`). */
export const VIDEO_IFRAME_ID = 'panda-902930f1-914b-4c5e-b37c-0e7ce427355f';
