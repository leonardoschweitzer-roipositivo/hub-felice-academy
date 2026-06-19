import type { Metadata } from 'next';
import { Poppins, Lato } from 'next/font/google';
import { CrmLanding } from '@/components/crm/CrmLanding';

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
  title: 'Felice CRM — Software de Gestão para Clínicas Odontológicas',
  description:
    'O Felice CRM organiza pacientes, agenda, vendas e faturamento da sua clínica em um só painel. Teste grátis por 7 dias, sem cartão.',
};

export default function CrmPage() {
  return (
    <div className={`${poppins.variable} ${lato.variable}`}>
      <CrmLanding />
    </div>
  );
}
