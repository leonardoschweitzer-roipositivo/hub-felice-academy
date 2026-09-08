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

export type ProdutoId = 'kit-f4' | 'maestria' | 'mentoria';

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
const BANDAS: Array<{ ate: number; min: number; max: number; rotulo: string }> = [
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
export function fluxoDeCaixa(
  entradas: Array<{ resultado: Resultado; cicloDias: number }>,
  meses = 6,
): MesCaixa[] {
  const linhas: MesCaixa[] = [];

  for (let mes = 1; mes <= meses; mes++) {
    let verbaAcum = 0;
    let receitaAcum = 0;

    for (const { resultado, cicloDias } of entradas) {
      /* A verba sai integral desde o mês 1 — anúncio se paga adiantado. */
      verbaAcum += resultado.verbaMensal * mes;
      /* A receita não. `mesesMaduros` desconta o ciclo de fechamento: com 30
         dias de ciclo, o mês 1 rende zero e o acumulado anda um mês atrás. */
      const mesesMaduros = Math.max(0, mes - cicloDias / 30);
      receitaAcum += resultado.receita * mesesMaduros;
    }

    linhas.push({ mes, verbaAcum, receitaAcum, saldo: receitaAcum - verbaAcum });
  }

  return linhas;
}

/* ============================================================
   A escada de produtos (cross-sell).

   Acrescentada em 08/09/2026, depois que o Leo apontou o que faltava: quem
   compra o Kit F4 entra numa base que a equipe do Dr. Sócrates CONTACTA —
   e vende a Maestria ou a Mentoria. Quem compra a Maestria também sobe
   para a Mentoria.

   Isto não é um detalhe de arredondamento: é o que decide se o Kit F4 faz
   sentido. Olhando só a venda direta, ele tem ROAS 0,89 e parece prejuízo.
   Contando a escada, cada comprador do Kit vale várias vezes os R$ 97 —
   porque uma fração pequena dele compra um produto de R$ 15.000.
   ============================================================ */

export type TaxasEscada = {
  /** Compradores do Kit que sobem para a Maestria. */
  kitParaMaestria: number;
  /** Compradores do Kit que vão direto à Mentoria (só os que NÃO subiram). */
  kitParaMentoria: number;
  /** Compradores da Maestria (diretos + vindos do Kit) que sobem à Mentoria. */
  maestriaParaMentoria: number;
};

export type Escada = {
  kitParaMaestria: number;
  kitParaMentoria: number;
  maestriaParaMentoria: number;
  /** Vendas totais por produto, já somando as que vieram da escada. */
  maestriaTotal: number;
  mentoriaTotal: number;
  receitaDireta: number;
  receitaCruzada: number;
  receitaTotal: number;
  /** Quanto vale um comprador do Kit ao longo da escada inteira. */
  ltvKit: number;
  ltvMaestria: number;
};

/**
 * Distribui os compradores diretos pela escada.
 *
 * ⚠️ A ordem importa para não contar a mesma pessoa duas vezes: quem sobe do
 * Kit para a Maestria sai do bolo que pode ir direto do Kit para a Mentoria,
 * e reentra depois pela porta da Maestria. Sem isso a projeção venderia a
 * Mentoria duas vezes para o mesmo comprador.
 */
export function calcularEscada(
  vendasDiretas: Record<ProdutoId, number>,
  tickets: Record<ProdutoId, number>,
  t: TaxasEscada,
): Escada {
  const kit = vendasDiretas['kit-f4'];

  const kitParaMaestria = kit * t.kitParaMaestria;
  /* Só quem ficou: quem já subiu para a Maestria será contado adiante. */
  const kitParaMentoria = (kit - kitParaMaestria) * t.kitParaMentoria;

  const maestriaTotal = vendasDiretas.maestria + kitParaMaestria;
  const maestriaParaMentoria = maestriaTotal * t.maestriaParaMentoria;

  const mentoriaTotal = vendasDiretas.mentoria + kitParaMentoria + maestriaParaMentoria;

  const receitaDireta =
    kit * tickets['kit-f4'] +
    vendasDiretas.maestria * tickets.maestria +
    vendasDiretas.mentoria * tickets.mentoria;

  const receitaCruzada =
    kitParaMaestria * tickets.maestria +
    (kitParaMentoria + maestriaParaMentoria) * tickets.mentoria;

  /* LTV de um comprador do Kit: o próprio ticket mais o valor esperado de
     cada degrau acima, com as mesmas exclusões da conta de cima. */
  const ltvKit =
    tickets['kit-f4'] +
    t.kitParaMaestria * tickets.maestria +
    (1 - t.kitParaMaestria) * t.kitParaMentoria * tickets.mentoria +
    t.kitParaMaestria * t.maestriaParaMentoria * tickets.mentoria;

  const ltvMaestria = tickets.maestria + t.maestriaParaMentoria * tickets.mentoria;

  return {
    kitParaMaestria,
    kitParaMentoria,
    maestriaParaMentoria,
    maestriaTotal,
    mentoriaTotal,
    receitaDireta,
    receitaCruzada,
    receitaTotal: receitaDireta + receitaCruzada,
    ltvKit,
    ltvMaestria,
  };
}
