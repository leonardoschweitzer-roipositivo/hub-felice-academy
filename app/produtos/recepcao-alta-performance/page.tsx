import type { Metadata } from 'next';
import { Poppins, Lato } from 'next/font/google';
import { RecepcaoLanding } from '@/components/recepcao-alta-performance/RecepcaoLanding';
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
  title: 'Recepção de Alta Performance — Treinamento da recepção da clínica | Felice Academy',
  description:
    'Formação de recepcionistas de alta performance em clínicas odontológicas: o método de atendimento Disney aplicado ao balcão da sua clínica. 4 módulos e 20 aulas para a equipe receber, acolher e conduzir o paciente da porta até a cadeira. Garantia de 7 dias.',
};

export default function RecepcaoAltaPerformancePage() {
  return (
    <div className={`${poppins.variable} ${lato.variable}`}>
      <ViewContent slug="recepcao-alta-performance" />
      <RecepcaoLanding />
    </div>
  );
}
