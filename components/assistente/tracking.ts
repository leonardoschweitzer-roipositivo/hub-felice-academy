'use client';

/* ============================================================
   Eventos de comportamento do assistente.

   Todos são `trackCustom`, não eventos padrão do Meta — são sinal de
   comportamento, não de conversão, e não podem competir com ViewContent,
   SubmitApplication e Purchase na atribuição.

   A ÚNICA conversão que o assistente dispara é o `Lead`, e ele mora em
   components/tracking/application.ts (`fireLead`), junto do
   SubmitApplication, porque é o par browser × CAPI que precisa
   compartilhar o event_id para deduplicar.

   Nada aqui pode quebrar a UI: o pixel é sempre opcional (`?.`) e o
   try/catch cobre bloqueador de anúncio.
   ============================================================ */

type Props = Record<string, string | number | boolean | undefined>;

function evento(nome: string, props: Props = {}): void {
  if (typeof window === 'undefined') return;
  try {
    window.fbq?.('trackCustom', nome, props);
  } catch {
    /* rastreamento nunca derruba a conversa */
  }
}

/** Uma vez por sessão, para não contar reabertura como interesse novo. */
function umaVezPorSessao(chave: string): boolean {
  try {
    if (sessionStorage.getItem(chave)) return false;
    sessionStorage.setItem(chave, '1');
    return true;
  } catch {
    // Safari em navegação privada pode negar o sessionStorage; nesse caso
    // é melhor contar duas vezes do que perder o evento.
    return true;
  }
}

export const trackAberto = (pagina: string) => {
  if (umaVezPorSessao('fia_aberto')) evento('AssistenteAberto', { pagina });
};

export const trackPrimeiraMensagem = (pagina: string) => {
  if (umaVezPorSessao('fia_msg')) evento('AssistenteMensagem', { pagina });
};

export const trackLeadOferecido = (produto?: string) =>
  evento('AssistenteLeadOferecido', { produto: produto ?? 'sem produto' });

export const trackWhatsapp = (produto?: string) =>
  evento('AssistenteWhatsapp', { produto: produto ?? 'sem produto' });

export const trackProdutoClicado = (produto: string) =>
  evento('AssistenteProduto', { produto });
