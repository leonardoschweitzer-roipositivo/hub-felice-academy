import type { Metadata } from 'next';
import { Poppins, Lato } from 'next/font/google';
import { PlatformDataProvider } from '@/components/plataforma/store/PlatformStore';

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
  title: { default: 'Plataforma', template: '%s · Felice Academy' },
  description: 'Área do aluno Felice Academy: cursos pelos 4 pilares, mentoria ao vivo e materiais.',
  /* Área do aluno — e, hoje, um protótipo com dados fictícios (alunos,
     pipeline, faturamento). Até 11/08/2026 as 16 páginas daqui eram
     indexáveis e respondiam 200 em produção: era a única área privada do
     site sem proteção de indexação. O `disallow` correspondente está em
     app/robots.ts. */
  robots: { index: false, follow: false },
};

/**
 * Layout raiz da plataforma: aplica as fontes da marca e envolve aluno E admin
 * com o store único (PlatformDataProvider). O shell visual de cada área fica
 * nos layouts aninhados: (aluno)/layout.tsx e admin/layout.tsx.
 */
export default function PlataformaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${poppins.variable} ${lato.variable}`}>
      <PlatformDataProvider>{children}</PlatformDataProvider>
    </div>
  );
}
