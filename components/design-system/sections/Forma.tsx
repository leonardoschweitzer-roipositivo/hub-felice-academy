import { Secao, Sub } from '../ui/Secao';
import { Validar } from '../ui/Selo';
import { BREAKPOINTS, ESPACOS, MOVIMENTO, RAIOS, SOMBRAS } from '../content';

export function Forma() {
  return (
    <Secao id="forma" n="05" titulo="Forma, espaço e movimento" lead="O que dá o ar da marca além de cor e fonte: cantos, sombras, fundos e ritmo.">
      <Sub>Raios</Sub>
      <div className="ds-grid ds-grid--4">
        {RAIOS.map((r) => (
          <div className="ds-card" key={r.px}>
            <div className="ds-raio" style={{ borderRadius: r.px }} />
            <b>{r.px}</b><code>{r.t}</code><small>{r.uso}</small>
          </div>
        ))}
      </div>

      <Sub>Espaçamento <Validar /></Sub>
      <p className="ds-mut">Escala para código novo: 8, 12, 16, 24, 32 e 48px. Entre seções use <code>.sec</code>; nas laterais, <code>--pad</code>. Largura máxima <code>--maxw</code> = 1140px.</p>
      <div className="ds-espacos">
        {ESPACOS.map((e) => (
          <div key={e}><span style={{ width: e, height: e }} /><small>{e}</small></div>
        ))}
      </div>

      <Sub>Sombras</Sub>
      <div className="ds-grid ds-grid--3">
        {SOMBRAS.map((s) => (
          <div key={s.t} className="ds-sombra" style={{ boxShadow: s.css }}>
            <b>{s.t}</b><small>{s.uso}</small>
          </div>
        ))}
      </div>

      <Sub>Fundos recorrentes</Sub>
      <div className="ds-grid ds-grid--4">
        <div className="ds-fundo ds-fundo--pontos"><small>Grade de pontos · 26px</small></div>
        <div className="ds-fundo ds-fundo--brilho"><small>Brilho dourado</small></div>
        <div className="ds-fundo ds-fundo--alterna"><small>Seção alternada</small></div>
        <div className="ds-fundo ds-fundo--ouro"><small>Superfície dourada</small></div>
      </div>
      <div className="divider" style={{ margin: '24px 0 6px' }} />
      <small className="ds-mut">Divisor: <code>.divider</code></small>

      <Sub>Breakpoints <Validar /></Sub>
      <p className="ds-mut">O site tem cerca de 19 larguras de corte diferentes. Em código novo, use só estas três, desktop primeiro (<code>max-width</code>).</p>
      <div className="ds-table-wrap">
        <table className="ds-table">
          <tbody>
            {BREAKPOINTS.map((b) => (
              <tr key={b.px}><td><b>{b.px}px</b></td><td>{b.uso}</td></tr>
            ))}
          </tbody>
        </table>
      </div>

      <Sub>Movimento</Sub>
      <div className="ds-table-wrap">
        <table className="ds-table">
          <tbody>
            {MOVIMENTO.map((m) => (
              <tr key={m.t}><td><b>{m.t}</b></td><td>{m.v}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </Secao>
  );
}
