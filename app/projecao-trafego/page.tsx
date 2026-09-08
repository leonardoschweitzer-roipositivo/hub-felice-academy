import type { Metadata } from 'next';
import { fontVars } from '@/app/fonts';
import { ProjecaoLanding } from '@/components/projecao/ProjecaoLanding';

export const metadata: Metadata = {
  title: 'Projeção de investimento em tráfego — documento interno',
  description:
    'Quanto custa colocar os oito produtos da Felice Academy no tráfego pago: piso de verba pela regra das 50 conversões, escada de cross-sell entre as trilhas, projeção de vendas, CAC, ROAS e fluxo de caixa — para um produto, uma trilha ou o catálogo inteiro.',
  // Documento interno: fora do Google, fora do sitemap e sem link no site.
  robots: { index: false, follow: false },
};

export default function ProjecaoTrafegoPage() {
  return (
    <div className={fontVars}>
      <ProjecaoLanding />
    </div>
  );
}
