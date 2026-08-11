import type { Metadata } from 'next';
import { Poppins, Lato } from 'next/font/google';
import { ProdutosLanding } from '@/components/produtos/ProdutosLanding';
import { paginaMeta } from '@/lib/seo';

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

export const metadata: Metadata = paginaMeta({
  title: 'Produtos — Felice Academy | Cursos, Mentoria e Software para Dentistas',
  description:
    'O catálogo completo da Felice Academy: cursos (Zigomático, Gestão F4), mentorias e o Felice CRM, além de materiais gratuitos. Escolha o próximo passo da sua clínica.',
});

export default function ProdutosPage() {
  return (
    <div className={`${poppins.variable} ${lato.variable}`}>
      <ProdutosLanding />
    </div>
  );
}
