import type { Metadata } from 'next';
import { Poppins, Lato } from 'next/font/google';
import { SecretariaVendeLanding } from '@/components/vendas-secretaria/SecretariaVendeLanding';
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
  title: 'A Secretária que Vende — Treinamento comercial para a recepção | Felice Academy',
  description:
    'O curso pronto que você entrega à sua equipe de recepção para transformar atendimento em tratamento fechado. Do primeiro contato no WhatsApp ao follow-up do orçamento, com scripts e planilhas inclusos e bônus ao vivo. Garantia de 7 dias.',
};

export default function VendasSecretariaPage() {
  return (
    <div className={`${poppins.variable} ${lato.variable}`}>
      <ViewContent slug="vendas-secretaria" />
      <SecretariaVendeLanding />
    </div>
  );
}
