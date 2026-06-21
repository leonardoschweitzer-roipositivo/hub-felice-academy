'use client';

import { useEffect, useRef } from 'react';
import { funnelBySlug } from '@/lib/tracking/funnels';

// Chaves prováveis do id da transação no redirect do Green.
// `id` genérico foi deixado de fora de propósito (um ?id= qualquer dispararia
// um Purchase com event_id errado). TODO: confirmar a chave real do Green e
// fixar só ela — o valor PRECISA bater com sale.id do webhook (mesmo event_id,
// senão o Purchase conta em dobro).
const TX_KEYS = ['transaction_id', 'transactionId', 'tx', 'sale_id', 'saleId'];

/* Purchase do browser na página de obrigado (domínio próprio).
   Só dispara se houver transaction_id na URL — usando o mesmo event_id do
   servidor (purchase_{tx}) p/ o Meta deduplicar. Sem tx, o Purchase fica só
   no servidor (não duplica). */
export function PurchasePixel({ slug }: { slug: string }) {
  const fired = useRef(false);
  useEffect(() => {
    if (fired.current) return;
    const params = new URLSearchParams(window.location.search);
    let tx: string | null = null;
    for (const k of TX_KEYS) {
      const v = params.get(k);
      if (v) {
        tx = v;
        break;
      }
    }
    if (!tx) return; // sem id → servidor cobre
    fired.current = true;
    const f = funnelBySlug(slug);
    window.fbq?.(
      'track',
      'Purchase',
      { value: f?.value, currency: 'BRL', content_name: f?.contentName ?? slug },
      { eventID: `purchase_${tx}` }
    );
  }, [slug]);
  return null;
}
