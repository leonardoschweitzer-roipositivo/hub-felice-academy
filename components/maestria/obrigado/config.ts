/* ============================================================
   Página de Obrigado · Maestria Zigomática — configuração central
   Edite SÓ aqui os links/parâmetros da página de obrigado.
   ============================================================ */

/** Rota do questionário de qualificação — para onde os CTAs "Agendar
    consultoria" levam. O aluno responde e é direcionado à confirmação. */
export const QUESTIONARIO_URL = '/produtos/maestria-zigomatica/consultoria';

/** Rota da página de confirmação (recebimento dos dados). */
export const CONFIRMACAO_URL = '/produtos/maestria-zigomatica/consultoria/confirmado';

/** Acesso às aulas do curso (link secundário, discreto).
    ⚠️ Ajustar para a URL real de entrega do curso (área do aluno). */
export const CURSO_URL = '/plataforma';

/** WhatsApp de suporte (botão flutuante). */
export const WHATSAPP_URL =
  'https://wa.me/5588981391199?text=' +
  encodeURIComponent(
    'Olá! Acabei de adquirir a Maestria Zigomática e quero agendar minha consultoria gratuita.',
  );

/** Prazo, em dias, alinhado à garantia incondicional. Usado na copy de urgência. */
export const PRAZO_DIAS = 7;

/** Opcional: URL de um vídeo de boas-vindas (embed iframe). Vazio = esconde o
    slot, e é como está hoje (11/08/2026, a pedido do Leo).
    Estava com o Wistia `ufbdtd0dj4` emprestado do Kit — um vídeo que nem é do
    Dr. Sócrates, embora a copy logo abaixo seja assinada por ele. Para voltar,
    basta pôr aqui o embed do vídeo real da Maestria. */
export const VIDEO_URL = '';
