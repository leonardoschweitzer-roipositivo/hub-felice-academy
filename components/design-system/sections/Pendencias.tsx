import { Secao } from '../ui/Secao';
import { PENDENCIAS } from '../content';

export function Pendencias() {
  return (
    <Secao
      id="pendencias"
      n="11"
      titulo="Pendências"
      lead="O que o repositório não responde. Cada item precisa de um responsável antes de virar regra."
    >
      <div className="ds-table-wrap">
        <table className="ds-table">
          <thead><tr><th>Item</th><th>Situação</th><th>Responsável</th></tr></thead>
          <tbody>
            {PENDENCIAS.map((p) => (
              <tr key={p.t}><td><b>{p.t}</b></td><td>{p.d}</td><td className="ds-mut">a definir</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </Secao>
  );
}
