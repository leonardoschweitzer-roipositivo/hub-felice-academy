import type { Metadata } from 'next';
import { Poppins, Lato } from 'next/font/google';
import '@/styles/felice.css';
import '@/styles/hub.css';
import '@/styles/kit-f4.css';
import '@/styles/consultoria-cta.css';

/* Fontes do tema Felice (mesmas variáveis usadas em felice.css). */
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

/* Acesso restrito: páginas não indexáveis (estrutura pronta para auth futura). */
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

/**
 * Ponto único para futura proteção de acesso ao Kit (área de membros).
 * Hoje é um no-op — a estrutura está pronta para receber a verificação.
 */
function requireAccess() {
  // TODO (fase 5 — membros): validar sessão/compra aqui antes de renderizar.
  return true;
}

export default function KitF4Layout({ children }: { children: React.ReactNode }) {
  requireAccess();
  return <div className={`${poppins.variable} ${lato.variable}`}>{children}</div>;
}
