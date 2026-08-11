/* ============================================================
   Página de Obrigado · CRC de Alta Performance — configuração central
   Edite SÓ aqui os links/parâmetros da página de obrigado.

   Duas diferenças em relação às obrigados de gestao-f4 / maestria:

   1. NÃO tem `VIDEO_URL` — esta obrigado é sem vídeo, por decisão do
      Leo (11/08/2026). O `HeroSucesso` daqui nem tem o slot.
   2. NÃO tem `CURSO_URL` — o acesso às aulas chega pelo e-mail da
      Greenn, então a página não promete uma área do aluno que não
      entrega o curso. Sem isso, o hero, o CTA final e a confirmação
      ficam com um caminho só: agendar a consultoria.

   Atenção ao nome: a pasta e a rota são `vendas-secretaria` (nome
   antigo do produto), mas o curso se chama CRC de Alta Performance.
   ============================================================ */

/** Rota do questionário de qualificação — para onde os CTAs "Agendar
    consultoria" levam. O aluno responde e é direcionado à confirmação. */
export const QUESTIONARIO_URL = '/produtos/vendas-secretaria/consultoria';

/** Rota da página de confirmação (recebimento dos dados). */
export const CONFIRMACAO_URL = '/produtos/vendas-secretaria/consultoria/confirmado';

/** WhatsApp da Felice, só dígitos (formato wa.me). Fonte única do número —
    usado pelo botão flutuante e pelo envio do questionário. */
export const WHATSAPP_NUMERO = '5588981391199';

/** Identificação do funil DENTRO da mensagem do WhatsApp. A equipe atende
    todos os questionários no mesmo número, então a resposta precisa dizer
    de onde veio sem depender da frase de abertura. */
export const ORIGEM_LABEL = 'CRC de Alta Performance · consultoria gratuita (pós-compra)';

/** WhatsApp de suporte (botão flutuante). */
export const WHATSAPP_URL =
  `https://wa.me/${WHATSAPP_NUMERO}?text=` +
  encodeURIComponent(
    'Olá! Acabei de adquirir o CRC de Alta Performance e quero agendar minha consultoria gratuita.',
  );

/** Prazo, em dias, alinhado à garantia incondicional do curso. Usado na
    copy de urgência. */
export const PRAZO_DIAS = 7;
