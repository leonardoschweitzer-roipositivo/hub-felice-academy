import type { Metadata } from 'next';
import { Poppins, Lato } from 'next/font/google';
import { HubLanding } from '@/components/hub/HubLanding';

// Mesmas fontes do design system Felice (Poppins display + Lato body).
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
  title: 'Felice Academy — Educação, Gestão e Software para Dentistas',
  description:
    'O ecossistema Felice Academy: cursos, mentoria e o Felice CRM. Educação e ferramentas para o dentista evoluir clínica e carreira.',
};

export default function HomePage() {
  return (
    <div className={`${poppins.variable} ${lato.variable}`}>
      <HubLanding />
    </div>
  );
}
