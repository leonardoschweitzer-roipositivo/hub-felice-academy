'use client';

import { useEffect, useRef } from 'react';
import { funnelBySlug } from '@/lib/tracking/funnels';

/** Dispara ViewContent na página de vendas. Montar com o slug do produto. */
export function ViewContent({ slug }: { slug: string }) {
  const fired = useRef(false);
  useEffect(() => {
    if (fired.current) return;
    fired.current = true;
    const f = funnelBySlug(slug);
    window.fbq?.('track', 'ViewContent', {
      content_name: f?.contentName ?? slug,
      value: f?.value,
      currency: 'BRL',
    });
  }, [slug]);
  return null;
}
