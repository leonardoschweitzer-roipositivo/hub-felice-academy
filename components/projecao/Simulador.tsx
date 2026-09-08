'use client';

import { useState } from 'react';

import {
  projetar,
  fluxoDeCaixa,
  calcularEscada,
  taxaConversaVenda,
  CONVERSOES_APRENDIZAGEM,
  type Premissas,
  type ProdutoId,
  type Resultado,
  type TaxasEscada,
} from '@/lib/projecao/model';
import {
  PRODUTOS, CENARIOS, PREMISSAS, ESCADA, CICLO_ESCADA_DIAS, money, pct, num,
  type CenarioId,
} from '@/lib/projecao/premissas';
import { Funil, type EtapaFunil } from './charts/Funil';
import { BarraAlocacao } from './charts/BarraAlocacao';
import { CurvaCaixa } from './charts/CurvaCaixa';
import { SIMULADOR, ESCADA_TXT } from './content';

/* ============================================================
   O simulador. Único componente com estado da página inteira.

   Duas decisões que evitam `useEffect` — e, com ele, toda uma classe de
   bug de sincronização:

   1) A verba é guardada como FATOR do piso, não em reais. Assim, mexer no
      CPM ou no nº de conjuntos move o piso E a verba junto, sozinho. Se
      fosse valor absoluto, seria preciso "reajustar" a verba a cada
      mudança de premissa — exatamente o que exigiria um efeito.
   2) Todo o resto é derivado no render por `projetar()`. Nada de resultado
      em estado: não há como a tela discordar da conta.
   ============================================================ */

type Estado = Record<ProdutoId, Premissas>;
type Fatores = Record<ProdutoId, number>;
type Ativos = Record<ProdutoId, boolean>;

const FATOR_INICIAL: Fatores = { 'kit-f4': 1, maestria: 1, mentoria: 1 };

const TICKETS: Record<ProdutoId, number> = { 'kit-f4': 97, maestria: 997, mentoria: 15000 };

function clonar(cen: CenarioId): Estado {
  return {
    'kit-f4': { ...PREMISSAS[cen]['kit-f4'] },
    maestria: { ...PREMISSAS[cen].maestria },
    mentoria: { ...PREMISSAS[cen].mentoria },
  };
}

export function Simulador() {
  const [cenario, setCenario] = useState<CenarioId>('realista');
  const [prem, setPrem] = useState<Estado>(() => clonar('realista'));
  const [fatores, setFatores] = useState<Fatores>(FATOR_INICIAL);
  const [ativos, setAtivos] = useState<Ativos>({ 'kit-f4': true, maestria: true, mentoria: true });
  const [escada, setEscada] = useState<TaxasEscada>(() => ({ ...ESCADA.realista }));

  function trocarCenario(id: CenarioId) {
    setCenario(id);
    setPrem(clonar(id));
    setFatores(FATOR_INICIAL);
    setEscada({ ...ESCADA[id] });
  }

  function editar(id: ProdutoId, campo: keyof Premissas, valor: number) {
    setPrem((s) => ({ ...s, [id]: { ...s[id], [campo]: valor } }));
  }

  const resultados = PRODUTOS.map((p) => {
    const premissas = prem[p.id];
    const piso = projetar(premissas).verbaMinimaMensal;
    return { produto: p, premissas, resultado: projetar(premissas, piso * fatores[p.id]) };
  });

  const ligados = resultados.filter((r) => ativos[r.produto.id]);
  const verbaTotal = ligados.reduce((a, r) => a + r.resultado.verbaMensal, 0);

  /* Produto desligado entra na escada com zero venda — assim dá para ver o
     que a base do Kit alimenta nos degraus de cima simplesmente desligando
     o Kit e olhando a Mentoria cair. */
  const vendasDiretas = {
    'kit-f4': ativos['kit-f4'] ? resultados[0].resultado.vendas : 0,
    maestria: ativos.maestria ? resultados[1].resultado.vendas : 0,
    mentoria: ativos.mentoria ? resultados[2].resultado.vendas : 0,
  } as Record<ProdutoId, number>;

  const esc = calcularEscada(vendasDiretas, TICKETS, escada);
  const receitaTotal = esc.receitaTotal;

  const caixa = fluxoDeCaixa(
    [
      ...ligados.map((r) => ({ resultado: r.resultado, cicloDias: r.premissas.cicloDias })),
      /* A receita da escada entra como uma linha própria, com ciclo bem mais
         longo: nutrir e fechar o degrau de cima leva cerca de 60 dias. */
      {
        resultado: { ...resultados[0].resultado, verbaMensal: 0, receita: esc.receitaCruzada },
        cicloDias: CICLO_ESCADA_DIAS,
      },
    ],
    6,
  );

  const cacKit = resultados[0].resultado.cac;

  return (
    <section className="sec pj-sim" id="simulador">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">{SIMULADOR.eyebrow}</span>
          <h2>{SIMULADOR.h2}</h2>
          <p className="lead">{SIMULADOR.lead}</p>
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
              fatias={ligados.map((r) => ({
                id: r.produto.id,
                nome: r.produto.nome,
                valor: r.resultado.verbaMensal,
                rotulo: money(r.resultado.verbaMensal),
              }))}
            />
          )}
        </div>

        {/* ---------- um cartão por produto ---------- */}
        <div className="pj-grid">
          {resultados.map(({ produto, premissas, resultado }) => (
            <CartaoProduto
              key={produto.id}
              nome={produto.nome}
              papel={produto.papel}
              ticket={produto.ticket}
              objetivo={premissas.objetivo}
              premissas={premissas}
              resultado={resultado}
              ativo={ativos[produto.id]}
              fator={fatores[produto.id]}
              onAtivo={(v) => setAtivos((s) => ({ ...s, [produto.id]: v }))}
              onFator={(v) => setFatores((s) => ({ ...s, [produto.id]: v }))}
              onEditar={(campo, valor) => editar(produto.id, campo, valor)}
            />
          ))}
        </div>

        {/* ---------- escada de produtos ---------- */}
        <div className="pj-escada">
          <div className="pj-escada-head">
            <span className="eyebrow">{ESCADA_TXT.eyebrow}</span>
            <h3>{ESCADA_TXT.h2}</h3>
            <p className="pj-nota">{ESCADA_TXT.lead}</p>
            <ul className="pj-degraus">
              {ESCADA_TXT.degraus.map((d) => (
                <li key={`${d.de}-${d.para}`}>
                  <span className="pj-degrau-de">{d.de}</span>
                  <span className="pj-degrau-seta" aria-hidden="true">→</span>
                  <span className="pj-degrau-para">{d.para}</span>
                  <small>{d.nota}</small>
                </li>
              ))}
            </ul>
          </div>

          <div className="pj-escada-body">
            <div className="pj-escada-campos">
              <Campo
                rot="Kit F4 → Maestria" valor={escada.kitParaMaestria} fmt={(v) => pct(v, 1)}
                min={0} max={0.25} passo={0.005} bruto={escada.kitParaMaestria}
                onChange={(v) => setEscada((e) => ({ ...e, kitParaMaestria: v }))}
                dica={`${num(esc.kitParaMaestria, 1)} vendas/mês`}
              />
              <Campo
                rot="Kit F4 → Mentoria" valor={escada.kitParaMentoria} fmt={(v) => pct(v, 1)}
                min={0} max={0.08} passo={0.002} bruto={escada.kitParaMentoria}
                onChange={(v) => setEscada((e) => ({ ...e, kitParaMentoria: v }))}
                dica={`${num(esc.kitParaMentoria, 1)} vendas/mês · só quem não subiu à Maestria`}
              />
              <Campo
                rot="Maestria → Mentoria" valor={escada.maestriaParaMentoria} fmt={(v) => pct(v, 1)}
                min={0} max={0.3} passo={0.005} bruto={escada.maestriaParaMentoria}
                onChange={(v) => setEscada((e) => ({ ...e, maestriaParaMentoria: v }))}
                dica={`${num(esc.maestriaParaMentoria, 1)} vendas/mês`}
              />
            </div>

            <div className="pj-escada-saida">
              <div className="pj-escada-ltv">
                <span>Valor de um comprador do Kit F4</span>
                <b>{money(esc.ltvKit)}</b>
                <small>
                  contra um CAC de {money(cacKit)} ·{' '}
                  <strong className={esc.ltvKit / cacKit >= 3 ? 'forte' : 'fraco'}>
                    LTV:CAC {cacKit > 0 ? (esc.ltvKit / cacKit).toFixed(2) : '—'}
                  </strong>{' '}
                  {esc.ltvKit / cacKit >= 3 ? '(meta ≥ 3 atingida)' : '(meta é ≥ 3)'}
                </small>
              </div>

              <dl className="pj-out pj-out--escada">
                <div><dt>Receita direta</dt><dd>{money(esc.receitaDireta)}</dd></div>
                <div><dt>Receita da escada</dt><dd className="forte">{money(esc.receitaCruzada)}</dd></div>
                <div>
                  <dt>Mentorias no mês</dt>
                  <dd>
                    {num(esc.mentoriaTotal, 1)}
                    <em>
                      {' '}de {num(vendasDiretas.mentoria, 1)} diretas
                    </em>
                  </dd>
                </div>
              </dl>
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
            fechamento de cada produto. A faixa entre as duas linhas é o resultado acumulado —
            e a distância no mês 1 é o capital de giro que precisa existir antes de começar.
          </p>
          <CurvaCaixa meses={caixa} />
        </div>
      </div>
    </section>
  );
}

/* ============================================================ */

function CartaoProduto(props: {
  nome: string;
  papel: string;
  ticket: number;
  objetivo: Premissas['objetivo'];
  premissas: Premissas;
  resultado: Resultado;
  ativo: boolean;
  fator: number;
  onAtivo: (v: boolean) => void;
  onFator: (v: number) => void;
  onEditar: (campo: keyof Premissas, valor: number) => void;
}) {
  const { premissas: p, resultado: r, objetivo } = props;
  const whats = objetivo === 'whatsapp';

  const etapas: EtapaFunil[] = whats
    ? [
        { rotulo: 'Cliques no anúncio', valor: num(r.cliques), fracao: 1 },
        {
          rotulo: 'Conversas iniciadas', valor: num(r.eventosOtimizados), fracao: r.eventosOtimizados / r.cliques,
          passagem: `${pct(r.eventosOtimizados / r.cliques)} dos cliques`,
        },
        {
          rotulo: 'Leads qualificados', valor: num(r.eventosOtimizados * p.taxaQualificacao),
          fracao: (r.eventosOtimizados * p.taxaQualificacao) / r.cliques,
          passagem: `${pct(p.taxaQualificacao, 0)} das conversas`,
        },
        {
          rotulo: 'Vendas', valor: num(r.vendas, 1), fracao: r.vendas / r.cliques,
          passagem: `${pct(taxaConversaVenda(p))} das conversas`,
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
    <article className={`pj-card${props.ativo ? '' : ' is-off'}`}>
      <header className="pj-card-head">
        <div>
          <h3>{props.nome}</h3>
          <p className="pj-papel">{props.papel}</p>
        </div>
        <label className="pj-toggle">
          <input
            type="checkbox"
            checked={props.ativo}
            onChange={(e) => props.onAtivo(e.target.checked)}
          />
          <span>{props.ativo ? 'no ar' : 'fora'}</span>
        </label>
      </header>

      <div className="pj-tags">
        <span className="pj-tag">{money(props.ticket)}</span>
        <span className={`pj-tag pj-tag--${objetivo}`}>
          {whats ? 'objetivo: WhatsApp' : 'objetivo: Purchase'}
        </span>
        <span className="pj-tag pj-tag--evt">
          otimiza por {whats ? 'conversa iniciada' : 'compra'}
        </span>
      </div>

      {/* aviso de aprendizagem */}
      <div className={`pj-aprend${r.saiDaAprendizagem ? ' ok' : ' alerta'}`}>
        <b>{num(r.eventosPorSemana)}</b> {whats ? 'conversas' : 'compras'} por semana
        {r.saiDaAprendizagem ? (
          <> — sai da fase de aprendizagem (mínimo {CONVERSOES_APRENDIZAGEM}).</>
        ) : (
          <>
            {' '}— abaixo das {CONVERSOES_APRENDIZAGEM}: a campanha trava em
            {' '}<b>aprendizagem limitada</b>. Piso: {money(r.verbaMinimaMensal)}/mês.
          </>
        )}
      </div>

      {/* controles */}
      <div className="pj-campos">
        <Campo
          rot="Verba mensal" valor={r.verbaMensal} fmt={money}
          min={0.4} max={4} passo={0.05} bruto={props.fator}
          onChange={props.onFator}
          dica={`piso da aprendizagem: ${money(r.verbaMinimaMensal)}`}
        />
        <Campo
          rot="CPM" valor={p.cpm} fmt={(v) => money(v)}
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
              rot="Custo por conversa" valor={p.custoPorConversa} fmt={money}
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

      <Funil etapas={etapas} />

      {/* saída */}
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
        <div><dt>Custo por {whats ? 'conversa' : 'compra'}</dt><dd>{money(r.custoPorEvento)}</dd></div>
      </dl>

      {/* guardrail contra a banda da Greenn */}
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
}) {
  return (
    <label className="pj-campo">
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
