import type { Metadata } from 'next';
import { Poppins, Lato } from 'next/font/google';
import '@/styles/felice.css';
import '@/styles/obrigado.css';
import '@/styles/consultoria.css';
import { ConsultoriaQuiz } from '@/components/masterclass-zigomatico/consultoria/ConsultoriaQuiz';
import { RevealOnScroll } from '@/components/felice/ui/RevealOnScroll';

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
  title: 'Agende sua consultoria gratuita — Masterclass Zigomático Descomplicado',
  description:
    'Responda algumas perguntas rápidas sobre a sua experiência para o Dr. Sócrates preparar a sua consultoria gratuita de 1 hora.',
  robots: { index: false, follow: false },
};

export default function ConsultoriaPage() {
  return (
    <div className={`felice ${poppins.variable} ${lato.variable}`}>
      <ConsultoriaQuiz />
      <RevealOnScroll />
    </div>
  );
}
