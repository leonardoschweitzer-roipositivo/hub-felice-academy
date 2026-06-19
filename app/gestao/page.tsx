import type { Metadata } from 'next';
import { Poppins, Lato } from 'next/font/google';
import { FeliceLanding } from '@/components/felice/FeliceLanding';

// Fontes próprias deste protótipo (independentes do design system do ROI).
// Títulos: Poppins (negrito). Corpo: Lato.
const poppins = Poppins({
  subsets: ['latin'],
  // Pesos realmente usados no CSS (600/700/800). Menos arquivos de fonte =
  // troca de fonte mais rápida e menos janela de CLS no mobile.
  weight: ['600', '700', '800'],
  variable: '--font-felice-display',
  display: 'swap',
});

// Corpo de texto em Lato (pesos finos: 300 padrão, 400/700 para ênfases).
const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-felice-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kit Sistema de Gestão F4 — Felice Academy',
  description:
    'O sistema completo de gestão para dentistas: POPs, scripts de atendimento, scripts de agendamento e calendário de marketing. Tudo pronto para implementar hoje.',
};

export default function GestaoPage() {
  return (
    <div className={`${poppins.variable} ${lato.variable}`}>
      <FeliceLanding />
    </div>
  );
}
