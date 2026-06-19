import Link from 'next/link';
import { getPrevNext } from './content';
import type { DocId } from './content/types';

/** Navegação anterior/próximo entre os documentos do Kit. */
export function DocPrevNext({ docId }: { docId: DocId }) {
  const { prev, next } = getPrevNext(docId);
  return (
    <nav className="kit-prevnext" aria-label="Navegação entre documentos">
      {prev ? (
        <Link href={prev.href} className="kit-prevnext-link kit-prevnext-prev">
          <span className="kit-prevnext-dir">← Anterior</span>
          <span className="kit-prevnext-title">{prev.title}</span>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link href={next.href} className="kit-prevnext-link kit-prevnext-next">
          <span className="kit-prevnext-dir">Próximo →</span>
          <span className="kit-prevnext-title">{next.title}</span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
