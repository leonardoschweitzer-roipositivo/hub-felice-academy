'use client';

import { useEffect, useRef } from 'react';
import { funnelBySlug } from '@/lib/tracking/funnels';
import { randomId } from '@/lib/tracking/cookies';

const ENDPOINT = '/api/tracking/view-content/';

/** Manda o par de servidor do ViewContent. sendBeacon sobrevive à pessoa
 *  sair da página logo depois; fetch keepalive é o plano B. */
function enviarAoServidor(payload: { eventId: string; slug: string; url: string }) {
  const body = JSON.stringify(payload);
  try {
    if (navigator.sendBeacon?.(ENDPOINT, new Blob([body], { type: 'application/json' }))) return;
  } catch {
    /* cai no fetch */
  }
  fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
    keepalive: true,
  }).catch(() => {});
}

/** Dispara ViewContent na página de vendas. Montar com o slug do produto.
 *
 *  Nas landings de curso (funil com `offer` no Greenn) o evento vai também
 *  pela Conversions API, com o mesmo event_id ('vc_<uuid>') para o Meta
 *  deduplicar. Consultoria e mentorias seguem só no Pixel. */
export function ViewContent({ slug }: { slug: string }) {
  const fired = useRef(false);
  useEffect(() => {
    if (fired.current) return;
    fired.current = true;
    const f = funnelBySlug(slug);
    const eventId = `vc_${randomId().replace(/[^A-Za-z0-9_-]/g, '')}`;
    window.fbq?.(
      'track',
      'ViewContent',
      {
        content_name: f?.contentName ?? slug,
        content_ids: [slug],
        content_type: 'product',
        value: f?.value,
        currency: 'BRL',
      },
      { eventID: eventId },
    );
    if (f?.offer) enviarAoServidor({ eventId, slug, url: window.location.href });
  }, [slug]);
  return null;
}
