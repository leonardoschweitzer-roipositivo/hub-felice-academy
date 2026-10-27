'use client';

import { useEffect, useRef } from 'react';
import { funnelBySlug } from '@/lib/tracking/funnels';
import { randomId } from '@/lib/tracking/cookies';

// Chaves prováveis do id da transação no redirect do Green.
// `id` genérico foi deixado de fora de propósito (um ?id= qualquer dispararia
// um Purchase com event_id errado). TODO: confirmar a chave real do Green e
// fixar só ela — o valor PRECISA bater com sale.id do webhook (mesmo event_id,
// senão o Purchase conta em dobro).
const TX_KEYS = ['transaction_id', 'transactionId', 'tx', 'sale_id', 'saleId'];

/* Purchase do browser na página de obrigado (domínio próprio).
   Só dispara se houver transaction_id na URL — usando o mesmo event_id do
   servidor (purchase_{tx}) p/ o Meta deduplicar. Sem tx, o Purchase fica só
   no servidor (não duplica).

   `always` dispara mesmo sem tx, com event_id aleatório. Troca a garantia de
   não duplicar por garantir o evento no browser: se o servidor também enviar
   o Purchase dessa venda, o Meta pode contar duas vezes. */
export function PurchasePixel({ slug, always = false }: { slug: string; always?: boolean }) {
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
    if (!tx && !always) return; // sem id → servidor cobre
    if (!tx) tx = `nt_${randomId()}`;
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
