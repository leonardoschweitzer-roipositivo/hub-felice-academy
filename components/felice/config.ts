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

/** Vídeo de "como usar os documentos". Aparece na página de obrigado E na área
 *  do Kit — por isso mora aqui, e não no config da obrigado. Vazio esconde os
 *  dois slots.
 *
 *  ⚠️ PLACEHOLDER: o Wistia `ufbdtd0dj4` NÃO é o Dr. Sócrates (aparece outra
 *  pessoa) e é o mesmo embed reusado nas obrigados de gestao-f4 e maestria.
 *  A copy das duas páginas trata esse vídeo como sendo dele — trocar pelo
 *  vídeo real antes de considerar publicado. */
export const VIDEO_URL = 'https://fast.wistia.net/embed/iframe/ufbdtd0dj4';
