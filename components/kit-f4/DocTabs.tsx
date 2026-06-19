import Link from 'next/link';
import { DOC_META, DOC_ORDER } from './content';
import type { DocId } from './content/types';

/** Menu de navegação no topo para acessar os 4 documentos do Kit. */
export function DocTabs({ current }: { current: DocId }) {
  return (
    <nav className="kit-doctabs" aria-label="Documentos do Kit F4">
      {DOC_ORDER.map((id) => {
        const doc = DOC_META[id];
        const active = id === current;
        return (
          <Link
            key={id}
            href={doc.href}
            className={`kit-doctab${active ? ' is-active' : ''}`}
            aria-current={active ? 'page' : undefined}
          >
            <span className="kit-doctab-num">{doc.num}</span>
            <span className="kit-doctab-label">{doc.categoria}</span>
          </Link>
        );
      })}
    </nav>
  );
}
