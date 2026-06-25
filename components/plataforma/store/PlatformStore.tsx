'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { CURSOS, type Curso } from '../data/cursos';
import { ENCONTROS, type Encontro } from '../data/mentoria';
import { MATERIAIS, type MaterialItem } from '../data/materiais';
import { ALUNOS, type AdminAluno } from '../data/alunos';
import type { PilarSlug } from '../data/pilares';
import {
  LEADS,
  CLIENTES,
  CONVERSAS,
  AUTOMACOES,
  calcKpis,
  type Lead,
  type Cliente,
  type Conversa,
  type Mensagem,
  type Automacao,
  type EtapaPipeline,
  type VendasKpis,
} from '../data/vendas';

/* ============================================================
   PlatformStore — camada de dados ÚNICA (repositório reativo).
   Seed dos data/*.ts → estado React → persistido em localStorage.
   Aluno e Admin consomem daqui, então edições do admin refletem no
   aluno na mesma sessão. Para ir ao Supabase depois: trocar só a
   implementação (mesma interface StoreValue), sem mexer nas telas.
   ============================================================ */

// v2: inclui as coleções do módulo Vendas (leads, clientes, conversas, automações).
const STORAGE_KEY = 'feliceplat:dataset:v2';

type Dataset = {
  cursos: Curso[];
  encontros: Encontro[];
  materiais: MaterialItem[];
  alunos: AdminAluno[];
  leads: Lead[];
  clientes: Cliente[];
  conversas: Conversa[];
  automacoes: Automacao[];
};

const seed = (): Dataset =>
  JSON.parse(
    JSON.stringify({
      cursos: CURSOS,
      encontros: ENCONTROS,
      materiais: MATERIAIS,
      alunos: ALUNOS,
      leads: LEADS,
      clientes: CLIENTES,
      conversas: CONVERSAS,
      automacoes: AUTOMACOES,
    }),
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
  // --- Vendas (CRM) ---
  // seletores
  getLead: (id: string) => Lead | undefined;
  leadsByEtapa: (e: EtapaPipeline) => Lead[];
  getCliente: (id: string) => Cliente | undefined;
  getConversa: (id: string) => Conversa | undefined;
  getAutomacao: (id: string) => Automacao | undefined;
  vendasKpis: () => VendasKpis;
  // mutations
  saveLead: (l: Lead) => void;
  deleteLead: (id: string) => void;
  moveLeadEtapa: (id: string, etapa: EtapaPipeline) => void;
  saveCliente: (c: Cliente) => void;
  deleteCliente: (id: string) => void;
  enviarMensagem: (conversaId: string, msg: Mensagem) => void;
  marcarLido: (conversaId: string) => void;
  saveAutomacao: (a: Automacao) => void;
  toggleAutomacao: (id: string) => void;
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
      // --- Vendas (CRM) ---
      getLead: (id) => data.leads.find((l) => l.id === id),
      leadsByEtapa: (e) => data.leads.filter((l) => l.etapa === e),
      getCliente: (id) => data.clientes.find((c) => c.id === id),
      getConversa: (id) => data.conversas.find((c) => c.id === id),
      getAutomacao: (id) => data.automacoes.find((a) => a.id === id),
      vendasKpis: () => calcKpis(data.leads, data.conversas),
      saveLead: (l) => setData((d) => ({ ...d, leads: upsert(d.leads, l, (x) => x.id) })),
      deleteLead: (id) => setData((d) => ({ ...d, leads: d.leads.filter((l) => l.id !== id) })),
      moveLeadEtapa: (id, etapa) =>
        setData((d) => ({
          ...d,
          leads: d.leads.map((l) => (l.id === id ? { ...l, etapa } : l)),
        })),
      saveCliente: (c) =>
        setData((d) => ({ ...d, clientes: upsert(d.clientes, c, (x) => x.id) })),
      deleteCliente: (id) =>
        setData((d) => ({ ...d, clientes: d.clientes.filter((c) => c.id !== id) })),
      enviarMensagem: (conversaId, msg) =>
        setData((d) => ({
          ...d,
          conversas: d.conversas.map((c) =>
            c.id === conversaId
              ? { ...c, mensagens: [...c.mensagens, msg], status: 'aberto' }
              : c,
          ),
        })),
      marcarLido: (conversaId) =>
        setData((d) => {
          // Idempotente: se já está zerada, devolve a MESMA referência de estado.
          // Sem isso, chamar marcarLido dentro de um useEffect cria novo `data` a
          // cada volta → novo `value` → nova ref da função → o efeito re-dispara →
          // loop infinito que trava a aba (foi o que travava a tela Atendimento).
          const alvo = d.conversas.find((c) => c.id === conversaId);
          if (!alvo || alvo.naoLidas === 0) return d;
          return {
            ...d,
            conversas: d.conversas.map((c) =>
              c.id === conversaId ? { ...c, naoLidas: 0 } : c,
            ),
          };
        }),
      saveAutomacao: (a) =>
        setData((d) => ({ ...d, automacoes: upsert(d.automacoes, a, (x) => x.id) })),
      toggleAutomacao: (id) =>
        setData((d) => ({
          ...d,
          automacoes: d.automacoes.map((a) =>
            a.id === id ? { ...a, status: a.status === 'ativa' ? 'pausada' : 'ativa' } : a,
          ),
        })),
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
