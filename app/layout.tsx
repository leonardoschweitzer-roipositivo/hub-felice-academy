import type { Metadata, Viewport } from 'next';
import './globals.css';
import { MetaPixel } from '@/components/tracking/MetaPixel';
import { META_PIXEL_ID } from '@/lib/tracking/config';

// Base code do Pixel. Renderizado como <script> inline no topo do <body> →
// roda durante o parse do HTML (antes da hidratação), garantindo que
// window.fbq exista antes de qualquer useEffect que dispare eventos.
const PIXEL_BASE = `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${META_PIXEL_ID}');fbq('track','PageView');`;

const SITE = 'https://www.feliceacademy.com.br';
const DESCRICAO =
  'Educação e ferramentas para dentistas evoluírem clínica e carreira: cursos, mentorias e o Felice CRM.';

export const metadata: Metadata = {
  // Canônico do site é o www — o apex responde 308 → www, e é o www que o
  // tracking já usa no event_source_url.
  metadataBase: new URL(SITE),
  title: {
    default: 'Felice Academy',
    template: '%s · Felice Academy',
  },
  description: DESCRICAO,
  applicationName: 'Felice Academy',
  formatDetection: { telephone: false, email: false, address: false },
  // './' resolve para a URL da própria página, a partir do metadataBase.
  alternates: { canonical: './' },
  /* Open Graph: até 11/08/2026 o site não tinha NENHUMA tag de
     compartilhamento, e todo link colado no WhatsApp — que é onde a Felice
     fecha — aparecia como URL crua. Cada landing sobrescreve title,
     description e images com a arte do próprio produto. */
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Felice Academy',
    url: './',
    title: 'Felice Academy',
    description: DESCRICAO,
    images: [{ url: '/images/og-felice-academy.jpg', width: 1200, height: 630, alt: 'Felice Academy' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Felice Academy',
    description: DESCRICAO,
    images: ['/images/og-felice-academy.jpg'],
  },
  icons: {
    icon: [{ url: '/favicon.png', type: 'image/png', sizes: '32x32' }],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
};

export const viewport: Viewport = {
  themeColor: '#0b0b0d',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        {META_PIXEL_ID && (
          <script id="meta-pixel-base" dangerouslySetInnerHTML={{ __html: PIXEL_BASE }} />
        )}
        {children}
        <MetaPixel />
        {META_PIXEL_ID && (
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        )}
      </body>
    </html>
  );
}
