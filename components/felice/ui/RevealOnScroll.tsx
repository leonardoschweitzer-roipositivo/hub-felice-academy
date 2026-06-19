'use client';

import { useEffect } from 'react';

/**
 * Aplica a animação de entrada nos elementos com a classe `.reveal` dentro
 * do container `.felice`. Renderiza nada — só ativa o IntersectionObserver.
 */
export function RevealOnScroll() {
  useEffect(() => {
    const root = document.querySelector('.felice');
    if (!root) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );
    root.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
