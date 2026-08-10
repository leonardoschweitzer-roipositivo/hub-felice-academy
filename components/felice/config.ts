/* ============================================================
   KIT GESTÃO F4 — links e preço da oferta.
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
