import type { Metadata } from 'next';
import { Poppins, Lato } from 'next/font/google';
import { ObrigadoLanding } from '@/components/recepcao-alta-performance/obrigado/ObrigadoLanding';
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
  title: 'Matrícula confirmada — Recepção de Alta Performance | Agende sua consultoria gratuita',
  description:
    'A matrícula da sua equipe na Recepção de Alta Performance está confirmada. Agende a consultoria gratuita de 1 hora com o Dr. Sócrates e defina o que a sua recepção muda primeiro.',
  // Página de pós-compra não deve ser indexada.
  robots: { index: false, follow: false },
};

export default function ObrigadoPage() {
  return (
    <div className={`${poppins.variable} ${lato.variable}`}>
      <PurchasePixel slug="recepcao-alta-performance" />
      <ObrigadoLanding />
    </div>
  );
}
