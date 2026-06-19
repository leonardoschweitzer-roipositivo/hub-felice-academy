'use client';

import { useState } from 'react';
import { RESPONSIBILITY_MATRIX } from '../content/popRoles';

type Col = 'asb' | 'tsb' | 'enfermagem';
const COLS: { key: Col; label: string }[] = [
  { key: 'asb', label: 'ASB' },
  { key: 'tsb', label: 'TSB' },
  { key: 'enfermagem', label: 'Enfermagem' },
];

/** Matriz de responsabilidades ASB × TSB × Enfermagem, com filtro por cargo. */
export function ResponsibilityMatrix() {
  const [filter, setFilter] = useState<Col | 'todos'>('todos');
  const rows =
    filter === 'todos' ? RESPONSIBILITY_MATRIX : RESPONSIBILITY_MATRIX.filter((r) => r[filter]);

  return (
    <div className="kit-matrix">
      <div className="kit-matrix-filter">
        <button type="button" className={filter === 'todos' ? 'is-active' : ''} onClick={() => setFilter('todos')}>
          Todos
        </button>
        {COLS.map((c) => (
          <button key={c.key} type="button" className={filter === c.key ? 'is-active' : ''} onClick={() => setFilter(c.key)}>
            {c.label}
          </button>
        ))}
      </div>

      <table className="kit-matrix-table">
        <thead>
          <tr>
            <th scope="col">Atividade</th>
            {COLS.map((c) => (
              <th scope="col" key={c.key}>
                {c.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.atividade}>
              <th scope="row">{r.atividade}</th>
              {COLS.map((c) => (
                <td key={c.key} className={r[c.key] ? 'is-yes' : 'is-no'}>
                  {r[c.key] ? '✓' : '—'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
