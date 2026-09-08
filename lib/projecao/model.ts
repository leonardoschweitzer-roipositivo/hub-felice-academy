/* ============================================================
   Motor de cálculo da projeção de investimento em tráfego.

   Módulo PURO de propósito: nenhum import de React, nenhum estado, nenhuma
   formatação. Só entra número e sai número. Duas razões:

   1) Dá para conferir o modelo lendo um arquivo só, sem caçar a conta no
      meio de JSX. Quem for auditar a projeção com o Dr. Sócrates abre aqui.
   2) O simulador chama `projetar()` a cada tecla digitada. Sem efeito
      colateral, o React só re-renderiza — não há sincronização para errar.

   Levantado em 08/09/2026 a partir do benchmark que a equipe da Greenn
   passou por WhatsApp (taxas médias de conversão por faixa de ticket) e da
   regra das 50 conversões do Meta.

   ⚠️ NÃO existe dado histórico de campanha da Felice neste projeto — não há
   nada em docs/ e nunca rodou tráfego nesses funis. Tudo aqui é benchmark
   externo + premissa. Depois de 30 dias no ar, troque as premissas em
   premissas.ts pelos números reais do gerenciador e reprojete.
   ============================================================ */

/** Evento pelo qual o Meta otimiza a entrega. Muda TUDO no custo. */
export type Objetivo = 'purchase' | 'whatsapp';

/* O motor NÃO conhece produto nenhum: é genérico sobre o id, e o catálogo
   (premissas.ts) é quem define quais existem. Antes `ProdutoId` morava aqui,
   em contradição com o cabeçalho deste arquivo — e cada produto novo obrigava
   a mexer no motor. */
export type Tier = 'entrada' | 'meio' | 'alto';

/* 365 / 12 / 7. Usar "4 semanas" subestimaria a verba mensal em ~8%, o que
   num piso de R$ 40 mil dá R$ 3,4 mil de diferença — dinheiro de verdade. */
export const SEMANAS_MES = 365 / 12 / 7;

/** Conversões que o Meta exige por conjunto, em janela móvel de 7 dias. */
export const CONVERSOES_APRENDIZAGEM = 50;

export type Premissas = {
  ticket: number;
  objetivo: Objetivo;
  /** Custo por mil impressões, em BRL. */
  cpm: number;
  /** Click-through rate do link, 0–1. */
  ctr: number;
  /** `purchase`: taxa página → compra (0–1). Ignorado no WhatsApp. */
  convLP: number;
  /** `whatsapp`: custo do evento "conversa iniciada", em BRL. Ignorado no purchase. */
  custoPorConversa: number;
  /* Etapas do funil de WhatsApp (0–1). No purchase a venda é o próprio
     evento otimizado e estas quatro não entram na conta. */
  taxaQualificacao: number;
  taxaAgendamento: number;
  taxaComparecimento: number;
  taxaFechamento: number;
  /* Nº de conjuntos de anúncios. Multiplica o piso da verba, porque a regra
     das 50 é POR CONJUNTO — é a alavanca de custo mais mal compreendida do
     Meta e a razão de este campo existir no simulador. */
  conjuntos: number;
  /** Dias entre o clique e o dinheiro na conta. Alimenta o fluxo de caixa. */
  cicloDias: number;
};

export type Guardrail = 'abaixo' | 'dentro' | 'acima';

export type Resultado = {
  cpc: number;
  impressoes: number;
  cliques: number;
  /** Compras (purchase) ou conversas iniciadas (whatsapp). */
  eventosOtimizados: number;
  eventosPorSemana: number;
  vendas: number;
  receita: number;
  cac: number;
  roas: number;
  lucro: number;
  custoPorEvento: number;
  verbaMensal: number;
  verbaMinimaSemanal: number;
  verbaMinimaMensal: number;
  /** Falso = campanha trava em "aprendizagem limitada" para sempre. */
  saiDaAprendizagem: boolean;
  /** Taxa clique → venda, para confrontar com a banda da Greenn. */
  taxaImplicita: number;
  banda: Banda;
  guardrail: Guardrail;
};

export type Banda = { min: number; max: number; rotulo: string };

/* Benchmark da Greenn: taxa média de conversão ponta-a-ponta por faixa de
   ticket. Quanto mais caro o produto, menos gente compra sem falar com
   alguém — daí a escada descendente. */
export const BANDAS: Array<{ ate: number; min: number; max: number; rotulo: string }> = [
  { ate: 100, min: 0.015, max: 0.05, rotulo: 'até R$ 100' },
  { ate: 500, min: 0.01, max: 0.03, rotulo: 'R$ 100 a R$ 500' },
  { ate: 2000, min: 0.008, max: 0.02, rotulo: 'R$ 500 a R$ 2.000' },
  { ate: 5000, min: 0.005, max: 0.015, rotulo: 'R$ 2.000 a R$ 5.000' },
  { ate: Infinity, min: 0.002, max: 0.008, rotulo: 'acima de R$ 5.000' },
];

export function bandaGreenn(ticket: number): Banda {
  const b = BANDAS.find((x) => ticket <= x.ate) ?? BANDAS[BANDAS.length - 1];
  return { min: b.min, max: b.max, rotulo: b.rotulo };
}

/** Custo por clique derivado de CPM e CTR. */
export function calcularCpc(cpm: number, ctr: number): number {
  if (ctr <= 0) return 0;
  return cpm / 1000 / ctr;
}

/* Encarecimento por saturação: a cada vez que a verba DOBRA acima do piso, o
   CPA sobe ~12%. Sem isto o simulador vira régua linear e promete que R$ 200
   mil compram 5× o resultado de R$ 40 mil — o que nunca acontece: o público
   qualificado é finito e o leilão cobra mais caro pelos próximos. */
export function aplicarSaturacao(custoBase: number, fatorEscala: number): number {
  if (fatorEscala <= 1) return custoBase;
  return custoBase * (1 + 0.12 * Math.log2(fatorEscala));
}

/** Custo do evento que o Meta otimiza — a peça que separa os dois objetivos. */
export function custoPorEventoBase(p: Premissas): number {
  if (p.objetivo === 'whatsapp') return p.custoPorConversa;
  /* No purchase o evento otimizado é a própria venda, então o custo é o
     clique dividido pela conversão da página. É por isso que low ticket com
     objetivo Purchase é tão caro de manter fora da aprendizagem. */
  const cpc = calcularCpc(p.cpm, p.ctr);
  return p.convLP > 0 ? cpc / p.convLP : 0;
}

/** Fração das conversas que viram venda (1 no purchase — a conversa É a venda). */
export function taxaConversaVenda(p: Premissas): number {
  if (p.objetivo === 'purchase') return 1;
  return p.taxaQualificacao * p.taxaAgendamento * p.taxaComparecimento * p.taxaFechamento;
}

/** Piso semanal: 50 conversões por conjunto, ao custo do evento otimizado. */
export function verbaMinimaSemanal(p: Premissas): number {
  return CONVERSOES_APRENDIZAGEM * custoPorEventoBase(p) * Math.max(1, p.conjuntos);
}

export function verbaMinimaMensal(p: Premissas): number {
  return verbaMinimaSemanal(p) * SEMANAS_MES;
}

/**
 * Projeta um mês de campanha.
 * `verbaMensal` omitida = roda exatamente no piso da aprendizagem, que é o
 * cenário que interessa para responder "quanto custa no mínimo".
 */
export function projetar(p: Premissas, verbaMensal?: number): Resultado {
  const minSemanal = verbaMinimaSemanal(p);
  const minMensal = minSemanal * SEMANAS_MES;
  const verba = verbaMensal && verbaMensal > 0 ? verbaMensal : minMensal;

  const base = custoPorEventoBase(p);
  const fator = minMensal > 0 ? verba / minMensal : 1;
  const custoPorEvento = aplicarSaturacao(base, fator);

  const eventos = custoPorEvento > 0 ? verba / custoPorEvento : 0;
  const eventosPorSemana = eventos / SEMANAS_MES;

  const vendas = eventos * taxaConversaVenda(p);
  const receita = vendas * p.ticket;

  const cpc = calcularCpc(p.cpm, p.ctr);
  const cliques = cpc > 0 ? verba / cpc : 0;
  const impressoes = p.cpm > 0 ? (verba / p.cpm) * 1000 : 0;

  const taxaImplicita = cliques > 0 ? vendas / cliques : 0;
  const banda = bandaGreenn(p.ticket);
  const guardrail: Guardrail =
    taxaImplicita < banda.min ? 'abaixo' : taxaImplicita > banda.max ? 'acima' : 'dentro';

  return {
    cpc,
    impressoes,
    cliques,
    eventosOtimizados: eventos,
    eventosPorSemana,
    vendas,
    receita,
    cac: vendas > 0 ? verba / vendas : 0,
    roas: verba > 0 ? receita / verba : 0,
    lucro: receita - verba,
    custoPorEvento,
    verbaMensal: verba,
    verbaMinimaSemanal: minSemanal,
    verbaMinimaMensal: minMensal,
    /* Janela MÓVEL de 7 dias: ou a campanha faz as 50 dentro da semana, ou
       não sai nunca — não é questão de esperar mais tempo.

       A tolerância não é preciosismo: rodando EXATAMENTE no piso, a conta
       volta 49,99999999999999 em ponto flutuante e o cartão acendia o
       alerta vermelho de "aprendizagem limitada" no cenário padrão — bem
       no número que a página inteira apresenta como suficiente. */
    saiDaAprendizagem: eventosPorSemana >= CONVERSOES_APRENDIZAGEM - 1e-9,
    taxaImplicita,
    banda,
    guardrail,
  };
}

export type MesCaixa = {
  mes: number;
  verbaAcum: number;
  receitaAcum: number;
  saldo: number;
};

/**
 * Fluxo de caixa acumulado com DEFASAGEM de fechamento.
 *
 * A venda de alto ticket não cai no mês em que a verba foi gasta: entre o
 * clique e o pix passam semanas de conversa. Ignorar isso é o erro que
 * quebra o caixa — a projeção "fecha" no papel e falta dinheiro em março.
 */
/* Só o que o caixa precisa. Receber `Resultado` inteiro era demais — e
   obrigava a UI a fabricar um Resultado falso só para a linha da escada. */
export type EntradaCaixa = { verbaMensal: number; receita: number; cicloDias: number };

export function fluxoDeCaixa(entradas: readonly EntradaCaixa[], meses = 6): MesCaixa[] {
  const linhas: MesCaixa[] = [];

  for (let mes = 1; mes <= meses; mes++) {
    let verbaAcum = 0;
    let receitaAcum = 0;

    for (const e of entradas) {
      /* A verba sai integral desde o mês 1 — anúncio se paga adiantado. */
      verbaAcum += e.verbaMensal * mes;
      /* A receita não. `mesesMaduros` desconta o ciclo de fechamento: com 30
         dias de ciclo, o mês 1 rende zero e o acumulado anda um mês atrás. */
      const mesesMaduros = Math.max(0, mes - e.cicloDias / 30);
      receitaAcum += e.receita * mesesMaduros;
    }

    linhas.push({ mes, verbaAcum, receitaAcum, saldo: receitaAcum - verbaAcum });
  }

  return linhas;
}

/* ============================================================
   A escada de produtos (cross-sell).

   Quem compra um produto entra numa base que a equipe do Dr. Sócrates
   CONTACTA — e sobe degrau. Isso não é detalhe: é o que decide se um produto
   de entrada faz sentido. Pela venda direta o Kit F4 tem ROAS abaixo de 1 e
   parece prejuízo; contando a escada, cada comprador vale várias vezes o
   próprio ticket, porque uma fração pequena dele compra alto ticket.

   Generalizada em 08/09/2026 de 3 para 8 produtos. A cascata escrita à mão
   (kitParaMaestria, kitParaMentoria, maestriaParaMentoria) não escala: com 8
   produtos a matriz de todos-para-todos daria 56 pares, e ninguém calibra 56
   números — 52 seriam o mesmo chute copiado. A granularidade em que a
   premissa realmente existe é o PAR DE TIER, com um desconto para quem
   cruza de trilha temática.
   ============================================================ */

export type ParTier = 'entrada-meio' | 'entrada-alto' | 'meio-alto';

export type TaxasEscada = {
  /** Fração da coorte do tier de baixo que sobe, por par de tier. */
  porPar: Record<ParTier, number>;
  /* Multiplicador quando origem e destino são de trilhas diferentes. Quem
     comprou o Kit de GESTÃO tem menos chance de subir para a Mentoria de
     ZIGOMÁTICO do que para a Consultoria — mas não zero: é o mesmo dentista,
     na mesma base, recebendo a mesma ligação. */
  crossTrilha: number;
};

/** O que o motor precisa saber de um produto para montar a escada. */
export type NoEscada<Id extends string = string> = {
  id: Id;
  tier: Tier;
  /** O motor não sabe quais trilhas existem — só compara igualdade. */
  trilha: string;
  ticket: number;
  /** Peso ao receber gente do tier de baixo, relativo aos irmãos do tier. */
  peso: number;
  /* Vendas vindas de anúncio. Zero quando não há campanha no ar — e o produto
     CONTINUA sendo destino da escada, porque a equipe comercial vende para a
     base mesmo sem anúncio nenhum. Essa é a tese da página, então o motor não
     tem noção de "ligado/desligado": só de venda direta. */
  vendasDiretas: number;
};

export type FluxoEscada<Id extends string = string> = {
  de: Id;
  para: Id;
  deTier: Tier;
  paraTier: Tier;
  crossTrilha: boolean;
  pessoas: number;
  receita: number;
};

export type Escada<Id extends string = string> = {
  /** Arestas realizadas, para a UI listar os degraus que pesam. */
  fluxos: FluxoEscada<Id>[];
  /** Agregados que casam 1:1 com os sliders. */
  porPar: Record<ParTier, { pessoas: number; receita: number }>;
  vendasTotais: Record<Id, number>;
  vendasCruzadas: Record<Id, number>;
  receitaDireta: number;
  receitaCruzada: number;
  receitaTotal: number;
};

const PASSES: Array<{ de: Tier; para: Tier; par: ParTier }> = [
  { de: 'entrada', para: 'meio', par: 'entrada-meio' },
  /* Salto direto entrada→alto: só quem SOBROU do passe anterior. É o antigo
     `(kit - kitParaMaestria) * taxa`, generalizado. */
  { de: 'entrada', para: 'alto', par: 'entrada-alto' },
  /* Lê o que o primeiro passe depositou no meio: é o antigo
     `maestriaTotal = direta + vindos do kit`. */
  { de: 'meio', para: 'alto', par: 'meio-alto' },
];

/**
 * Distribui os compradores diretos pela escada.
 *
 * ⚠️ A ORDEM DA NORMALIZAÇÃO é a regra que faz o modelo funcionar:
 *
 *     share_q    = peso_q / Σ peso_q                        (pesos BRUTOS)
 *     fluxo(p→q) = coorte × taxa × share_q × fator(p,q)     (fator DEPOIS)
 *
 * Normalizar os pesos já multiplicados pelo fator de trilha faria a soma
 * voltar a 1, e o desconto viraria mera REDISTRIBUIÇÃO — o comprador do Kit
 * de Gestão subiria para a Maestria Zigomática na mesma taxa de sempre e o
 * `crossTrilha` seria enfeite. Normalizando os brutos, `Σ share × fator ≤ 1`:
 * quem não subiu por incompatibilidade de trilha FICA na coorte e ainda pode
 * pegar o degrau seguinte.
 *
 * ⚠️ E ninguém é contado duas vezes: `restante` é debitado a cada promoção,
 * enquanto `total` acumula para o placar. Sem essa separação a projeção
 * venderia a mesma mentoria duas vezes para a mesma pessoa.
 */
export function calcularEscada<Id extends string>(
  nos: ReadonlyArray<NoEscada<Id>>,
  t: TaxasEscada,
): Escada<Id> {
  const doTier = (tier: Tier) => nos.filter((n) => n.tier === tier);

  const restante = new Map<Id, number>(nos.map((n) => [n.id, n.vendasDiretas]));
  const total = new Map<Id, number>(nos.map((n) => [n.id, n.vendasDiretas]));
  const fluxos: FluxoEscada<Id>[] = [];

  /** Promove uma coorte para um tier. Devolve quanta gente efetivamente subiu. */
  function distribuir(origem: NoEscada<Id>, coorte: number, destinoTier: Tier, taxa: number) {
    const destinos = doTier(destinoTier).filter((d) => d.id !== origem.id);
    const somaPesos = destinos.reduce((a, d) => a + d.peso, 0);
    if (coorte <= 0 || taxa <= 0 || somaPesos <= 0) return 0;

    let promovidos = 0;
    for (const d of destinos) {
      const cross = d.trilha !== origem.trilha;
      const pessoas = coorte * taxa * (d.peso / somaPesos) * (cross ? t.crossTrilha : 1);
      if (pessoas <= 0) continue;
      promovidos += pessoas;
      /* Quem chega entra nas DUAS contas: conta como venda e fica elegível
         ao passe seguinte. */
      total.set(d.id, (total.get(d.id) ?? 0) + pessoas);
      restante.set(d.id, (restante.get(d.id) ?? 0) + pessoas);
      fluxos.push({
        de: origem.id,
        para: d.id,
        deTier: origem.tier,
        paraTier: d.tier,
        crossTrilha: cross,
        pessoas,
        receita: pessoas * d.ticket,
      });
    }
    return promovidos;
  }

  for (const passe of PASSES) {
    for (const n of doTier(passe.de)) {
      const coorte = restante.get(n.id) ?? 0;
      const subiu = distribuir(n, coorte, passe.para, t.porPar[passe.par]);
      restante.set(n.id, coorte - subiu);
    }
  }

  const receitaDireta = nos.reduce((a, n) => a + n.vendasDiretas * n.ticket, 0);
  const receitaCruzada = fluxos.reduce((a, f) => a + f.receita, 0);

  const porPar: Escada<Id>['porPar'] = {
    'entrada-meio': { pessoas: 0, receita: 0 },
    'entrada-alto': { pessoas: 0, receita: 0 },
    'meio-alto': { pessoas: 0, receita: 0 },
  };
  for (const f of fluxos) {
    const k = `${f.deTier}-${f.paraTier}` as ParTier;
    porPar[k].pessoas += f.pessoas;
    porPar[k].receita += f.receita;
  }

  return {
    fluxos,
    porPar,
    vendasTotais: Object.fromEntries(total) as Record<Id, number>,
    vendasCruzadas: Object.fromEntries(
      nos.map((n) => [n.id, (total.get(n.id) ?? 0) - n.vendasDiretas]),
    ) as Record<Id, number>,
    receitaDireta,
    receitaCruzada,
    receitaTotal: receitaDireta + receitaCruzada,
  };
}

/**
 * LTV de cada produto: a receita que a cascata inteira gera para UMA compra.
 *
 * Reusa o próprio motor em vez de repetir a fórmula. A versão anterior tinha
 * o LTV como fórmula fechada que replicava à mão a lógica da cascata — com 8
 * produtos seria impossível de escrever e sairia de sincronia no primeiro
 * ajuste. Rodando o mesmo algoritmo com um comprador só, é impossível
 * divergir. Custo: N execuções de uma função O(N²) com N=8, irrelevante.
 */
export function ltvPorProduto<Id extends string>(
  nos: ReadonlyArray<NoEscada<Id>>,
  t: TaxasEscada,
): Record<Id, number> {
  const saida = {} as Record<Id, number>;
  for (const alvo of nos) {
    const unitario = nos.map((n) => ({ ...n, vendasDiretas: n.id === alvo.id ? 1 : 0 }));
    saida[alvo.id] = calcularEscada(unitario, t).receitaTotal;
  }
  return saida;
}
