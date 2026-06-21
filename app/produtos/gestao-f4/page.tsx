import type { Metadata } from 'next';
import { Poppins, Lato } from 'next/font/google';
import { GestaoF4Landing } from '@/components/gestao-f4/GestaoF4Landing';

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
  title: 'Curso Gestão F4 — Os 4 Pilares da Gestão para Clínicas | Felice Academy',
  description:
    'O curso online que ensina, do zero, a fazer sua clínica atender, agendar e vender no automático. Os 4 pilares — Atendimento, Agendamento, Marketing e Gestão — passo a passo, com modelos e templates inclusos. Garantia de 7 dias.',
};

export default function GestaoF4Page() {
  return (
    <div className={`${poppins.variable} ${lato.variable}`}>
      <GestaoF4Landing />
    </div>
  );
}
