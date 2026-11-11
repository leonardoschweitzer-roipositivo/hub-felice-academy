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
   - _fbc a partir do fbclid (cria, ou renova quando chega um clique novo);
   - guardar fbclid + UTMs do clique no anúncio por 90 dias;
   - levar esses dados até o checkout do Greenn.

   Por que levar o fbclid até o checkout: InitiateCheckout e Purchase saem
   da integração Pixel + Conversions API da própria Greenn, no domínio dela.
   O Pixel de lá só liga a venda ao clique do anúncio se o fbclid chegar na
   URL do checkout — com ele, cria o _fbc no domínio da Greenn.
   ============================================================ */

const COOKIE_VISITOR = 'visitor_id';
/** Último clique de anúncio (fbclid + utm_*), em formato de query string. */
const COOKIE_CLICK = 'fa_click';
const ONE_YEAR = 60 * 60 * 24 * 365;
/** Validade do _fbc recomendada pela Meta; usada também no clique guardado. */
const NINETY_DAYS = 60 * 60 * 24 * 90;
const CLICK_KEYS = ['fbclid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
const CHECKOUT_LINKS = 'a[href*="greenn.com.br"]';

function ensureVisitorId(): string {
  let id = getCookie(COOKIE_VISITOR);
  if (!id) {
    id = randomId();
    setCookie(COOKIE_VISITOR, id, ONE_YEAR);
  }
  return id;
}

/* _fbc = fb.1.{timestamp_ms}.{fbclid}. Regra da Meta: criar quando não
   existe e renovar quando o fbclid da URL é diferente do guardado (o último
   clique é o que vale). O fbclid é sensível a maiúsculas — nunca alterar. */
function ensureFbc(fbclid: string | null) {
  if (!fbclid) return;
  const atual = getCookie('_fbc');
  if (atual && atual.split('.').slice(3).join('.') === fbclid) return;
  setCookie('_fbc', `fb.1.${Date.now()}.${fbclid}`, NINETY_DAYS);
}

/* Guarda fbclid + UTMs da URL de entrada. Se a URL atual traz qualquer um
   deles, ela substitui o clique guardado inteiro (último clique vence, e não
   mistura UTM de uma campanha com fbclid de outra). Sem nenhum, mantém o
   guardado — é o que salva a atribuição quando a pessoa navega pelo site
   antes de comprar. */
function rememberClick(search: string) {
  const atual = new URLSearchParams(search);
  const novo = new URLSearchParams();
  CLICK_KEYS.forEach((k) => {
    const v = atual.get(k);
    if (v) novo.set(k, v);
  });
  if ([...novo.keys()].length) setCookie(COOKIE_CLICK, novo.toString(), NINETY_DAYS);
}

/** Acrescenta visitor_id + clique guardado ao link do checkout (idempotente:
 *  não sobrescreve parâmetro que o link já tenha). */
function decorateCheckoutLink(a: HTMLAnchorElement) {
  try {
    const url = new URL(a.href);
    const visitorId = getCookie(COOKIE_VISITOR);
    if (visitorId && !url.searchParams.has('visitor_id')) {
      url.searchParams.set('visitor_id', visitorId);
    }
    new URLSearchParams(getCookie(COOKIE_CLICK) ?? '').forEach((v, k) => {
      if (!url.searchParams.has(k)) url.searchParams.set(k, v);
    });
    a.href = url.toString();
  } catch {
    /* href não-absoluto (#oferta etc.) — ignora */
  }
}

export function MetaPixel() {
  const pathname = usePathname();
  const firstView = useRef(true);

  // Identidade first-party, clique do anúncio e links já na tela.
  useEffect(() => {
    ensureVisitorId();
    ensureFbc(new URLSearchParams(window.location.search).get('fbclid'));
    rememberClick(window.location.search);
    document.querySelectorAll<HTMLAnchorElement>(CHECKOUT_LINKS).forEach(decorateCheckoutLink);
  }, [pathname]);

  /* Decoração também no clique (captura, antes da navegação): cobre links
     que aparecem depois da hidratação e garante os valores mais recentes. */
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.<HTMLAnchorElement>(CHECKOUT_LINKS);
      if (a) decorateCheckoutLink(a);
    };
    document.addEventListener('click', onClick, true);
    document.addEventListener('auxclick', onClick, true);
    return () => {
      document.removeEventListener('click', onClick, true);
      document.removeEventListener('auxclick', onClick, true);
    };
  }, []);

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
