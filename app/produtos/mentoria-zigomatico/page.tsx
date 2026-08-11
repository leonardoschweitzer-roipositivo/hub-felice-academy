import type { Metadata } from 'next';
import { Poppins, Lato } from 'next/font/google';
import { MentoriaZigomaticoLanding } from '@/components/mentoria-zigomatico/MentoriaZigomaticoLanding';
import { ViewContent } from '@/components/tracking/ViewContent';
import { paginaMeta } from '@/lib/seo';

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

export const metadata: Metadata = paginaMeta({
  title: 'Mentoria de Zigomático — Dr. Sócrates Tavares | Felice Academy',
  description:
    'Domine a cirurgia zigomática com prática real: hands-on presencial em laboratório e acompanhamento cirúrgico operando ao lado do Dr. Sócrates, além de plataforma e encontros ao vivo. Entrada por aplicação.',
});

export default function MentoriaZigomaticoPage() {
  return (
    <div className={`${poppins.variable} ${lato.variable}`}>
      {/* ⚠️ `mentoria-zigomatico` ainda não está em lib/tracking/funnels.ts,
          então o evento sai com o slug no lugar do content_name e sem value
          — preencher quando o valor da mentoria for definido. */}
      <ViewContent slug="mentoria-zigomatico" />
      <MentoriaZigomaticoLanding />
    </div>
  );
}
