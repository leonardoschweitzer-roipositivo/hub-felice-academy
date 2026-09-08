/* ============================================================
   Premissas da projeção — os OITO produtos e os três cenários.

   Tudo aqui é DADO, não código: acrescentar um produto é acrescentar uma
   linha em PRODUTOS, e o TypeScript passa a exigir o resto sozinho. O motor
   (model.ts) não sabe que "Maestria" existe — é genérico sobre o id.

   Catálogo levantado no código em 08/09/2026, cruzando lib/tracking/funnels.ts
   com o content.ts de cada landing.

   ⚠️ DIVERGÊNCIA CONHECIDA: funnels.ts diz R$ 6.000 para a Mentoria de Gestão;
   aqui vale R$ 15.000, confirmado pelo Leo em 08/09/2026. Como o funnels.ts
   alimenta o `value` dos eventos do Meta, hoje a receita de alto ticket chega
   ao Meta pela metade — vale corrigir lá também.

   FICAM DE FORA de propósito: o Felice CRM (sem preço definido, CTA href="#",
   `ofertavel: false`) e o "Curso Gestão F4" (aposentado em 11/08/2026, com 301
   para a consultoria). /produtos/mentorias/ é hub-pivot, não produto.

   ⚠️ Nenhum destes números veio de campanha rodada pela Felice: não há
   histórico no projeto. São benchmark da Greenn + premissas de mercado
   para nicho de odontologia no Meta. Substitua pelos reais após 30 dias.
   ============================================================ */

import type { Objetivo, Premissas, Tier, TaxasEscada } from './model';

export type CenarioId = 'conservador' | 'realista' | 'agressivo';

/* As duas trilhas temáticas. Existem porque cross-sell segue assunto, não só
   preço: quem comprou o Kit de GESTÃO tem menos chance de subir para a
   Mentoria de ZIGOMÁTICO do que para a Consultoria — mas não zero, é o mesmo
   dentista na mesma base recebendo a mesma ligação. */
export type Trilha = 'gestao' | 'zigomatico';

/** Como se compra. `candidatura` = não existe checkout (só quiz → WhatsApp). */
export type Entrada = 'checkout' | 'candidatura';

export type Produto = {
  id: string;
  nome: string;
  /** Preço de tabela hoje. É só o ponto de partida: o simulador deixa mexer. */
  ticket: number;
  entrada: Entrada;
  trilha: Trilha;
  tier: Tier;
  /* Peso ao RECEBER gente do tier de baixo, relativo aos irmãos do mesmo tier.
     Explícito, e não derivado do ticket, de propósito: se fosse derivado,
     mexer no slider de preço da Consultoria redirecionaria pessoas em
     silêncio — o simulador mostraria uma mudança de mix que ninguém pediu. */
  pesoEscada: number;
  /* Objetivo que faz sentido ECONOMICAMENTE, que não é sempre o que está
     configurado hoje. CRC e Recepção têm checkout, mas rodá-los com objetivo
     Purchase multiplica o piso da verba por 14 — o default é WhatsApp e o
     simulador deixa ver o estrago ao trocar. */
  objetivoPadrao: Objetivo;
  /** Se entra ligado na primeira carga da página. */
  padraoNoAr: boolean;
  rota: string;
  /** Como o produto se paga — resumo de uma linha para o cartão. */
  papel: string;
  /* Faixa que o slider de preço percorre. Fica aqui, e não no componente,
     porque é dado do produto: não faz sentido oferecer R$ 60.000 para o Kit
     nem R$ 97 para a Mentoria. O passo é redondo para o número parar em
     valor que alguém realmente cobraria. */
  precoMin: number;
  precoMax: number;
  precoPasso: number;
};

/* `as const satisfies` para que o ProdutoId saia DAQUI, e não o contrário:
   o catálogo é a fonte, o tipo é derivado. Acrescentar produto é acrescentar
   uma linha — o compilador vira a lista de tarefas do resto. */
export const PRODUTOS = [
  {
    id: 'kit-f4',
    nome: 'Kit Gestão F4',
    ticket: 97,
    entrada: 'checkout',
    trilha: 'gestao',
    tier: 'entrada',
    pesoEscada: 1,
    objetivoPadrao: 'purchase',
    padraoNoAr: true,
    rota: '/produtos/kitgestaof4/',
    papel: 'Porta de entrada — aquisição de base, não centro de lucro',
    precoMin: 27, precoMax: 497, precoPasso: 10,
  },
  {
    id: 'masterclass-zigo',
    nome: 'Zigomático Descomplicado',
    ticket: 67,
    entrada: 'checkout',
    trilha: 'zigomatico',
    tier: 'entrada',
    pesoEscada: 1,
    objetivoPadrao: 'purchase',
    padraoNoAr: true,
    rota: '/produtos/masterclass-zigomatico/',
    papel: 'Porta de entrada da trilha clínica — alimenta Maestria e Mentoria',
    precoMin: 27, precoMax: 497, precoPasso: 10,
  },
  {
    id: 'crc',
    nome: 'CRC de Alta Performance',
    ticket: 597,
    entrada: 'checkout',
    trilha: 'gestao',
    tier: 'meio',
    pesoEscada: 1,
    objetivoPadrao: 'whatsapp',
    padraoNoAr: true,
    rota: '/produtos/vendas-secretaria/',
    papel: 'Meio de funil — ex-"A Secretária que Vende"',
    precoMin: 197, precoMax: 2997, precoPasso: 50,
  },
  {
    id: 'recepcao',
    nome: 'Recepção de Alta Performance',
    ticket: 597,
    entrada: 'checkout',
    trilha: 'gestao',
    tier: 'meio',
    /* Peso menor que o do CRC: são produtos-par, mesmo preço e mesma
       estrutura, e quem sobe do Kit tende a pegar antes o de atendimento
       telefônico, que é a dor mais citada. */
    pesoEscada: 0.8,
    objetivoPadrao: 'whatsapp',
    padraoNoAr: true,
    rota: '/produtos/recepcao-alta-performance/',
    papel: 'Meio de funil — o par presencial do CRC',
    precoMin: 197, precoMax: 2997, precoPasso: 50,
  },
  {
    id: 'maestria',
    nome: 'Maestria Zigomática',
    ticket: 997,
    entrada: 'checkout',
    trilha: 'zigomatico',
    tier: 'meio',
    pesoEscada: 1,
    objetivoPadrao: 'whatsapp',
    padraoNoAr: true,
    rota: '/produtos/maestria-zigomatica/',
    papel: 'Meio de funil — melhor relação entre volume e margem',
    precoMin: 297, precoMax: 4997, precoPasso: 50,
  },
  {
    id: 'consultoria',
    nome: 'Consultoria Gestão F4',
    ticket: 6000,
    entrada: 'candidatura',
    trilha: 'gestao',
    tier: 'alto',
    /* Peso maior que o da Mentoria: é o degrau mais fácil de subir dentro da
       trilha de gestão, porque custa menos da metade e dura 4 semanas. */
    pesoEscada: 1.5,
    objetivoPadrao: 'whatsapp',
    padraoNoAr: false,
    rota: '/produtos/consultoria/',
    papel: 'Alto ticket curto — ancora R$ 22 mil em entregáveis, fecha em R$ 6 mil',
    precoMin: 3000, precoMax: 30000, precoPasso: 500,
  },
  {
    id: 'mentoria-gestao',
    nome: 'Mentoria de Gestão F4',
    ticket: 15000,
    entrada: 'candidatura',
    trilha: 'gestao',
    tier: 'alto',
    pesoEscada: 0.5,
    objetivoPadrao: 'whatsapp',
    padraoNoAr: true,
    rota: '/produtos/mentoria-gestao-f4/',
    papel: 'Alto ticket — carrega o faturamento com pouca verba',
    precoMin: 3000, precoMax: 60000, precoPasso: 500,
  },
  {
    id: 'mentoria-zigo',
    nome: 'Mentoria de Zigomático',
    ticket: 6000,
    entrada: 'candidatura',
    trilha: 'zigomatico',
    tier: 'alto',
    pesoEscada: 1,
    objetivoPadrao: 'whatsapp',
    padraoNoAr: false,
    rota: '/produtos/mentoria-zigomatico/',
    papel: 'Topo da trilha clínica — público estreito, CPM alto',
    precoMin: 3000, precoMax: 40000, precoPasso: 500,
  },
] as const satisfies readonly Produto[];

/** O union sai do catálogo, não o contrário. */
export type ProdutoId = (typeof PRODUTOS)[number]['id'];

/* O item do catálogo COM o id literal preservado. `Produto` declara
   `id: string` para servir de contrato ao `satisfies`; quem consome quer o
   literal, senão nenhum Record<ProdutoId, …> aceita indexar. */
export type ProdutoCat = (typeof PRODUTOS)[number];

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

/* ============================================================
   Premissas por (cenário, tier).

   A maior parte da premissa é função do PATAMAR, não do produto: CPM, CTR e
   taxas de funil de um alto ticket de R$ 6.000 e de um de R$ 15.000 são a
   mesma coisa. Escrever 3 cenários × 8 produtos × 10 campos daria 240 números
   à mão — superfície onde erro se esconde em silêncio. Aqui são 9 blocos, e
   as exceções reais ficam em AJUSTES, visíveis COMO exceções.

   ⚠️ OS DOIS RAMOS DE OBJETIVO ficam sempre preenchidos: `convLP` (usado no
   Purchase) E `custoPorConversa` (usado no WhatsApp). Como o objetivo virou
   editável, deixar um deles em zero faz custoPorEvento → 0 → verba → 0, e o
   cartão mostra uma coluna de zeros sem erro nenhum. Já quebrou assim.
   ============================================================ */

type PerfilTier = Omit<Premissas, 'ticket' | 'objetivo'>;

export const PERFIL: Record<CenarioId, Record<Tier, PerfilTier>> = {
  conservador: {
    entrada: {
      cpm: 45, ctr: 0.010, convLP: 0.015, custoPorConversa: 30,
      taxaQualificacao: 0.35, taxaAgendamento: 1, taxaComparecimento: 1,
      taxaFechamento: 0.10, conjuntos: 1, cicloDias: 0,
    },
    meio: {
      cpm: 55, ctr: 0.010, convLP: 0.008, custoPorConversa: 32,
      taxaQualificacao: 0.40, taxaAgendamento: 1, taxaComparecimento: 1,
      taxaFechamento: 0.15, conjuntos: 1, cicloDias: 7,
    },
    alto: {
      cpm: 80, ctr: 0.008, convLP: 0.002, custoPorConversa: 80,
      taxaQualificacao: 0.25, taxaAgendamento: 0.40, taxaComparecimento: 0.60,
      taxaFechamento: 0.15, conjuntos: 1, cicloDias: 30,
    },
  },
  realista: {
    entrada: {
      cpm: 38, ctr: 0.014, convLP: 0.025, custoPorConversa: 16,
      taxaQualificacao: 0.45, taxaAgendamento: 1, taxaComparecimento: 1,
      taxaFechamento: 0.15, conjuntos: 1, cicloDias: 0,
    },
    meio: {
      cpm: 45, ctr: 0.014, convLP: 0.012, custoPorConversa: 20,
      taxaQualificacao: 0.50, taxaAgendamento: 1, taxaComparecimento: 1,
      taxaFechamento: 0.20, conjuntos: 1, cicloDias: 7,
    },
    alto: {
      cpm: 60, ctr: 0.012, convLP: 0.004, custoPorConversa: 60,
      taxaQualificacao: 0.30, taxaAgendamento: 0.50, taxaComparecimento: 0.70,
      taxaFechamento: 0.22, conjuntos: 1, cicloDias: 21,
    },
  },
  agressivo: {
    entrada: {
      cpm: 32, ctr: 0.018, convLP: 0.040, custoPorConversa: 11,
      taxaQualificacao: 0.55, taxaAgendamento: 1, taxaComparecimento: 1,
      taxaFechamento: 0.22, conjuntos: 1, cicloDias: 0,
    },
    meio: {
      cpm: 35, ctr: 0.018, convLP: 0.020, custoPorConversa: 14,
      taxaQualificacao: 0.60, taxaAgendamento: 1, taxaComparecimento: 1,
      taxaFechamento: 0.25, conjuntos: 1, cicloDias: 7,
    },
    alto: {
      cpm: 48, ctr: 0.016, convLP: 0.008, custoPorConversa: 40,
      taxaQualificacao: 0.35, taxaAgendamento: 0.60, taxaComparecimento: 0.75,
      taxaFechamento: 0.30, conjuntos: 1, cicloDias: 21,
    },
  },
};

/* Exceções reais ao perfil do tier, e só elas.

   As duas trilhas não custam o mesmo: cirurgião de zigomático é público bem
   mais estreito que dono de clínica, então CPM sobe e CTR cai na trilha
   clínica. E o Zigomático Descomplicado, apesar de ser de entrada, fala com
   esse público estreito — por isso tem premissa própria. */
export const AJUSTES: Partial<Record<ProdutoId, Partial<Record<CenarioId, Partial<Premissas>>>>> = {
  'masterclass-zigo': {
    conservador: { cpm: 58, ctr: 0.011 },
    realista: { cpm: 45, ctr: 0.016, convLP: 0.030 },
    agressivo: { cpm: 38, ctr: 0.020, convLP: 0.045 },
  },
  /* CRC e Recepção são de gestão: público mais largo que o do tier `meio`,
     que foi calibrado pela Maestria (clínica). CPM cai. */
  crc: {
    conservador: { cpm: 48 }, realista: { cpm: 40, ctr: 0.013, custoPorConversa: 18 },
    agressivo: { cpm: 32, custoPorConversa: 12 },
  },
  recepcao: {
    conservador: { cpm: 48 }, realista: { cpm: 40, ctr: 0.013, custoPorConversa: 18 },
    agressivo: { cpm: 32, custoPorConversa: 12 },
  },
  /* A Maestria vende no PRÓPRIO CHAT: não há call marcada, então agendamento
     e comparecimento ficam em 1.00 e a taxa de fechamento carrega tudo. */
  maestria: {
    conservador: { taxaFechamento: 0.15 },
    realista: { taxaFechamento: 0.20 },
    agressivo: { taxaFechamento: 0.25 },
  },
  consultoria: {
    conservador: { custoPorConversa: 72 },
    realista: { cpm: 55, custoPorConversa: 55 },
    agressivo: { custoPorConversa: 36 },
  },
  /* Mentoria de Zigomático: o público mais estreito do catálogo inteiro. */
  'mentoria-zigo': {
    conservador: { cpm: 92, ctr: 0.007, custoPorConversa: 88 },
    realista: { cpm: 65, ctr: 0.011, custoPorConversa: 65 },
    agressivo: { cpm: 52, ctr: 0.015, custoPorConversa: 44 },
  },
};

/** Monta a premissa final de um produto num cenário: perfil do tier + exceções. */
export function premissasDe(cen: CenarioId, id: ProdutoId): Premissas {
  const prod = produtoPorId(id);
  return {
    ...PERFIL[cen][prod.tier],
    ticket: prod.ticket,
    objetivo: prod.objetivoPadrao,
    ...(AJUSTES[id]?.[cen] ?? {}),
  };
}

/* ============================================================
   Seleções prontas.

   Filtro declarativo, não função: mantém preset como DADO — acrescentar
   "Só entrada" é acrescentar um objeto, não escrever código.
   ============================================================ */
export type Preset = {
  id: string;
  nome: string;
  dica: string;
  /** Vazio = catálogo inteiro. `ids` explícito vence o filtro. */
  filtro?: { trilha?: Trilha[]; tier?: Tier[] };
  ids?: ProdutoId[];
};

export const PRESETS: Preset[] = [
  { id: 'todos', nome: 'Todos', dica: 'os 8 produtos no ar ao mesmo tempo', filtro: {} },
  {
    id: 'fase1', nome: 'Fase 1 recomendada',
    dica: 'os dois que se pagam sozinhos, sem produto de entrada',
    ids: ['maestria', 'mentoria-gestao'],
  },
  {
    id: 'gestao', nome: 'Trilha Gestão',
    dica: 'Kit F4 → CRC/Recepção → Consultoria/Mentoria de Gestão',
    filtro: { trilha: ['gestao'] },
  },
  {
    id: 'zigomatico', nome: 'Trilha Zigomático',
    dica: 'Descomplicado → Maestria → Mentoria de Zigomático',
    filtro: { trilha: ['zigomatico'] },
  },
  {
    id: 'alto', nome: 'Só alto ticket',
    dica: 'os três de candidatura, sem porta de entrada',
    filtro: { tier: ['alto'] },
  },
  { id: 'nenhum', nome: 'Nenhum', dica: 'zera para montar a seleção à mão', ids: [] },
];

export function idsDoPreset(p: Preset): ProdutoId[] {
  if (p.ids) return p.ids;
  const f = p.filtro ?? {};
  return PRODUTOS.filter(
    (x) =>
      (!f.trilha || f.trilha.includes(x.trilha)) && (!f.tier || f.tier.includes(x.tier)),
  ).map((x) => x.id);
}

/* ============================================================
   Taxas da escada de produtos.

   A base não é lista fria: é gente que já pagou, já consumiu o material e já
   conhece o método — e a equipe do Dr. Sócrates liga. Por isso estas taxas
   são muito mais altas que qualquer conversão de tráfego frio.

   As faixas vêm da prática de mercado em infoproduto com equipe comercial
   ativa. São as premissas MAIS incertas da página inteira — e também as que
   mais mexem no resultado. É o primeiro número a substituir por real.
   ============================================================ */
export const ESCADA: Record<CenarioId, TaxasEscada> = {
  /* Sem processo de contato estruturado: a base existe, mas ninguém liga
     com constância. */
  conservador: {
    porPar: { 'entrada-meio': 0.02, 'entrada-alto': 0.003, 'meio-alto': 0.04 },
    crossTrilha: 0.20,
  },
  /* Equipe contactando a base com régua definida. */
  realista: {
    porPar: { 'entrada-meio': 0.05, 'entrada-alto': 0.01, 'meio-alto': 0.08 },
    crossTrilha: 0.35,
  },
  /* Régua madura, com oferta certa na hora certa. */
  agressivo: {
    porPar: { 'entrada-meio': 0.09, 'entrada-alto': 0.02, 'meio-alto': 0.14 },
    crossTrilha: 0.50,
  },
};

/* Cross-sell não acontece na semana da compra: é nutrição, contato e
   fechamento. Entra no fluxo de caixa com ciclo próprio, bem mais longo que
   o da venda direta. */
export const CICLO_ESCADA_DIAS = 60;

export function produtoPorId(id: ProdutoId): ProdutoCat {
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
