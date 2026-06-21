import type { Metadata } from 'next';
import { Poppins, Lato } from 'next/font/google';
import { MentoriaZigomaticoLanding } from '@/components/mentoria-zigomatico/MentoriaZigomaticoLanding';

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
  title: 'Mentoria de Zigomático — Dr. Sócrates Tavares | Felice Academy',
  description:
    'Domine a cirurgia zigomática com prática real: hands-on presencial em laboratório e acompanhamento cirúrgico operando ao lado do Dr. Sócrates, além de plataforma e encontros ao vivo. Entrada por aplicação.',
};

export default function MentoriaZigomaticoPage() {
  return (
    <div className={`${poppins.variable} ${lato.variable}`}>
      <MentoriaZigomaticoLanding />
    </div>
  );
}
