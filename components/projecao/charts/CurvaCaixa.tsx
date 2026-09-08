import type { MesCaixa } from '@/lib/projecao/model';

/* Caixa acumulado × verba acumulada, em SVG inline.

   viewBox fixo + width:100% no CSS = responsivo sem JS e sem biblioteca.
   O ponto do gráfico é mostrar a DEFASAGEM: a linha da verba sai na frente
   porque o anúncio se paga adiantado e o alto ticket fecha ~3 semanas
   depois. A distância entre as duas linhas no mês 1 é o capital de giro. */

const W = 720;
const H = 260;
const PAD = { t: 18, r: 16, b: 30, l: 58 };

export function CurvaCaixa({ meses }: { meses: MesCaixa[] }) {
  if (meses.length === 0) return null;

  const maxY = Math.max(...meses.map((m) => Math.max(m.verbaAcum, m.receitaAcum))) || 1;
  const innerW = W - PAD.l - PAD.r;
  const innerH = H - PAD.t - PAD.b;

  const x = (i: number) => PAD.l + (meses.length === 1 ? 0 : (i / (meses.length - 1)) * innerW);
  const y = (v: number) => PAD.t + innerH - (v / maxY) * innerH;

  const linha = (sel: (m: MesCaixa) => number) =>
    meses.map((m, i) => `${x(i).toFixed(1)},${y(sel(m)).toFixed(1)}`).join(' ');

  /* Área entre as duas curvas: o lucro acumulado, preenchido em dourado. */
  const area = [
    ...meses.map((m, i) => `${x(i).toFixed(1)},${y(m.receitaAcum).toFixed(1)}`),
    ...[...meses].reverse().map((m, i) => {
      const idx = meses.length - 1 - i;
      return `${x(idx).toFixed(1)},${y(m.verbaAcum).toFixed(1)}`;
    }),
  ].join(' ');

  const fmt = (v: number) => `${Math.round(v / 1000)}k`;

  return (
    <figure className="pj-curva">
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Receita e verba acumuladas em 6 meses">
        {/* grid horizontal */}
        {[0, 0.25, 0.5, 0.75, 1].map((f) => (
          <g key={f}>
            <line
              x1={PAD.l} x2={W - PAD.r}
              y1={y(maxY * f)} y2={y(maxY * f)}
              className="pj-curva-grid"
            />
            <text x={PAD.l - 10} y={y(maxY * f) + 4} className="pj-curva-ylab">
              {fmt(maxY * f)}
            </text>
          </g>
        ))}

        <polygon points={area} className="pj-curva-area" />
        <polyline points={linha((m) => m.verbaAcum)} className="pj-curva-verba" />
        <polyline points={linha((m) => m.receitaAcum)} className="pj-curva-receita" />

        {meses.map((m, i) => (
          <g key={m.mes}>
            <circle cx={x(i)} cy={y(m.receitaAcum)} r={3.5} className="pj-curva-pt" />
            <text x={x(i)} y={H - 10} className="pj-curva-xlab">
              {`M${m.mes}`}
            </text>
          </g>
        ))}
      </svg>
      <figcaption className="pj-curva-leg">
        <span><i className="pj-line pj-line--receita" aria-hidden="true" /> Receita acumulada</span>
        <span><i className="pj-line pj-line--verba" aria-hidden="true" /> Verba acumulada</span>
      </figcaption>
    </figure>
  );
}
