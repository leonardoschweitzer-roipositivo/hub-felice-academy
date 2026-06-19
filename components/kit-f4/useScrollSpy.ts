'use client';

import { useEffect, useState } from 'react';

/**
 * Observa as <section id> do documento e retorna o id da seção ativa
 * (a que está na faixa central da viewport). Alimenta o highlight do TOC.
 */
export function useScrollSpy(sectionIds: string[]): string {
  const [active, setActive] = useState<string>(sectionIds[0] ?? '');

  useEffect(() => {
    if (sectionIds.length === 0) return;

    // Mantém o último id visível como ativo (mais robusto que pegar só o 1º).
    const visible = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visible.set(e.target.id, e.intersectionRatio);
          else visible.delete(e.target.id);
        }
        // ativo = a seção visível que aparece primeiro na ordem do documento
        const firstVisible = sectionIds.find((id) => visible.has(id));
        if (firstVisible) setActive(firstVisible);
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.25, 0.5, 1] },
    );

    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [sectionIds]);

  return active;
}
