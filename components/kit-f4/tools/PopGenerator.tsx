'use client';

import { useState } from 'react';
import { POP_ROLES } from '../content/popRoles';

/** Gera um POP personalizado (clínica + responsável) pronto para imprimir/assinar. */
export function PopGenerator() {
  const [clinica, setClinica] = useState('');
  const [responsavel, setResponsavel] = useState('');
  const [roleId, setRoleId] = useState(POP_ROLES[0].id);
  const role = POP_ROLES.find((r) => r.id === roleId) ?? POP_ROLES[0];

  return (
    <div className="kit-popgen">
      <div className="kit-popgen-form no-print">
        <label>
          Nome da clínica
          <input value={clinica} onChange={(e) => setClinica(e.target.value)} placeholder="Felice Odontologia" />
        </label>
        <label>
          Responsável (Diretor Clínico)
          <input value={responsavel} onChange={(e) => setResponsavel(e.target.value)} placeholder="Dr. Sócrates Tavares" />
        </label>
        <label>
          Cargo
          <select value={roleId} onChange={(e) => setRoleId(e.target.value)}>
            {POP_ROLES.map((r) => (
              <option key={r.id} value={r.id}>
                {r.cargo}
              </option>
            ))}
          </select>
        </label>
        <button type="button" className="btn btn-primary" onClick={() => window.print()}>
          Imprimir / Salvar PDF
        </button>
      </div>

      <div className="kit-popgen-doc">
        <header className="kit-popgen-doc-head">
          <p className="kit-popgen-clinica">{clinica || 'Nome da clínica'}</p>
          <h4>Procedimento Operacional Padrão</h4>
          <p className="kit-popgen-cargo">Cargo: {role.cargo}</p>
        </header>
        {role.blocos.map((b, i) => (
          <div key={i} className="kit-popgen-bloco">
            <h5>
              {i + 1}. {b.titulo}
            </h5>
            <ul>
              {b.itens.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
        <div className="kit-popgen-sign">
          <div>
            <span className="kit-popgen-line" />
            Colaborador(a)
          </div>
          <div>
            <span className="kit-popgen-line" />
            {responsavel || 'Responsável'} — Diretor Clínico
          </div>
        </div>
      </div>
    </div>
  );
}
