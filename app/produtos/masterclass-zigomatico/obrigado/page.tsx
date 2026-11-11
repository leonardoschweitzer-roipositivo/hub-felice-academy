import type { Metadata } from 'next';
import { Poppins, Lato } from 'next/font/google';
import { ObrigadoLanding } from '@/components/masterclass-zigomatico/obrigado/ObrigadoLanding';

// Mesmas fontes da landing de vendas (Poppins display / Lato body).
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
  title: 'Assista agora — Masterclass Zigomático Descomplicado | Felice Academy',
  description:
    'Sua Masterclass Zigomático Descomplicado está liberada: assista à aula completa e agende a consultoria gratuita de 1 hora com o Dr. Sócrates para dar o próximo passo nos zigomáticos.',
  // Página de pós-acesso não deve ser indexada.
  robots: { index: false, follow: false },
};

export default function ObrigadoPage() {
  return (
    <div className={`${poppins.variable} ${lato.variable}`}>
      {/* Sem Purchase do site: a fonte única de InitiateCheckout e Purchase
          é a integração Pixel + Conversions API da Greenn. Disparar aqui
          também contaria a venda em dobro (event_ids diferentes). */}
      <ObrigadoLanding />
    </div>
  );
}
