import type { Metadata } from 'next';
import { Poppins, Lato } from 'next/font/google';
import '@/styles/felice.css';
import '@/styles/obrigado.css';
import { ConfirmacaoHero } from '@/components/felice/consultoria/ConfirmacaoHero';

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
  title: 'Recebemos seus dados — Kit Gestão F4',
  robots: { index: false, follow: false },
};

export default function ConfirmadoPage() {
  return (
    <div className={`felice ${poppins.variable} ${lato.variable}`}>
      <ConfirmacaoHero />
    </div>
  );
}
