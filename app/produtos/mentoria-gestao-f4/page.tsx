import type { Metadata } from 'next';
import { Poppins, Lato } from 'next/font/google';
import { MentoriaGestaoLanding } from '@/components/mentoria-gestao/MentoriaGestaoLanding';

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
  title: 'Mentoria de Gestão F4 — Dr. Sócrates Tavares | Felice Academy',
  description:
    'Tire a sua clínica das suas costas com o método dos 4 pilares — Atendimento, Agendamento, Marketing e Gestão. Plataforma de aulas, encontros ao vivo, treinamento da equipe e acesso ao Felice CRM. Entrada por aplicação.',
};

export default function MentoriaGestaoF4Page() {
  return (
    <div className={`${poppins.variable} ${lato.variable}`}>
      <MentoriaGestaoLanding />
    </div>
  );
}
