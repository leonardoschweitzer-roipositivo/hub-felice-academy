import type { Metadata } from 'next';
import { Poppins, Lato } from 'next/font/google';
import '@/styles/felice.css';
import '@/styles/obrigado.css';
import '@/styles/consultoria.css';
import { AplicacaoQuiz } from '@/components/consultoria/aplicacao/AplicacaoQuiz';
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
  title: 'Candidate-se à Consultoria Gestão F4',
  description:
    'Responda algumas perguntas sobre a sua clínica para a nossa equipe avaliar o seu encaixe na Consultoria Gestão F4.',
  robots: { index: false, follow: false },
};

export default function AplicacaoPage() {
  return (
    <div className={`felice ${poppins.variable} ${lato.variable}`}>
      <AplicacaoQuiz />
      <RevealOnScroll />
    </div>
  );
}
