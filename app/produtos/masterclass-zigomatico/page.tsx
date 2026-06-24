import type { Metadata } from 'next';
import { Poppins, Lato } from 'next/font/google';
import { MasterclassLanding } from '@/components/masterclass-zigomatico/MasterclassLanding';
import { ViewContent } from '@/components/tracking/ViewContent';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-felice-display',
  display: 'swap',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-felice-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Masterclass Zigomático Descomplicado — Dr. Sócrates Tavares | Felice Academy',
  description:
    'Domine os princípios dos implantes zigomáticos em poucas horas e transforme casos impossíveis em faturamento real. Masterclass do Dr. Sócrates Tavares — acesso grátis ou Premium com bônus. Garantia de 7 dias.',
};

export default function MasterclassZigomaticoPage() {
  return (
    <div className={`${poppins.variable} ${lato.variable}`}>
      <ViewContent slug="masterclass-zigomatico" />
      <MasterclassLanding />
    </div>
  );
}
