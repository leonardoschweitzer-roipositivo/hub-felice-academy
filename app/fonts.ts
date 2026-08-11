import localFont from 'next/font/local';

/* ============================================================
   Fontes da marca, servidas do próprio projeto.

   São exatamente os mesmos arquivos que o `next/font/google` baixava
   (subset latino de Poppins 600/700/800 e Lato 300/400/700), agora
   versionados em ./fonts. Duas vantagens: o build deixa de depender da
   rede — o download do Google Fonts falha em ambiente com inspeção de
   TLS, e uma página nova não compilava por causa disso — e todo mundo
   passa a usar UMA declaração em vez de repetir o bloco em cada rota.

   Os nomes das variáveis CSS são os mesmos de antes, então o
   styles/felice.css continua funcionando sem nenhuma alteração.
   ============================================================ */

export const poppins = localFont({
  src: [
    { path: './fonts/poppins-600.woff2', weight: '600', style: 'normal' },
    { path: './fonts/poppins-700.woff2', weight: '700', style: 'normal' },
    { path: './fonts/poppins-800.woff2', weight: '800', style: 'normal' },
  ],
  variable: '--font-felice-display',
  display: 'swap',
  fallback: ['Poppins', 'system-ui', 'sans-serif'],
});

export const lato = localFont({
  src: [
    { path: './fonts/lato-300.woff2', weight: '300', style: 'normal' },
    { path: './fonts/lato-400.woff2', weight: '400', style: 'normal' },
    { path: './fonts/lato-700.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-felice-body',
  display: 'swap',
  fallback: ['Lato', 'system-ui', 'sans-serif'],
});

/** Atalho para as duas variáveis, que é como as páginas usam. */
export const fontVars = `${poppins.variable} ${lato.variable}`;
