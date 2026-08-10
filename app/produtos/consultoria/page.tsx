import type { Metadata } from 'next';
import { Poppins, Lato } from 'next/font/google';
import { ConsultoriaLanding } from '@/components/consultoria/ConsultoriaLanding';
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
  title: 'Consultoria Gestão F4 — Sua Clínica Estruturada em 4 Semanas | Felice Academy',
  description:
    'Consultoria de gestão para clínicas odontológicas: 4 semanas de auditoria em Gestão, Atendimento, Comercial e Marketing, pacote de implementações e planejamento estratégico de 12 meses. Entrada por aplicação, vagas limitadas.',
};

export default function ConsultoriaPage() {
  return (
    <div className={`${poppins.variable} ${lato.variable}`}>
      <ViewContent slug="consultoria" />
      <ConsultoriaLanding />
    </div>
  );
}
