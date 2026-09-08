/* ============================================================
   Premissas da projeção — os três produtos e os três cenários.

   Tudo aqui é DADO, não código: acrescentar um cenário é acrescentar uma
   chave, e nenhuma conta muda de lugar. O motor (model.ts) não sabe que
   "Maestria" existe; recebe números e devolve números.

   Preços conferidos em lib/tracking/funnels.ts em 08/09/2026, com duas
   correções vindas do Leo: a Maestria é R$ 997 (e não R$ 1.500, como a
   primeira leitura do briefing sugeria) e a mentoria projetada é a de
   GESTÃO F4 a R$ 15.000 — patamar que joga o produto para a última faixa
   da Greenn (0,2% a 0,8%), não para a de R$ 2.000–5.000.

   ⚠️ Nenhum destes números veio de campanha rodada pela Felice: não há
   histórico no projeto. São benchmark da Greenn + premissas de mercado
   para nicho de odontologia no Meta. Substitua pelos reais após 30 dias.
   ============================================================ */

import type { Premissas, ProdutoId, TaxasEscada } from './model';

export type CenarioId = 'conservador' | 'realista' | 'agressivo';

export type Produto = {
  id: ProdutoId;
  nome: string;
  ticket: number;
  objetivo: Premissas['objetivo'];
  rota: string;
  /** Como o produto se paga — resumo de uma linha para a tabela. */
  papel: string;
};

export const PRODUTOS: Produto[] = [
  {
    id: 'kit-f4',
    nome: 'Kit Gestão F4',
    ticket: 97,
    objetivo: 'purchase',
    rota: '/produtos/kitgestaof4/',
    papel: 'Porta de entrada — aquisição de lead, não centro de lucro',
  },
  {
    id: 'maestria',
    nome: 'Maestria Zigomática',
    ticket: 997,
    objetivo: 'whatsapp',
    rota: '/produtos/maestria-zigomatica/',
    papel: 'Meio de funil — melhor relação entre volume e margem',
  },
  {
    id: 'mentoria',
    nome: 'Mentoria de Gestão F4',
    ticket: 15000,
    objetivo: 'whatsapp',
    rota: '/produtos/mentoria-gestao-f4/',
    papel: 'Alto ticket — carrega o faturamento com pouca verba',
  },
];

export const CENARIOS: Array<{ id: CenarioId; nome: string; descricao: string }> = [
  {
    id: 'conservador',
    nome: 'Conservador',
    descricao: 'Criativo mediano, CPM alto, atendimento lento. O piso do que pode acontecer.',
  },
  {
    id: 'realista',
    nome: 'Realista',
    descricao: 'Criativo bom, atendimento em até 1 hora. É por este que se decide a verba.',
  },
  {
    id: 'agressivo',
    nome: 'Agressivo',
    descricao: 'Criativo campeão, resposta em minutos, oferta madura. Teto plausível — não meta.',
  },
];

/* Nos produtos de WhatsApp que vendem no próprio chat (a Maestria), as
   etapas de agendamento e comparecimento ficam em 1.00 de propósito: não há
   call marcada, a venda acontece na conversa. Manter as quatro etapas em
   todos os produtos deixa a tabela comparável e o simulador com os mesmos
   controles — zerar campo por produto confundiria mais do que ajudaria. */
export const PREMISSAS: Record<CenarioId, Record<ProdutoId, Premissas>> = {
  conservador: {
    'kit-f4': {
      ticket: 97, objetivo: 'purchase', cpm: 45, ctr: 0.01, convLP: 0.015,
      custoPorConversa: 0, taxaQualificacao: 1, taxaAgendamento: 1,
      taxaComparecimento: 1, taxaFechamento: 1, conjuntos: 1, cicloDias: 0,
    },
    maestria: {
      ticket: 997, objetivo: 'whatsapp', cpm: 60, ctr: 0.01, convLP: 0,
      custoPorConversa: 35, taxaQualificacao: 0.4, taxaAgendamento: 1,
      taxaComparecimento: 1, taxaFechamento: 0.15, conjuntos: 1, cicloDias: 7,
    },
    mentoria: {
      ticket: 15000, objetivo: 'whatsapp', cpm: 80, ctr: 0.008, convLP: 0,
      custoPorConversa: 80, taxaQualificacao: 0.25, taxaAgendamento: 0.4,
      taxaComparecimento: 0.6, taxaFechamento: 0.15, conjuntos: 1, cicloDias: 30,
    },
  },
  realista: {
    'kit-f4': {
      ticket: 97, objetivo: 'purchase', cpm: 38, ctr: 0.014, convLP: 0.025,
      custoPorConversa: 0, taxaQualificacao: 1, taxaAgendamento: 1,
      taxaComparecimento: 1, taxaFechamento: 1, conjuntos: 1, cicloDias: 0,
    },
    maestria: {
      ticket: 997, objetivo: 'whatsapp', cpm: 45, ctr: 0.014, convLP: 0,
      custoPorConversa: 20, taxaQualificacao: 0.5, taxaAgendamento: 1,
      taxaComparecimento: 1, taxaFechamento: 0.2, conjuntos: 1, cicloDias: 7,
    },
    mentoria: {
      ticket: 15000, objetivo: 'whatsapp', cpm: 60, ctr: 0.012, convLP: 0,
      custoPorConversa: 60, taxaQualificacao: 0.3, taxaAgendamento: 0.5,
      taxaComparecimento: 0.7, taxaFechamento: 0.22, conjuntos: 1, cicloDias: 21,
    },
  },
  agressivo: {
    'kit-f4': {
      ticket: 97, objetivo: 'purchase', cpm: 32, ctr: 0.018, convLP: 0.04,
      custoPorConversa: 0, taxaQualificacao: 1, taxaAgendamento: 1,
      taxaComparecimento: 1, taxaFechamento: 1, conjuntos: 1, cicloDias: 0,
    },
    maestria: {
      ticket: 997, objetivo: 'whatsapp', cpm: 35, ctr: 0.018, convLP: 0,
      custoPorConversa: 14, taxaQualificacao: 0.6, taxaAgendamento: 1,
      taxaComparecimento: 1, taxaFechamento: 0.25, conjuntos: 1, cicloDias: 7,
    },
    mentoria: {
      ticket: 15000, objetivo: 'whatsapp', cpm: 48, ctr: 0.016, convLP: 0,
      custoPorConversa: 40, taxaQualificacao: 0.35, taxaAgendamento: 0.6,
      taxaComparecimento: 0.75, taxaFechamento: 0.3, conjuntos: 1, cicloDias: 21,
    },
  },
};

/* ============================================================
   Taxas da escada de produtos.

   A base do Kit F4 não é lista fria: é gente que já pagou, já consumiu o
   material e já conhece o método — e a equipe do Dr. Sócrates liga. Por isso
   estas taxas são muito mais altas que qualquer conversão de tráfego frio.

   As faixas vêm da prática de mercado em infoproduto com equipe comercial
   ativa. São as premissas MAIS incertas da página inteira — e também as que
   mais mexem no resultado. É o primeiro número a substituir por real.
   ============================================================ */
export const ESCADA: Record<CenarioId, TaxasEscada> = {
  /* Sem processo de contato estruturado: a base existe, mas ninguém liga
     com constância. */
  conservador: { kitParaMaestria: 0.02, kitParaMentoria: 0.003, maestriaParaMentoria: 0.04 },
  /* Equipe contactando a base com régua definida. */
  realista: { kitParaMaestria: 0.05, kitParaMentoria: 0.01, maestriaParaMentoria: 0.08 },
  /* Régua madura, com oferta certa na hora certa. */
  agressivo: { kitParaMaestria: 0.09, kitParaMentoria: 0.02, maestriaParaMentoria: 0.14 },
};

/* Cross-sell não acontece na semana da compra: é nutrição, contato e
   fechamento. Entra no fluxo de caixa com ciclo próprio, bem mais longo que
   o da venda direta. */
export const CICLO_ESCADA_DIAS = 60;

export function produtoPorId(id: ProdutoId): Produto {
  const p = PRODUTOS.find((x) => x.id === id);
  if (!p) throw new Error(`Produto desconhecido: ${id}`);
  return p;
}

/* ---------- formatação (usada pela UI, vive aqui para não repetir) ---------- */

const BRL = new Intl.NumberFormat('pt-BR', {
  style: 'currency', currency: 'BRL', maximumFractionDigits: 0,
});

export const money = (n: number) => BRL.format(Math.round(n));
export const pct = (n: number, casas = 1) =>
  `${(n * 100).toLocaleString('pt-BR', { minimumFractionDigits: casas, maximumFractionDigits: casas })}%`;
export const num = (n: number, casas = 0) =>
  n.toLocaleString('pt-BR', { minimumFractionDigits: casas, maximumFractionDigits: casas });
