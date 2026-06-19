'use client';

import { usePersistentState } from '../usePersistentState';

type Props = { id: string; title: string; items: string[] };

/** Checklist marcável com persistência local e contador. */
export function Checklist({ id, title, items }: Props) {
  const [checked, setChecked] = usePersistentState<Record<number, boolean>>(`checklist:${id}`, {});
  const doneCount = items.reduce((n, _, i) => n + (checked[i] ? 1 : 0), 0);

  const toggle = (i: number) => setChecked((c) => ({ ...c, [i]: !c[i] }));
  const reset = () => setChecked({});

  return (
    <div className="kit-checklist">
      <div className="kit-checklist-head">
        <h4>{title}</h4>
        <span className="kit-checklist-count">
          {doneCount}/{items.length}
        </span>
      </div>
      <ul>
        {items.map((item, i) => (
          <li key={i}>
            <label className={checked[i] ? 'is-checked' : undefined}>
              <input type="checkbox" checked={!!checked[i]} onChange={() => toggle(i)} />
              <span className="kit-check-box" aria-hidden="true" />
              <span>{item}</span>
            </label>
          </li>
        ))}
      </ul>
      {doneCount > 0 && (
        <button type="button" className="kit-link-btn" onClick={reset}>
          Limpar marcações
        </button>
      )}
    </div>
  );
}
