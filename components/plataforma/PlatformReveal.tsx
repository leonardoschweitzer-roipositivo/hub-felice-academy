'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Anima a entrada dos elementos `.reveal` dentro de `.plataforma`. Diferente
 * do RevealOnScroll do HUB, re-observa a cada troca de rota (a área de membros
 * é um layout persistente — sem isso, páginas navegadas via <Link> nunca
 * receberiam a classe `.in` e ficariam invisíveis). Há um fallback de segurança
 * que revela tudo após 700ms caso o observer não dispare.
 */
export function PlatformReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.querySelector('.plataforma');
    if (!root) return;
    const nodes = Array.from(root.querySelectorAll('.reveal')) as HTMLElement[];
    if (nodes.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -6% 0px' },
    );
    nodes.forEach((el) => io.observe(el));

    // Segurança: se algo escapar do observer, revela tudo.
    const fallback = window.setTimeout(() => {
      nodes.forEach((el) => el.classList.add('in'));
    }, 700);

    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, [pathname]);

  return null;
}
