'use client';

import { useCallback } from 'react';
import { usePersistentState } from './usePersistentState';
import { CURSOS, aulaKey, aulasDoCurso, cursosByPilar, getCurso, type Curso } from './data/cursos';
import { type PilarSlug } from './data/pilares';

type Flags = Record<string, boolean>;

/**
 * Estado de progresso do aluno (aulas concluídas + favoritos), persistido
 * localmente. Reaproveita `usePersistentState` (mesmo padrão do Kit F4).
 */
export function useProgress() {
  const [concluidas, setConcluidas, hydrated] = usePersistentState<Flags>('aulas-concluidas', {});
  const [favoritos, setFavoritos] = usePersistentState<Flags>('favoritos', {});

  const isConcluida = useCallback(
    (cursoSlug: string, aulaSlug: string) => !!concluidas[aulaKey(cursoSlug, aulaSlug)],
    [concluidas],
  );

  const toggleConcluida = useCallback(
    (cursoSlug: string, aulaSlug: string, valor?: boolean) => {
      const k = aulaKey(cursoSlug, aulaSlug);
      setConcluidas((prev) => {
        const next = { ...prev };
        const novo = valor ?? !next[k];
        if (novo) next[k] = true;
        else delete next[k];
        return next;
      });
    },
    [setConcluidas],
  );

  const cursoProgresso = useCallback(
    (curso: Curso) => {
      const aulas = aulasDoCurso(curso);
      const done = aulas.filter((au) => concluidas[aulaKey(curso.slug, au.slug)]).length;
      const total = aulas.length;
      return { done, total, pct: total ? Math.round((done / total) * 100) : 0 };
    },
    [concluidas],
  );

  const cursoProgressoBySlug = useCallback(
    (slug: string) => {
      const curso = getCurso(slug);
      return curso ? cursoProgresso(curso) : { done: 0, total: 0, pct: 0 };
    },
    [cursoProgresso],
  );

  const pilarProgresso = useCallback(
    (pilar: PilarSlug) => {
      const cursos = cursosByPilar(pilar);
      let done = 0;
      let total = 0;
      cursos.forEach((c) => {
        const p = cursoProgresso(c);
        done += p.done;
        total += p.total;
      });
      return { done, total, pct: total ? Math.round((done / total) * 100) : 0 };
    },
    [cursoProgresso],
  );

  const totalConcluidas = Object.keys(concluidas).length;
  const totalAulasGeral = CURSOS.reduce((acc, c) => acc + aulasDoCurso(c).length, 0);

  const isFavorito = useCallback((slug: string) => !!favoritos[slug], [favoritos]);
  const toggleFavorito = useCallback(
    (slug: string) =>
      setFavoritos((prev) => {
        const next = { ...prev };
        if (next[slug]) delete next[slug];
        else next[slug] = true;
        return next;
      }),
    [setFavoritos],
  );

  return {
    hydrated,
    isConcluida,
    toggleConcluida,
    cursoProgresso,
    cursoProgressoBySlug,
    pilarProgresso,
    totalConcluidas,
    totalAulasGeral,
    isFavorito,
    toggleFavorito,
  };
}
