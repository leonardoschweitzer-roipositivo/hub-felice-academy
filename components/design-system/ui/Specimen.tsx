import type { ReactNode } from 'react';
import { CopyToken } from './CopyToken';

/** Exemplo vivo + classe + snippet copiável. */
export function Specimen({
  titulo, classe, origem, snippet, children, fundo,
}: {
  titulo: string;
  classe?: string;
  origem?: string;
  snippet?: string;
  children: ReactNode;
  fundo?: 'ink2';
}) {
  return (
    <figure className="ds-spec">
      <figcaption>
        <b>{titulo}</b>
        {classe ? <code>{classe}</code> : null}
      </figcaption>
      <div className={`ds-spec-stage${fundo ? ` is-${fundo}` : ''}`}>{children}</div>
      {snippet ? (
        <div className="ds-spec-code">
          <pre>{snippet}</pre>
          <CopyToken valor={snippet} rotulo="Copiar" className="ds-copy--sm" />
        </div>
      ) : null}
      {origem ? <small className="ds-spec-src">{origem}</small> : null}
    </figure>
  );
}
