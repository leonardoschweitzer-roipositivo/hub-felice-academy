'use client';

import { useState } from 'react';

import {
  projetar,
  fluxoDeCaixa,
  calcularEscada,
  ltvPorProduto,
  taxaConversaVenda,
  CONVERSOES_APRENDIZAGEM,
  type Premissas,
  type Objetivo,
  type NoEscada,
  type Resultado,
} from '@/lib/projecao/model';
import {
  PRODUTOS, CENARIOS, PRESETS, ESCADA, CICLO_ESCADA_DIAS,
  premissasDe, idsDoPreset, produtoPorId, money, pct, num,
  type CenarioId, type ProdutoId, type ProdutoCat, type Trilha,
} from '@/lib/projecao/premissas';
import { Funil, type EtapaFunil } from './charts/Funil';
import { BarraAlocacao } from './charts/BarraAlocacao';
import { CurvaCaixa } from './charts/CurvaCaixa';
import { SIMULADOR, ESCADA_TXT } from './content';

/* ============================================================
   O simulador. Único componente com estado da página inteira.

   Três decisões que evitam `useEffect` — e, com ele, toda uma classe de bug
   de sincronização:

   1) A verba é guardada como FATOR do piso, não em reais. Assim, mexer no
      CPM ou no nº de conjuntos move o piso E a verba junto, sozinho.
   2) O preset ativo é DERIVADO de `ativos`, nunca guardado. Guardá-lo em
      estado exigiria sincronizar os dois na mão a cada clique num chip.
   3) Todo o resto é derivado no render. Nada de resultado em estado: não há
      como a tela discordar da conta.

   Generalizado para 8 produtos em 08/09/2026. Nenhum estado daqui lista
   produto à mão — tudo passa por `porProduto()`, então acrescentar produto
   ao catálogo não obriga a tocar neste arquivo.
   ============================================================ */

/** Constrói um Record indexado por id a partir do catálogo. */
function porProduto<T>(fn: (p: ProdutoCat) => T): Record<ProdutoId, T> {
  return Object.fromEntries(PRODUTOS.map((p) => [p.id, fn(p)])) as Record<ProdutoId, T>;
}

const TRILHAS: Array<{ id: Trilha; nome: string }> = [
  { id: 'gestao', nome: 'Gestão' },
  { id: 'zigomatico', nome: 'Zigomático' },
];

const PARES = [
  { par: 'entrada-meio' as const, rot: 'Entrada → Meio', max: 0.25, passo: 0.005 },
  { par: 'entrada-alto' as const, rot: 'Entrada → Alto (salto direto)', max: 0.08, passo: 0.002 },
  { par: 'meio-alto' as const, rot: 'Meio → Alto', max: 0.3, passo: 0.005 },
];

export function Simulador() {
  const [cenario, setCenario] = useState<CenarioId>('realista');
  const [prem, setPrem] = useState(() => porProduto((p) => premissasDe('realista', p.id)));
  const [fatores, setFatores] = useState(() => porProduto(() => 1));
  const [ativos, setAtivos] = useState(() => porProduto((p) => p.padraoNoAr));
  const [escada, setEscada] = useState(() => ({ ...ESCADA.realista }));

  function trocarCenario(id: CenarioId) {
    setCenario(id);
    setPrem(porProduto((p) => premissasDe(id, p.id)));
    setFatores(porProduto(() => 1));
    setEscada({ ...ESCADA[id] });
  }

  function editar<K extends keyof Premissas>(id: ProdutoId, campo: K, valor: Premissas[K]) {
    setPrem((s) => ({ ...s, [id]: { ...s[id], [campo]: valor } }));
  }

  /* Um resultado por produto, indexado por id — nada de acesso posicional:
     reordenar PRODUTOS trocava os números em silêncio, sem erro de tipo. */
  const resultados = porProduto((p) => {
    const premissas = prem[p.id];
    const piso = projetar(premissas).verbaMinimaMensal;
    return projetar(premissas, piso * fatores[p.id]);
  });

  const ligados = PRODUTOS.filter((p) => ativos[p.id]);
  const verbaTotal = ligados.reduce((a, p) => a + resultados[p.id].verbaMensal, 0);

  /* Produto desligado entra na escada com ZERO venda direta — mas continua
     sendo destino: a equipe vende para a base mesmo sem anúncio no ar. É a
     tese da página, e é por isso que a Consultoria fatura aqui sem nunca ter
     tido campanha. */
  const nos: NoEscada<ProdutoId>[] = PRODUTOS.map((p) => ({
    id: p.id,
    tier: p.tier,
    trilha: p.trilha,
    ticket: prem[p.id].ticket,
    peso: p.pesoEscada,
    vendasDiretas: ativos[p.id] ? resultados[p.id].vendas : 0,
  }));

  const esc = calcularEscada(nos, escada);
  const ltv = ltvPorProduto(nos, escada);
  const receitaTotal = esc.receitaTotal;

  const caixa = fluxoDeCaixa([
    ...ligados.map((p) => ({
      verbaMensal: resultados[p.id].verbaMensal,
      receita: resultados[p.id].vendas * prem[p.id].ticket,
      cicloDias: prem[p.id].cicloDias,
    })),
    /* A receita da escada entra como linha própria, com ciclo bem mais longo:
       nutrir e fechar o degrau de cima leva cerca de 60 dias. */
    { verbaMensal: 0, receita: esc.receitaCruzada, cicloDias: CICLO_ESCADA_DIAS },
  ], 6);

  /* Derivado, jamais estado — ver decisão (2) no cabeçalho. */
  const presetAtual = PRESETS.find((ps) => {
    const alvo = new Set<string>(idsDoPreset(ps));
    return PRODUTOS.every((p) => ativos[p.id] === alvo.has(p.id));
  })?.id;

  const compacto = ligados.length > 4;

  return (
    <section className="sec pj-sim" id="simulador">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">{SIMULADOR.eyebrow}</span>
          <h2>{SIMULADOR.h2}</h2>
          <p className="lead">{SIMULADOR.lead}</p>
          <p className="pj-nota">{SIMULADOR.notaPreco}</p>
        </div>

        <div className="pj-cenarios" role="group" aria-label="Cenário">
          {CENARIOS.map((c) => (
            <button
              key={c.id}
              type="button"
              className={`pj-cen${cenario === c.id ? ' is-on' : ''}`}
              onClick={() => trocarCenario(c.id)}
              aria-pressed={cenario === c.id}
            >
              <b>{c.nome}</b>
              <span>{c.descricao}</span>
            </button>
          ))}
        </div>

        {/* ---------- seleção de produtos ---------- */}
        <div className="pj-selecao">
          <div className="pj-selecao-head">
            <span className="eyebrow">Produtos no ar</span>
            <b>{ligados.length} de {PRODUTOS.length}</b>
          </div>

          <div className="pj-presets" role="group" aria-label="Seleções prontas">
            {PRESETS.map((ps) => (
              <button
                key={ps.id}
                type="button"
                className={`pj-preset${presetAtual === ps.id ? ' is-on' : ''}`}
                aria-pressed={presetAtual === ps.id}
                title={ps.dica}
                onClick={() => {
                  const alvo = new Set<string>(idsDoPreset(ps));
                  setAtivos(porProduto((p) => alvo.has(p.id)));
                }}
              >
                {ps.nome}
              </button>
            ))}
          </div>

          {TRILHAS.map((tr) => (
            <div className="pj-chip-grupo" key={tr.id}>
              <span className="pj-chip-grupo-rot">{tr.nome}</span>
              <div className="pj-chips">
                {PRODUTOS.filter((p) => p.trilha === tr.id).map((p) => (
                  <label
                    key={p.id}
                    className={`pj-chip pj-chip--${p.tier}${ativos[p.id] ? ' is-on' : ''}`}
                  >
                    <input
                      type="checkbox"
                      checked={ativos[p.id]}
                      onChange={(e) =>
                        setAtivos((s) => ({ ...s, [p.id]: e.target.checked }))
                      }
                    />
                    <span>{p.nome}</span>
                    <em>{money(prem[p.id].ticket)}</em>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ---------- resumo consolidado ---------- */}
        <div className="pj-resumo">
          <div className="pj-resumo-nums">
            <div><b>{money(verbaTotal)}</b><span>verba por mês</span></div>
            <div><b>{money(receitaTotal)}</b><span>receita com a escada</span></div>
            <div>
              <b className={receitaTotal >= verbaTotal ? 'ok' : 'ruim'}>
                {verbaTotal > 0 ? `${(receitaTotal / verbaTotal).toFixed(2)}×` : '—'}
              </b>
              <span>ROAS consolidado</span>
            </div>
            <div>
              <b className={receitaTotal - verbaTotal >= 0 ? 'ok' : 'ruim'}>
                {money(receitaTotal - verbaTotal)}
              </b>
              <span>resultado no mês</span>
            </div>
          </div>

          {ligados.length > 0 && (
            <BarraAlocacao
              fatias={ligados.map((p) => ({
                id: p.id,
                nome: p.nome,
                trilha: p.trilha,
                tier: p.tier,
                valor: resultados[p.id].verbaMensal,
                rotulo: money(resultados[p.id].verbaMensal),
              }))}
            />
          )}
        </div>

        {/* ---------- um cartão por produto no ar ---------- */}
        {ligados.length === 0 ? (
          <p className="pj-vazio">
            Nenhum produto selecionado. Escolha ao menos um acima para ver a projeção.
          </p>
        ) : (
          <div className={`pj-grid${compacto ? ' pj-grid--compacto' : ''}`}>
            {ligados.map((produto) => (
              <CartaoProduto
                key={produto.id}
                produto={produto}
                premissas={prem[produto.id]}
                resultado={resultados[produto.id]}
                fator={fatores[produto.id]}
                onAtivo={() => setAtivos((s) => ({ ...s, [produto.id]: false }))}
                onFator={(v) => setFatores((s) => ({ ...s, [produto.id]: v }))}
                onEditar={(campo, valor) => editar(produto.id, campo, valor)}
              />
            ))}
          </div>
        )}

        {/* ---------- escada de produtos ---------- */}
        <div className="pj-escada">
          <div className="pj-escada-head">
            <span className="eyebrow">{ESCADA_TXT.eyebrow}</span>
            <h3>{ESCADA_TXT.h2}</h3>
            <p className="pj-nota">{ESCADA_TXT.lead}</p>
          </div>

          <div className="pj-escada-body">
            <div className="pj-escada-campos">
              {PARES.map((x) => (
                <Campo
                  key={x.par}
                  rot={x.rot}
                  valor={escada.porPar[x.par]}
                  fmt={(v) => pct(v, 1)}
                  min={0}
                  max={x.max}
                  passo={x.passo}
                  bruto={escada.porPar[x.par]}
                  onChange={(v) =>
                    setEscada((e) => ({ ...e, porPar: { ...e.porPar, [x.par]: v } }))
                  }
                  dica={`${num(esc.porPar[x.par].pessoas, 1)} vendas/mês · ${money(esc.porPar[x.par].receita)}`}
                />
              ))}
              <Campo
                rot="Cruzar trilha"
                valor={escada.crossTrilha}
                fmt={(v) => pct(v, 0)}
                min={0}
                max={1}
                passo={0.05}
                bruto={escada.crossTrilha}
                onChange={(v) => setEscada((e) => ({ ...e, crossTrilha: v }))}
                dica="chance de quem é de Gestão subir para um produto de Zigomático, e vice-versa"
              />
            </div>

            <div className="pj-escada-saida">
              <dl className="pj-out pj-out--escada">
                <div><dt>Receita direta</dt><dd>{money(esc.receitaDireta)}</dd></div>
                <div><dt>Receita da escada</dt><dd className="forte">{money(esc.receitaCruzada)}</dd></div>
                <div>
                  <dt>Peso da escada</dt>
                  <dd>{receitaTotal > 0 ? pct(esc.receitaCruzada / receitaTotal, 0) : '—'}</dd>
                </div>
              </dl>

              {/* LTV de quem está na base de entrada e meio */}
              <table className="pj-ltv">
                <thead>
                  <tr><th>Comprador de</th><th>LTV</th><th>CAC</th><th>LTV:CAC</th></tr>
                </thead>
                <tbody>
                  {PRODUTOS.filter((p) => p.tier !== 'alto' && ativos[p.id]).map((p) => {
                    const cac = resultados[p.id].cac;
                    const razao = cac > 0 ? ltv[p.id] / cac : 0;
                    return (
                      <tr key={p.id}>
                        <td>{p.nome}</td>
                        <td className="pj-mono">{money(ltv[p.id])}</td>
                        <td className="pj-mono">{money(cac)}</td>
                        <td className={`pj-mono ${razao >= 3 ? 'forte' : 'fraco'}`}>
                          {razao.toFixed(2)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              {/* Onde a escada deposita: os produtos de alto ticket */}
              <table className="pj-ltv">
                <thead>
                  <tr><th>Alto ticket</th><th>Diretas</th><th>Com escada</th></tr>
                </thead>
                <tbody>
                  {PRODUTOS.filter((p) => p.tier === 'alto').map((p) => (
                    <tr key={p.id} className={ativos[p.id] ? '' : 'is-apagado'}>
                      <td>
                        {p.nome}
                        {!ativos[p.id] && <em> · sem campanha</em>}
                      </td>
                      <td className="pj-mono">
                        {num(ativos[p.id] ? resultados[p.id].vendas : 0, 1)}
                      </td>
                      <td className="pj-mono forte">{num(esc.vendasTotais[p.id], 1)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="pj-nota">{ESCADA_TXT.nota}</p>
          <p className="pj-destaque pj-destaque--aviso">{ESCADA_TXT.aviso}</p>
        </div>

        {/* ---------- caixa ---------- */}
        <div className="pj-caixa">
          <h3>Caixa acumulado em 6 meses</h3>
          <p className="pj-nota">
            A verba sai integral desde o mês 1; a receita entra com a defasagem do ciclo de
            fechamento de cada produto, e a da escada leva {CICLO_ESCADA_DIAS} dias. A faixa
            entre as duas linhas é o resultado acumulado — e a distância no mês 1 é o capital
            de giro que precisa existir antes de começar.
          </p>
          <CurvaCaixa meses={caixa} />
        </div>
      </div>
    </section>
  );
}

/* ============================================================ */

function CartaoProduto(props: {
  produto: ProdutoCat;
  premissas: Premissas;
  resultado: Resultado;
  fator: number;
  onAtivo: () => void;
  onFator: (v: number) => void;
  onEditar: <K extends keyof Premissas>(campo: K, valor: Premissas[K]) => void;
}) {
  const { produto, premissas: p, resultado: r } = props;
  const whats = p.objetivo === 'whatsapp';
  const candidatura = produto.entrada === 'candidatura';
  /* Nos produtos de candidatura o evento é a CANDIDATURA, não uma conversa
     solta: o rótulo muda, o motor não. */
  const evento = candidatura ? 'candidatura' : whats ? 'conversa' : 'compra';
  const eventoPlural = candidatura ? 'candidaturas' : whats ? 'conversas' : 'compras';

  const etapas: EtapaFunil[] = whats
    ? [
        { rotulo: 'Cliques no anúncio', valor: num(r.cliques), fracao: 1 },
        {
          rotulo: candidatura ? 'Candidaturas' : 'Conversas iniciadas',
          valor: num(r.eventosOtimizados), fracao: r.eventosOtimizados / r.cliques,
          passagem: `${pct(r.eventosOtimizados / r.cliques)} dos cliques`,
        },
        {
          rotulo: 'Leads qualificados', valor: num(r.eventosOtimizados * p.taxaQualificacao),
          fracao: (r.eventosOtimizados * p.taxaQualificacao) / r.cliques,
          passagem: `${pct(p.taxaQualificacao, 0)} das ${eventoPlural}`,
        },
        {
          rotulo: 'Vendas', valor: num(r.vendas, 1), fracao: r.vendas / r.cliques,
          passagem: `${pct(taxaConversaVenda(p))} das ${eventoPlural}`,
        },
      ]
    : [
        { rotulo: 'Cliques no anúncio', valor: num(r.cliques), fracao: 1 },
        {
          rotulo: 'Compras', valor: num(r.vendas), fracao: r.vendas / r.cliques,
          passagem: `${pct(p.convLP)} dos cliques`,
        },
      ];

  return (
    <article className={`pj-card pj-card--${produto.tier}`}>
      <header className="pj-card-head">
        <div>
          <h3>{produto.nome}</h3>
          <p className="pj-papel">{produto.papel}</p>
        </div>
        <button
          type="button"
          className="pj-tirar"
          onClick={props.onAtivo}
          title={`Tirar ${produto.nome} do ar`}
          aria-label={`Tirar ${produto.nome} do ar`}
        >
          ×
        </button>
      </header>

      <div className="pj-tags">
        <span className={`pj-tag${p.ticket !== produto.ticket ? ' pj-tag--mudado' : ''}`}>
          {money(p.ticket)}
          {p.ticket !== produto.ticket && <em> · tabela {money(produto.ticket)}</em>}
        </span>
        <span className={`pj-tag pj-tag--${produto.trilha}`}>{produto.trilha === 'gestao' ? 'Gestão' : 'Zigomático'}</span>
        <span className="pj-tag pj-tag--evt">otimiza por {evento}</span>
      </div>

      {/* objetivo: a alavanca mais cara da página inteira */}
      <div className="pj-seg" role="group" aria-label="Objetivo da campanha">
        {(['purchase', 'whatsapp'] as Objetivo[]).map((o) => {
          /* Sem checkout não há evento de compra para o Meta otimizar —
             oferecer Purchase aqui seria oferecer um erro. */
          const bloqueado = o === 'purchase' && candidatura;
          return (
            <button
              key={o}
              type="button"
              className={`pj-seg-btn${p.objetivo === o ? ' is-on' : ''}`}
              aria-pressed={p.objetivo === o}
              disabled={bloqueado}
              title={bloqueado ? 'Produto de candidatura: não há checkout para o Meta otimizar' : undefined}
              onClick={() => props.onEditar('objetivo', o)}
            >
              {o === 'purchase' ? 'Purchase' : 'WhatsApp'}
            </button>
          );
        })}
        {p.objetivo !== produto.objetivoPadrao && (
          <em className="pj-seg-aviso">
            padrão: {produto.objetivoPadrao === 'purchase' ? 'Purchase' : 'WhatsApp'}
          </em>
        )}
      </div>

      <div className={`pj-aprend${r.saiDaAprendizagem ? ' ok' : ' alerta'}`}>
        <b>{num(r.eventosPorSemana)}</b> {eventoPlural} por semana
        {r.saiDaAprendizagem ? (
          <> — sai da fase de aprendizagem (mínimo {CONVERSOES_APRENDIZAGEM}).</>
        ) : (
          <>
            {' '}— abaixo das {CONVERSOES_APRENDIZAGEM}: a campanha trava em
            {' '}<b>aprendizagem limitada</b>. Piso: {money(r.verbaMinimaMensal)}/mês.
          </>
        )}
      </div>

      <div className="pj-campos">
        <Campo
          rot="Preço do produto" valor={p.ticket} fmt={money} largo
          min={produto.precoMin} max={produto.precoMax} passo={produto.precoPasso}
          bruto={p.ticket}
          onChange={(v) => props.onEditar('ticket', v)}
          dica={`faixa da Greenn: ${r.banda.rotulo} (${pct(r.banda.min, 1)}–${pct(r.banda.max, 1)})`}
        />
        <Campo
          rot="Verba mensal" valor={r.verbaMensal} fmt={money} largo
          min={0.4} max={4} passo={0.05} bruto={props.fator}
          onChange={props.onFator}
          dica={`piso da aprendizagem: ${money(r.verbaMinimaMensal)}`}
        />
        <Campo
          rot="CPM" valor={p.cpm} fmt={money}
          min={15} max={120} passo={1} bruto={p.cpm}
          onChange={(v) => props.onEditar('cpm', v)}
        />
        <Campo
          rot="CTR do link" valor={p.ctr} fmt={(v) => pct(v, 2)}
          min={0.003} max={0.04} passo={0.001} bruto={p.ctr}
          onChange={(v) => props.onEditar('ctr', v)}
        />
        {whats ? (
          <>
            <Campo
              rot={`Custo por ${evento}`} valor={p.custoPorConversa} fmt={money}
              min={5} max={150} passo={1} bruto={p.custoPorConversa}
              onChange={(v) => props.onEditar('custoPorConversa', v)}
            />
            <Campo
              rot="Qualificação" valor={p.taxaQualificacao} fmt={(v) => pct(v, 0)}
              min={0.05} max={1} passo={0.01} bruto={p.taxaQualificacao}
              onChange={(v) => props.onEditar('taxaQualificacao', v)}
            />
            <Campo
              rot="Agendamento de call" valor={p.taxaAgendamento} fmt={(v) => pct(v, 0)}
              min={0.05} max={1} passo={0.01} bruto={p.taxaAgendamento}
              onChange={(v) => props.onEditar('taxaAgendamento', v)}
              dica={p.taxaAgendamento === 1 ? 'em 100% = venda no próprio chat, sem call' : undefined}
            />
            <Campo
              rot="Comparecimento" valor={p.taxaComparecimento} fmt={(v) => pct(v, 0)}
              min={0.2} max={1} passo={0.01} bruto={p.taxaComparecimento}
              onChange={(v) => props.onEditar('taxaComparecimento', v)}
            />
            <Campo
              rot="Fechamento" valor={p.taxaFechamento} fmt={(v) => pct(v, 0)}
              min={0.02} max={0.6} passo={0.01} bruto={p.taxaFechamento}
              onChange={(v) => props.onEditar('taxaFechamento', v)}
            />
          </>
        ) : (
          <Campo
            rot="Conversão da página" valor={p.convLP} fmt={(v) => pct(v, 2)}
            min={0.002} max={0.1} passo={0.001} bruto={p.convLP}
            onChange={(v) => props.onEditar('convLP', v)}
          />
        )}
        <Campo
          rot="Conjuntos de anúncios" valor={p.conjuntos} fmt={(v) => num(v)}
          min={1} max={6} passo={1} bruto={p.conjuntos}
          onChange={(v) => props.onEditar('conjuntos', v)}
          dica="cada conjunto precisa das próprias 50 conversões"
        />
      </div>

      <dl className="pj-out">
        <div><dt>Vendas / mês</dt><dd>{num(r.vendas, 1)}</dd></div>
        <div><dt>Receita</dt><dd>{money(r.receita)}</dd></div>
        <div><dt>CAC</dt><dd>{money(r.cac)}</dd></div>
        <div>
          <dt>ROAS</dt>
          <dd className={r.roas >= 1 ? 'ok' : 'ruim'}>{r.roas.toFixed(2)}×</dd>
        </div>
        <div>
          <dt>Resultado</dt>
          <dd className={r.lucro >= 0 ? 'ok' : 'ruim'}>{money(r.lucro)}</dd>
        </div>
        <div><dt>Custo por {evento}</dt><dd>{money(r.custoPorEvento)}</dd></div>
      </dl>

      {/* Diagnóstico, não decisão: fica recolhido quando há muitos cartões. */}
      <details className="pj-diag">
        <summary>Funil e guardrail</summary>
        <Funil etapas={etapas} />
        <p className={`pj-guard pj-guard--${r.guardrail}`}>
          Taxa clique → venda: <b>{pct(r.taxaImplicita, 2)}</b>.{' '}
          {r.guardrail === 'dentro' && (
            <>Dentro da banda da Greenn para {r.banda.rotulo} ({pct(r.banda.min, 1)}–{pct(r.banda.max, 1)}).</>
          )}
          {r.guardrail === 'acima' && (
            <>
              Acima da banda da Greenn para {r.banda.rotulo} ({pct(r.banda.min, 1)}–{pct(r.banda.max, 1)}).
              As premissas estão otimistas demais para este ticket.
            </>
          )}
          {r.guardrail === 'abaixo' && (
            <>
              Abaixo da banda da Greenn para {r.banda.rotulo} ({pct(r.banda.min, 1)}–{pct(r.banda.max, 1)}).
              Projeção conservadora — o benchmark sugere que dá para fazer melhor.
            </>
          )}
        </p>
      </details>
    </article>
  );
}

/* Um controle = slider + campo numérico espelhado. O slider serve para
   explorar rápido; o número, para cravar um valor exato na reunião. */
function Campo(props: {
  rot: string;
  valor: number;
  bruto: number;
  fmt: (v: number) => string;
  min: number;
  max: number;
  passo: number;
  onChange: (v: number) => void;
  dica?: string;
  /** Ocupa a linha inteira no layout compacto de 2 colunas. */
  largo?: boolean;
}) {
  return (
    <label className={`pj-campo${props.largo ? ' pj-campo--largo' : ''}`}>
      <span className="pj-campo-rot">
        {props.rot}
        <b>{props.fmt(props.valor)}</b>
      </span>
      <input
        type="range"
        min={props.min}
        max={props.max}
        step={props.passo}
        value={props.bruto}
        onChange={(e) => props.onChange(Number(e.target.value))}
      />
      {props.dica && <small>{props.dica}</small>}
    </label>
  );
}
