import type { Metadata } from 'next';
import { Poppins, Lato } from 'next/font/google';
import { ObrigadoLanding } from '@/components/felice/ObrigadoLanding';
import { PurchasePixel } from '@/components/tracking/PurchasePixel';

// Mesmas fontes da landing de vendas (Poppins display / Lato body).
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
  title: 'Bem-vindo ao Kit Gestão F4 — Agende sua consultoria gratuita',
  description:
    'Sua compra do Kit Gestão F4 foi confirmada. Agende a consultoria gratuita de 1 hora com o Dr. Sócrates e monte o plano de implementação na sua clínica.',
  // Página de pós-compra não deve ser indexada.
  robots: { index: false, follow: false },
};

export default function ObrigadoPage() {
  return (
    <div className={`${poppins.variable} ${lato.variable}`}>
      <PurchasePixel slug="kitgestaof4" />
      <ObrigadoLanding />
    </div>
  );
}
