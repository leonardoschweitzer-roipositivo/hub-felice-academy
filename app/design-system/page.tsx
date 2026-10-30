import type { Metadata } from 'next';
import { fontVars } from '@/app/fonts';
import { DesignSystem } from '@/components/design-system/DesignSystem';

export const metadata: Metadata = {
  title: 'Design System — Felice Academy',
  description:
    'Guia interno da marca Felice Academy: cores, tipografia, componentes web e padrão de publicação no Instagram.',
  // Documento interno: fora do Google e sem link em nenhum lugar do site.
  // Também não entra no app/sitemap.ts. Sem `disallow` no robots.ts de
  // propósito: o robô precisa conseguir ler este noindex.
  robots: { index: false, follow: false },
};

export default function DesignSystemPage() {
  return (
    <div className={fontVars}>
      <DesignSystem />
    </div>
  );
}
