'use client';

import { useCallback, useEffect, useState } from 'react';
import type { DocId } from './content/types';

const progressKey = (id: DocId) => `kitf4:progress:${id}`;
const doneKey = (id: DocId) => `kitf4:done:${id}`;

function readNumber(key: string): number {
  if (typeof window === 'undefined') return 0;
  const raw = window.localStorage.getItem(key);
  const n = raw ? Number(raw) : 0;
  return Number.isFinite(n) ? Math.max(0, Math.min(100, n)) : 0;
}

/**
 * Acompanha o progresso de leitura da página atual (% de rolagem do
 * <main>) e persiste o ponto mais avançado em localStorage por documento.
 * O índice do Kit lê as mesmas chaves para mostrar o progresso nos cards.
 */
export function useReadingProgress(docId: DocId, scrollRoot?: HTMLElement | null) {
  const [percent, setPercent] = useState(0);
  const [done, setDone] = useState(false);

  // Hidrata o estado salvo no cliente.
  useEffect(() => {
    setPercent(readNumber(progressKey(docId)));
    setDone(window.localStorage.getItem(doneKey(docId)) === '1');
  }, [docId]);

  // Mede a rolagem da janela e persiste o máximo atingido.
  useEffect(() => {
    let max = readNumber(progressKey(docId));
    let raf = 0;

    const measure = () => {
      raf = 0;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      const pct = scrollable > 0 ? Math.round((window.scrollY / scrollable) * 100) : 100;
      const clamped = Math.max(0, Math.min(100, pct));
      setPercent(clamped);
      if (clamped > max) {
        max = clamped;
        window.localStorage.setItem(progressKey(docId), String(max));
        if (max >= 92 && window.localStorage.getItem(doneKey(docId)) !== '1') {
          window.localStorage.setItem(doneKey(docId), '1');
          setDone(true);
        }
      }
    };

    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
    // scrollRoot mantido na assinatura para evolução futura (drawer com scroll próprio)
  }, [docId, scrollRoot]);

  const toggleDone = useCallback(() => {
    setDone((prev) => {
      const next = !prev;
      window.localStorage.setItem(doneKey(docId), next ? '1' : '0');
      if (next) window.localStorage.setItem(progressKey(docId), '100');
      return next;
    });
  }, [docId]);

  return { percent, done, toggleDone };
}

/** Leitura pontual do progresso salvo (para os cards do índice). */
export function getSavedProgress(id: DocId): { percent: number; done: boolean } {
  if (typeof window === 'undefined') return { percent: 0, done: false };
  return {
    percent: readNumber(progressKey(id)),
    done: window.localStorage.getItem(doneKey(id)) === '1',
  };
}
