import type { Metadata } from 'next';
import { Poppins, Lato } from 'next/font/google';
import { MentoriasHub } from '@/components/mentorias/MentoriasHub';

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
  title: 'Mentorias — Felice Academy | Dr. Sócrates Tavares',
  description:
    'Escolha a sua mentoria com o Dr. Sócrates: Gestão F4 (clínica organizada e lucrativa) ou Zigomático (domínio cirúrgico com hands-on presencial). Entrada por aplicação.',
};

export default function MentoriasPage() {
  return (
    <div className={`${poppins.variable} ${lato.variable}`}>
      <MentoriasHub />
    </div>
  );
}
