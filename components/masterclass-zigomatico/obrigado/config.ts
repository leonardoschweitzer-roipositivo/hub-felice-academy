/* ============================================================
   Página de Obrigado · Masterclass Zigomático Descomplicado — config
   Edite SÓ aqui os links/parâmetros da página de obrigado.

   Gatilho NEUTRO: serve tanto para quem comprou o Premium (R$ 67)
   quanto para quem garantiu o acesso grátis — por isso a copy fala em
   "acesso liberado", e não em "compra".
   ============================================================ */

/** Rota do questionário de qualificação — para onde os CTAs "Agendar
    consultoria" levam. O lead responde e é direcionado à confirmação. */
export const QUESTIONARIO_URL = '/produtos/masterclass-zigomatico/consultoria';

/** Rota da página de confirmação (recebimento dos dados). */
export const CONFIRMACAO_URL = '/produtos/masterclass-zigomatico/consultoria/confirmado';

/** Acesso à masterclass / área do aluno (link secundário, discreto).
    ⚠️ Ajustar para a URL real de assistir à masterclass (área do aluno). */
export const ACESSO_URL = '/plataforma';

/** WhatsApp de suporte (botão flutuante). */
export const WHATSAPP_URL =
  'https://wa.me/5588981391199?text=' +
  encodeURIComponent(
    'Olá! Acabei de garantir meu acesso à Masterclass Zigomático Descomplicado e quero agendar minha consultoria gratuita.',
  );

/** Prazo, em dias, alinhado à garantia incondicional. Usado na copy de urgência. */
export const PRAZO_DIAS = 7;

/** Opcional: URL de um vídeo de boas-vindas (embed iframe). Vazio = esconde o slot.
    ⚠️ Provisório: reusa o mesmo embed Wistia das outras páginas (ufbdtd0dj4).
    Trocar pelo vídeo de boas-vindas específico da Masterclass quando houver. */
export const VIDEO_URL = 'https://fast.wistia.net/embed/iframe/ufbdtd0dj4';
