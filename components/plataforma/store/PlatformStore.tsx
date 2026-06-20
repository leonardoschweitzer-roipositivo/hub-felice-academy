'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { CURSOS, type Curso } from '../data/cursos';
import { ENCONTROS, type Encontro } from '../data/mentoria';
import { MATERIAIS, type MaterialItem } from '../data/materiais';
import { ALUNOS, type AdminAluno } from '../data/alunos';
import type { PilarSlug } from '../data/pilares';

/* ============================================================
   PlatformStore — camada de dados ÚNICA (repositório reativo).
   Seed dos data/*.ts → estado React → persistido em localStorage.
   Aluno e Admin consomem daqui, então edições do admin refletem no
   aluno na mesma sessão. Para ir ao Supabase depois: trocar só a
   implementação (mesma interface StoreValue), sem mexer nas telas.
   ============================================================ */

const STORAGE_KEY = 'feliceplat:dataset:v1';

type Dataset = {
  cursos: Curso[];
  encontros: Encontro[];
  materiais: MaterialItem[];
  alunos: AdminAluno[];
};

const seed = (): Dataset =>
  JSON.parse(
    JSON.stringify({ cursos: CURSOS, encontros: ENCONTROS, materiais: MATERIAIS, alunos: ALUNOS }),
  ) as Dataset;

/** Upsert por chave: substitui se existir, senão insere no topo. */
function upsert<T>(list: T[], item: T, key: (t: T) => string): T[] {
  const k = key(item);
  const i = list.findIndex((x) => key(x) === k);
  if (i === -1) return [item, ...list];
  const copy = list.slice();
  copy[i] = item;
  return copy;
}

export type StoreValue = Dataset & {
  hydrated: boolean;
  // seletores (espelham os helpers dos data/*.ts)
  getCurso: (slug: string) => Curso | undefined;
  cursosByPilar: (p: PilarSlug) => Curso[];
  getEncontro: (id: string) => Encontro | undefined;
  getMaterial: (slug: string) => MaterialItem | undefined;
  // mutations
  saveCurso: (c: Curso) => void;
  deleteCurso: (slug: string) => void;
  saveEncontro: (e: Encontro) => void;
  deleteEncontro: (id: string) => void;
  saveMaterial: (m: MaterialItem) => void;
  deleteMaterial: (slug: string) => void;
  saveAluno: (a: AdminAluno) => void;
  deleteAluno: (id: string) => void;
  resetData: () => void;
};

const Ctx = createContext<StoreValue | null>(null);

export function PlatformDataProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<Dataset>(seed);
  const [hydrated, setHydrated] = useState(false);

  // Hidrata do localStorage após montar (SSR-safe).
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setData(JSON.parse(raw) as Dataset);
    } catch {
      /* ignora dados inválidos */
    }
    setHydrated(true);
  }, []);

  // Persiste a cada mudança (depois de hidratar).
  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
      /* quota/indisponível */
    }
  }, [data, hydrated]);

  const value = useMemo<StoreValue>(
    () => ({
      ...data,
      hydrated,
      getCurso: (slug) => data.cursos.find((c) => c.slug === slug),
      cursosByPilar: (p) => data.cursos.filter((c) => c.pilar === p),
      getEncontro: (id) => data.encontros.find((e) => e.id === id),
      getMaterial: (slug) => data.materiais.find((m) => m.slug === slug),
      saveCurso: (c) => setData((d) => ({ ...d, cursos: upsert(d.cursos, c, (x) => x.slug) })),
      deleteCurso: (slug) =>
        setData((d) => ({ ...d, cursos: d.cursos.filter((c) => c.slug !== slug) })),
      saveEncontro: (e) =>
        setData((d) => ({ ...d, encontros: upsert(d.encontros, e, (x) => x.id) })),
      deleteEncontro: (id) =>
        setData((d) => ({ ...d, encontros: d.encontros.filter((e) => e.id !== id) })),
      saveMaterial: (m) =>
        setData((d) => ({ ...d, materiais: upsert(d.materiais, m, (x) => x.slug) })),
      deleteMaterial: (slug) =>
        setData((d) => ({ ...d, materiais: d.materiais.filter((m) => m.slug !== slug) })),
      saveAluno: (a) => setData((d) => ({ ...d, alunos: upsert(d.alunos, a, (x) => x.id) })),
      deleteAluno: (id) =>
        setData((d) => ({ ...d, alunos: d.alunos.filter((a) => a.id !== id) })),
      resetData: () => setData(seed()),
    }),
    [data, hydrated],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useStore(): StoreValue {
  const v = useContext(Ctx);
  if (!v) throw new Error('useStore precisa estar dentro de <PlatformDataProvider>');
  return v;
}
