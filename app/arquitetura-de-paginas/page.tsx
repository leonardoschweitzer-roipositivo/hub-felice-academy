import type { Metadata } from 'next';
import { fontVars } from '@/app/fonts';
import { ArquiteturaPaginas } from '@/components/arquitetura/ArquiteturaPaginas';

export const metadata: Metadata = {
  title: 'Arquitetura de páginas — mapa interno',
  description:
    'Inventário das rotas, checkouts, candidaturas e páginas de obrigado da Felice Academy, com o que falta em cada funil.',
  // Documento interno: fora do Google e sem link em nenhum lugar do site.
  // Também não entra no app/sitemap.ts.
  robots: { index: false, follow: false },
};

export default function ArquiteturaDePaginasPage() {
  return (
    <div className={fontVars}>
      <ArquiteturaPaginas />
    </div>
  );
}
