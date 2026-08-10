import { RESULTADOS } from './content';

/* ============================================================
   RESULTADOS · o dashboard da Clínica Felice em jan/2026.

   Os números são REAIS (print do sistema de gestão, pág. 14 do deck),
   mas a tela é RECRIADA em HTML/CSS + SVG na paleta da página, em vez
   de colar a captura do software — decisão do Leo em 10/08/2026.
   Mesma técnica do PlatformCarousel do Kit F4.

   ⚠️ Se os números mudarem, trocar em content.ts (RESULTADOS) — não
   invente valores: é dado de cliente.
   ============================================================ */

/* Geometria do gráfico (viewBox). O eixo Y vai de 0 a 700 (mil reais),
   como no dashboard original. */
const W = 520;
const H = 200;
const PAD_L = 44;
const PAD_B = 22;
const MAX_Y = 700;

function pontos(serie: number[]) {
  const passo = (W - PAD_L - 12) / (serie.length - 1);
  return serie
    .map((v, i) => {
      const x = PAD_L + i * passo;
      const y = H - PAD_B - (v / MAX_Y) * (H - PAD_B - 12);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(' ');
}

export function ConsultoriaResultados() {
  const realizados = pontos(RESULTADOS.serie.realizados);
  const aprovados = pontos(RESULTADOS.serie.aprovados);

  return (
    <section className="sec" id="resultados">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            Resultados previsíveis
          </span>
          <h2>
            O método rodando <span className="gold-grad">na nossa própria clínica</span>
          </h2>
          <p className="lead" style={{ margin: '0 auto' }}>
            {RESULTADOS.legenda}
          </p>
        </div>

        <div className="cons-dash reveal d1">
          {/* Barra de janela do sistema */}
          <div className="cons-dash-bar" aria-hidden="true">
            <span className="cons-dash-dot" />
            <span className="cons-dash-dot" />
            <span className="cons-dash-dot" />
            <span className="cons-dash-url">Dashboard · Clínica Felice</span>
          </div>

          <div className="cons-dash-body">
            <div className="cons-dash-periodo">
              <span className="cons-dash-lbl">Período</span>
              <span className="cons-dash-val">{RESULTADOS.periodo}</span>
            </div>

            {/* KPIs */}
            <div className="cons-dash-kpis">
              {RESULTADOS.kpis.map((k) => (
                <div className="cons-dash-kpi" key={k.label}>
                  <span>{k.label}</span>
                  <b>{k.valor}</b>
                </div>
              ))}
              <div className="cons-dash-kpi cons-dash-kpi--gold">
                <span>{RESULTADOS.conversao.label}</span>
                <b>{RESULTADOS.conversao.valor}</b>
              </div>
            </div>

            {/* Gráfico */}
            <div className="cons-dash-chart">
              <div className="cons-dash-chart-head">
                <h3>Orçamentos realizados x orçamentos aprovados</h3>
                <div className="cons-dash-legend">
                  <span className="cons-dash-leg cons-dash-leg--a">Realizados</span>
                  <span className="cons-dash-leg cons-dash-leg--b">Aprovados</span>
                </div>
              </div>

              <svg
                viewBox={`0 0 ${W} ${H}`}
                className="cons-dash-svg"
                role="img"
                aria-label={`Gráfico de orçamentos realizados e aprovados no período de ${RESULTADOS.periodo}. Taxa de conversão de ${RESULTADOS.conversao.valor}.`}
              >
                {/* Linhas de grade + rótulos do eixo Y */}
                {[0, 200, 400, 600].map((v) => {
                  const y = H - PAD_B - (v / MAX_Y) * (H - PAD_B - 12);
                  return (
                    <g key={v}>
                      <line
                        x1={PAD_L}
                        y1={y}
                        x2={W - 12}
                        y2={y}
                        stroke="currentColor"
                        strokeWidth="1"
                        className="cons-dash-grid"
                      />
                      <text x={PAD_L - 8} y={y + 3.5} textAnchor="end" className="cons-dash-axis">
                        {v === 0 ? '0' : `${v}k`}
                      </text>
                    </g>
                  );
                })}

                <polyline points={realizados} className="cons-dash-line cons-dash-line--a" />
                <polyline points={aprovados} className="cons-dash-line cons-dash-line--b" />

                {RESULTADOS.serie.realizados.map((_, i) => {
                  const [ax, ay] = realizados.split(' ')[i].split(',');
                  const [bx, by] = aprovados.split(' ')[i].split(',');
                  return (
                    <g key={i}>
                      <circle cx={ax} cy={ay} r="3.2" className="cons-dash-pt cons-dash-pt--a" />
                      <circle cx={bx} cy={by} r="3.2" className="cons-dash-pt cons-dash-pt--b" />
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>
        </div>

        <p className="cons-dash-fonte reveal d2">
          Dados do painel de gestão da Clínica Felice no período de {RESULTADOS.periodo}, recriados
          aqui na identidade da página. Resultados de uma clínica específica não são promessa de
          resultado para a sua.
        </p>
      </div>
    </section>
  );
}
