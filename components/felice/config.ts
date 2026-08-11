/* ============================================================
   KIT GESTÃO F4 — links, preço e vídeo, compartilhados pelas páginas
   do produto (landing de vendas, obrigado e área do Kit).
   O checkout estava repetido em 3 seções (Oferta, FinalCta, Footer);
   ficar em três lugares é como o `ch_id` some numa troca de link.
   ============================================================ */

/** Checkout do Kit na Greenn/Payfast. O código da oferta (`4iIlqU`)
 *  também vive em lib/tracking/funnels.ts — trocar nos dois. */
export const CHECKOUT_URL = 'https://payfast.greenn.com.br/nwktnth/offer/4iIlqU?ch_id=140311';

/** Preço da oferta. `aVista` é a âncora usada em toda a copy da landing
 *  ("Liberar Acesso por R$ 97"); `parcela` é o que o checkout oferece. */
export const PRECO = {
  aVista: 'R$ 97',
  parcela: { vezes: '12x', valor: 'R$ 9,97' },
};

/** Vídeo de "como usar os documentos", no Panda. Aparece na página de obrigado
 *  E na área do Kit — por isso mora aqui, e não no config da obrigado. Vazio
 *  esconde os dois slots. Os wrappers (`.obg-video` e `.kit-hero-video`) já são
 *  16:9, então do snippet do Panda entra só o src e o id. */
export const VIDEO_URL =
  'https://player-vz-90784769-874.tv.pandavideo.com.br/embed/?v=eb0081db-a729-42a2-b0f2-ff395e13d75d';

/** id que o player do Panda usa para se achar na página (`panda-<uuid>`). */
export const VIDEO_IFRAME_ID = 'panda-eb0081db-a729-42a2-b0f2-ff395e13d75d';
