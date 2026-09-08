/* ============================================================
   Números canônicos da prosa, calculados pelo MESMO motor que o simulador
   usa — nunca escritos à mão.

   Criado em 08/09/2026, junto com a passagem de 3 para 8 produtos. A versão
   anterior afirmava no texto números calculados para três produtos ("58% da
   verba", "ROAS 0,89", "R$ 349 de LTV"). Ao acrescentar cinco produtos todos
   ficariam errados — e errados de um jeito que ninguém percebe lendo, que é a
   pior dívida possível numa página feita para decidir investimento.

   Regra: a prosa afirma a TESE, o número vem daqui. Mexer numa premissa nunca
   mais pode deixar um parágrafo mentindo.

   Roda no escopo do módulo, em server component — custo zero no cliente.
   ============================================================ */

import { projetar, calcularEscada, ltvPorProduto, type NoEscada } from './model';
import {
  PRODUTOS, PRESETS, ESCADA, premissasDe, idsDoPreset,
  type ProdutoId,
} from './premissas';

/* O cenário realista é o que a página usa para argumentar: o conservador é
   piso e o agressivo é teto plausível, nenhum dos dois serve de âncora. */
const CEN = 'realista' as const;
const TAXAS = ESCADA[CEN];

const RESULTADOS = Object.fromEntries(
  PRODUTOS.map((p) => [p.id, projetar(premissasDe(CEN, p.id))]),
) as Record<ProdutoId, ReturnType<typeof projetar>>;

function nos(ativos: Set<string>): NoEscada<ProdutoId>[] {
  return PRODUTOS.map((p) => ({
    id: p.id,
    tier: p.tier,
    trilha: p.trilha,
    ticket: p.ticket,
    peso: p.pesoEscada,
    vendasDiretas: ativos.has(p.id) ? RESULTADOS[p.id].vendas : 0,
  }));
}

export type Recorte = {
  nome: string;
  produtos: number;
  verba: number;
  receitaDireta: number;
  receita: number;
  roas: number;
};

function recorte(nome: string, ids: readonly string[]): Recorte {
  const set = new Set(ids);
  const verba = PRODUTOS.filter((p) => set.has(p.id)).reduce(
    (a, p) => a + RESULTADOS[p.id].verbaMensal,
    0,
  );
  const esc = calcularEscada(nos(set), TAXAS);
  return {
    nome,
    produtos: set.size,
    verba,
    receitaDireta: esc.receitaDireta,
    receita: esc.receitaTotal,
    roas: verba > 0 ? esc.receitaTotal / verba : 0,
  };
}

/** Um recorte por preset (menos o "Nenhum", que é ferramenta e não cenário). */
export const RECORTES: Recorte[] = PRESETS.filter((p) => p.id !== 'nenhum')
  .map((p) => recorte(p.nome, idsDoPreset(p)))
  .sort((a, b) => b.roas - a.roas);

const TODOS = new Set(PRODUTOS.map((p) => p.id));
const ESC_TODOS = calcularEscada(nos(TODOS), TAXAS);
const LTV_TODOS = ltvPorProduto(nos(TODOS), TAXAS);

/** Linha por produto, com tudo o que a tabela da seção precisa. */
export const LINHAS = PRODUTOS.map((p) => ({
  id: p.id,
  nome: p.nome,
  tier: p.tier,
  trilha: p.trilha,
  ticket: p.ticket,
  verba: RESULTADOS[p.id].verbaMensal,
  vendas: RESULTADOS[p.id].vendas,
  receita: RESULTADOS[p.id].receita,
  cac: RESULTADOS[p.id].cac,
  roas: RESULTADOS[p.id].roas,
  ltv: LTV_TODOS[p.id],
  ltvCac: RESULTADOS[p.id].cac > 0 ? LTV_TODOS[p.id] / RESULTADOS[p.id].cac : 0,
  vendasComEscada: ESC_TODOS.vendasTotais[p.id],
}));

const todos = recorte('Todos', [...TODOS]);
const fase1 = RECORTES.find((r) => r.nome === 'Fase 1 recomendada')!;

/* O que acontece ao rodar um produto de checkout com objetivo Purchase: é a
   alavanca mais cara da página, e o número precisa vir do motor porque muda
   junto com a premissa do tier `meio`. */
const crcWhats = RESULTADOS.crc.verbaMinimaMensal;
const crcPurchase = projetar({
  ...premissasDe(CEN, 'crc'),
  objetivo: 'purchase',
}).verbaMinimaMensal;

export const RESUMO = {
  todos,
  fase1,
  /** Quanto a Fase 1 rende a mais por real investido que o catálogo inteiro. */
  vantagemFase1: fase1.roas / todos.roas,
  pesoEscada: ESC_TODOS.receitaCruzada / ESC_TODOS.receitaTotal,
  receitaEscada: ESC_TODOS.receitaCruzada,
  crc: {
    whatsapp: crcWhats,
    purchase: crcPurchase,
    multiplo: crcPurchase / crcWhats,
    /** Total dos 8 se CRC e Recepção rodassem como Purchase. */
    totalSeTodosPurchase: todos.verba + 2 * (crcPurchase - crcWhats),
  },
};
