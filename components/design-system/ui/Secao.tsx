import type { ReactNode } from 'react';

export function Secao({
  id, n, titulo, lead, children,
}: { id: string; n: string; titulo: string; lead?: ReactNode; children: ReactNode }) {
  return (
    <section className="ds-sec" id={id}>
      <header className="ds-sec-head">
        <span className="eyebrow">Seção {n}</span>
        <h2>{titulo}</h2>
        {lead ? <p className="lead">{lead}</p> : null}
      </header>
      {children}
    </section>
  );
}

export function Sub({ children }: { children: ReactNode }) {
  return <h3 className="ds-sub">{children}</h3>;
}
