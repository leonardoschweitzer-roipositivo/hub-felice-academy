'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { getCookie, setCookie, randomId } from '@/lib/tracking/cookies';

/* ============================================================
   Comportamento client-side do Pixel. O base code (init + 1º PageView)
   roda no layout raiz ANTES da hidratação, então `window.fbq` já existe
   quando estes efeitos rodam. Aqui cuidamos de:
   - PageView nas trocas de rota (App Router navega client-side);
   - cookie first-party visitor_id;
   - _fbc a partir do fbclid quando o cookie não existe;
   - decorar os CTAs do Green com visitor_id + UTMs.
   ============================================================ */

const COOKIE_VISITOR = 'visitor_id';
const ONE_YEAR = 60 * 60 * 24 * 365;
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];

function ensureVisitorId(): string {
  let id = getCookie(COOKIE_VISITOR);
  if (!id) {
    id = randomId();
    setCookie(COOKIE_VISITOR, id, ONE_YEAR);
  }
  return id;
}

// _fbc = fb.1.{timestamp_ms}.{fbclid} — persiste o clique p/ o Purchase do browser.
function ensureFbc(fbclid: string | null) {
  if (!fbclid || getCookie('_fbc')) return;
  setCookie('_fbc', `fb.1.${Date.now()}.${fbclid}`, ONE_YEAR);
}

// Anexa visitor_id + UTMs aos links de checkout do Green (idempotente).
function decorateGreenLinks(visitorId: string) {
  const params = new URLSearchParams(window.location.search);
  const links = document.querySelectorAll<HTMLAnchorElement>('a[href*="greenn.com.br"]');
  links.forEach((a) => {
    try {
      const url = new URL(a.href);
      if (!url.searchParams.has('visitor_id')) url.searchParams.set('visitor_id', visitorId);
      UTM_KEYS.forEach((u) => {
        const v = params.get(u);
        if (v && !url.searchParams.has(u)) url.searchParams.set(u, v);
      });
      a.href = url.toString();
    } catch {
      /* href não-absoluto (#oferta etc.) — ignora */
    }
  });
}

export function MetaPixel() {
  const pathname = usePathname();
  const firstView = useRef(true);

  // Identidade first-party + decoração dos CTAs. Roda a cada navegação.
  useEffect(() => {
    const visitorId = ensureVisitorId();
    const fbclid = new URLSearchParams(window.location.search).get('fbclid');
    ensureFbc(fbclid);
    decorateGreenLinks(visitorId);
  }, [pathname]);

  // PageView nas trocas de rota (a 1ª já é disparada pelo base code no layout).
  useEffect(() => {
    if (firstView.current) {
      firstView.current = false;
      return;
    }
    window.fbq?.('track', 'PageView');
  }, [pathname]);

  return null;
}
