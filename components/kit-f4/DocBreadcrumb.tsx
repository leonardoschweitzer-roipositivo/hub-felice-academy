import Link from 'next/link';
import { KIT_BASE } from './content';

/** HUB › Kit F4 › [Documento] */
export function DocBreadcrumb({ docTitle }: { docTitle: string }) {
  return (
    <nav className="kit-breadcrumb wrap" aria-label="Trilha de navegação">
      <Link href="/">HUB</Link>
      <span className="sep" aria-hidden="true">
        ›
      </span>
      <Link href={KIT_BASE}>Kit F4</Link>
      <span className="sep" aria-hidden="true">
        ›
      </span>
      <span aria-current="page">{docTitle}</span>
    </nav>
  );
}
