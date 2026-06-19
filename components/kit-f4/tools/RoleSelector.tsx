'use client';

import { useState } from 'react';
import { POP_ROLES } from '../content/popRoles';

/** Seletor de cargo: escolhe um cargo e mostra o POP correspondente. */
export function RoleSelector() {
  const [activeId, setActiveId] = useState(POP_ROLES[0].id);
  const role = POP_ROLES.find((r) => r.id === activeId) ?? POP_ROLES[0];

  return (
    <div className="kit-roles">
      <div className="kit-roles-tabs" role="tablist" aria-label="Cargos">
        {POP_ROLES.map((r) => (
          <button
            key={r.id}
            type="button"
            role="tab"
            aria-selected={r.id === activeId}
            className={`kit-roles-tab${r.id === activeId ? ' is-active' : ''}`}
            onClick={() => setActiveId(r.id)}
          >
            {r.cargo}
          </button>
        ))}
      </div>

      <div className="kit-roles-panel" role="tabpanel">
        <h3>{role.cargo}</h3>
        <p className="kit-roles-resumo">{role.resumo}</p>
        {role.blocos.map((b, i) => (
          <div className="kit-roles-bloco" key={i}>
            <h4>{b.titulo}</h4>
            <ul>
              {b.itens.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
