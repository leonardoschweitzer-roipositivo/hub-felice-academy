import type { Metadata } from 'next';
import { Poppins, Lato } from 'next/font/google';
import { MaestriaLanding } from '@/components/maestria/MaestriaLanding';
import { ViewContent } from '@/components/tracking/ViewContent';

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
  title: 'Maestria Zigomática — Curso de Implantes Zigomáticos',
  description:
    'Domine a cirurgia zigomática do diagnóstico ao hands-on guiado e opere com segurança os casos de maxila atrófica severa. Curso online do Dr. Sócrates Tavares. Garantia de 7 dias.',
};

export default function MaestriaZigomaticaPage() {
  return (
    <div className={`${poppins.variable} ${lato.variable}`}>
      <ViewContent slug="maestria-zigomatica" />
      <MaestriaLanding />
    </div>
  );
}
