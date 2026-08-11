import type { Metadata } from 'next';
import { Poppins, Lato } from 'next/font/google';
import { MentoriaGestaoLanding } from '@/components/mentoria-gestao/MentoriaGestaoLanding';
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
  title: 'Mentoria de Gestão F4 — Dr. Sócrates Tavares | Felice Academy',
  description:
    'Tire a sua clínica das suas costas com o método dos 4 pilares — Atendimento, Agendamento, Marketing e Gestão. Plataforma de aulas, encontros ao vivo, treinamento da equipe e acesso ao Felice CRM. Entrada por aplicação.',
});

export default function MentoriaGestaoF4Page() {
  return (
    <div className={`${poppins.variable} ${lato.variable}`}>
      {/* ⚠️ `mentoria-gestao-f4` ainda não está em lib/tracking/funnels.ts,
          então o evento sai com o slug no lugar do content_name e sem value
          — preencher quando o valor da mentoria for definido. */}
      <ViewContent slug="mentoria-gestao-f4" />
      <MentoriaGestaoLanding />
    </div>
  );
}
