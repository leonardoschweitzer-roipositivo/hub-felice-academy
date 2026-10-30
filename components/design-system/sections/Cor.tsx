import { Secao, Sub } from '../ui/Secao';
import { CopyToken } from '../ui/CopyToken';
import { Validar } from '../ui/Selo';
import {
  CORES_BASE, CORES_NAO_USAR, CORES_OURO, CORES_SEM_TOKEN, CORES_TEXTO,
  GRADIENTE_OURO, PARES_CONTRASTE, PROPORCAO, contraste, type Cor as CorT,
} from '../content';

function Grupo({ titulo, cores }: { titulo: string; cores: CorT[] }) {
  return (
    <>
      <Sub>{titulo}</Sub>
      <div className="ds-swatches">
        {cores.map((c) => (
          <div className="ds-swatch" key={c.token}>
            <div className="ds-swatch-chip" style={{ background: `var(${c.token})` }} />
            <b>{c.nome}</b>
            <CopyToken valor={c.hex} />
            <code>{c.token}</code>
            <small>{c.uso}</small>
          </div>
        ))}
      </div>
    </>
  );
}

export function Cor() {
  return (
    <Secao
      id="cor"
      n="03"
      titulo="Cor"
      lead="Preto fosco, ouro e creme. As amostras abaixo usam var(--token), então mostram o valor real do CSS. Clique no hex para copiar."
    >
      <Grupo titulo="Fundos" cores={CORES_BASE} />
      <Grupo titulo="Ouro" cores={CORES_OURO} />
      <div className="ds-grad" style={{ background: GRADIENTE_OURO }}>
        <span>--grad-gold</span>
        <CopyToken valor={GRADIENTE_OURO} rotulo="Copiar gradiente" className="ds-copy--sm" />
      </div>
      <Grupo titulo="Texto" cores={CORES_TEXTO} />

      <Sub>Canon sem token <Validar /></Sub>
      <p className="ds-mut">Valores que o site usa mas que ainda não viraram variável. Em código novo, use o literal abaixo.</p>
      <div className="ds-swatches">
        {CORES_SEM_TOKEN.map((c) => (
          <div className="ds-swatch" key={c.hex}>
            <div className="ds-swatch-chip" style={{ background: c.hex }} />
            <b>{c.nome}</b>
            <CopyToken valor={c.hex} />
            <small>{c.uso}</small>
          </div>
        ))}
      </div>
      <p className="ds-mut">
        Dourado translúcido: use <code>rgba(232,180,71,.08)</code>, <code>.12</code> ou <code>.16</code>. Linhas: <code>--line</code> (ouro 16%) e <code>--line-soft</code> (branco 7%).
      </p>
      <p className="ds-mut">
        Não usar em código novo (variações antigas de texto sobre ouro):{' '}
        {CORES_NAO_USAR.map((h) => <code key={h} className="ds-strike">{h}</code>)}
      </p>

      <Sub>Proporção de referência <Validar /></Sub>
      <div className="ds-prop">
        {PROPORCAO.map((p) => (
          <div key={p.t} style={{ flex: p.pct, background: p.cor, border: p.borda ? '1px solid var(--line-soft)' : 'none' }}>
            <span style={{ color: p.cor === '#e8b447' || p.cor === '#f4efe4' ? '#231701' : '#f4efe4' }}>{p.pct}% {p.t}</span>
          </div>
        ))}
      </div>

      <Sub>Contraste (WCAG)</Sub>
      <p className="ds-mut">Calculado a partir dos valores. Abaixo de 4,5:1 vale só para texto grande (18px+ ou 14px em negrito).</p>
      <div className="ds-contrast">
        {PARES_CONTRASTE.map((p) => {
          const r = contraste(p.fg, p.bg);
          const ok = r >= 4.5;
          return (
            <div key={p.t} className="ds-contrast-row">
              <span className="ds-contrast-chip" style={{ background: p.bg, color: p.fg }}>Aa</span>
              <b>{p.t}</b>
              <span className={ok ? 'is-ok' : 'is-warn'}>{r.toFixed(1)}:1 · {ok ? 'texto normal' : 'só texto grande'}</span>
            </div>
          );
        })}
      </div>

      <div className="ds-card ds-card--no">
        <span className="eyebrow">Fora da marca</span>
        <p>
          As cores de pilar da plataforma do aluno (<code>#5BC6B8</code>, <code>#B98AE6</code>, <code>#E8825A</code>) pertencem só à área logada.
          Não vão para landing nem para Instagram.
        </p>
      </div>
    </Secao>
  );
}
