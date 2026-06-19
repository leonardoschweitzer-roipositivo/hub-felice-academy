'use client';

import type { DocSection } from './content/types';

type Props = {
  sections: Pick<DocSection, 'id' | 'title'>[];
  activeId: string;
  percent: number;
  done: boolean;
  onToggleDone: () => void;
  /** fecha o drawer no mobile após clicar (opcional) */
  onNavigate?: () => void;
};

/** Índice navegável + scroll-spy + progresso do documento. */
export function DocSidebar({ sections, activeId, percent, done, onToggleDone, onNavigate }: Props) {
  return (
    <nav className="kit-toc" aria-label="Índice do documento">
      <div className="kit-toc-head">
        <span className="eyebrow">Neste documento</span>
        <div className="kit-toc-progress">
          <div className="kit-toc-progress-bar">
            <span style={{ width: `${percent}%` }} />
          </div>
          <span className="kit-toc-progress-num">{percent}%</span>
        </div>
      </div>

      <ol>
        {sections.map((s, i) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className={s.id === activeId ? 'is-active' : undefined}
              aria-current={s.id === activeId ? 'true' : undefined}
              onClick={onNavigate}
            >
              <span className="kit-toc-num">{String(i + 1).padStart(2, '0')}</span>
              <span>{s.title}</span>
            </a>
          </li>
        ))}
      </ol>

      <button type="button" className={`kit-toc-done${done ? ' is-done' : ''}`} onClick={onToggleDone}>
        {done ? '✓ Concluído' : 'Marcar como concluído'}
      </button>
    </nav>
  );
}
