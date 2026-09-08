import type { Metadata } from 'next';
import { fontVars } from '@/app/fonts';
import { ProjecaoLanding } from '@/components/projecao/ProjecaoLanding';

export const metadata: Metadata = {
  title: 'Projeção de investimento em tráfego — documento interno',
  description:
    'Quanto custa colocar o Kit Gestão F4, a Maestria Zigomática e a Mentoria de Gestão F4 no tráfego pago: piso de verba pela regra das 50 conversões, projeção de vendas, CAC, ROAS e fluxo de caixa.',
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
