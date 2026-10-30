import { Secao, Sub } from '../ui/Secao';
import { ESCADAS, PRODUTOS } from '../content';

export function Marca() {
  return (
    <Secao
      id="marca"
      n="01"
      titulo="Marca"
      lead="A Felice Academy é a escola do Dr. Sócrates Tavares, cirurgião-dentista, para dentistas e donos de clínica odontológica."
    >
      <div className="ds-grid ds-grid--3">
        <div className="ds-card">
          <span className="eyebrow">Promessa</span>
          <p className="ds-big">O ecossistema para sua clínica sair do improviso e escalar de verdade.</p>
        </div>
        <div className="ds-card">
          <span className="eyebrow">Duas frentes</span>
          <p><b>CLÍNICA:</b> implantes zigomáticos e maxila atrófica.</p>
          <p><b>NEGÓCIO:</b> gestão, atendimento, comercial e marketing da clínica.</p>
        </div>
        <div className="ds-card">
          <span className="eyebrow">Público</span>
          <p>Donos de clínica (gestão) e cirurgiões ou implantodontistas (zigomático).</p>
          <p className="ds-mut">Estudantes e outras áreas da saúde não são público.</p>
        </div>
      </div>

      <Sub>Catálogo e grafia oficial</Sub>
      <div className="ds-table-wrap">
        <table className="ds-table">
          <thead><tr><th>Produto (grafia oficial)</th><th>Frente</th><th>Tipo</th><th>Preço público</th></tr></thead>
          <tbody>
            {PRODUTOS.map((p) => (
              <tr key={p.nome}>
                <td><b>{p.nome}</b><small>{p.rota}</small></td>
                <td>{p.frente}</td>
                <td>{p.tipo}</td>
                <td className={p.preco === 'Nunca publicar' ? 'is-no' : ''}>{p.preco}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="ds-mut">Nenhum produto tem cor própria. Eles se diferenciam por foto e texto.</p>

      <Sub>Escadas de produto</Sub>
      <div className="ds-grid ds-grid--2">
        {ESCADAS.map((e) => (
          <div className="ds-card" key={e.frente}>
            <span className="eyebrow">{e.frente}</span>
            <ol className="ds-steps">
              {e.passos.map((p) => <li key={p}>{p}</li>)}
            </ol>
          </div>
        ))}
      </div>
    </Secao>
  );
}
