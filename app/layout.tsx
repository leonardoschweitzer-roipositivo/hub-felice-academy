import type { Metadata, Viewport } from 'next';
import './globals.css';
import { MetaPixel } from '@/components/tracking/MetaPixel';
import { META_PIXEL_ID } from '@/lib/tracking/config';

// Base code do Pixel. Renderizado como <script> inline no topo do <body> →
// roda durante o parse do HTML (antes da hidratação), garantindo que
// window.fbq exista antes de qualquer useEffect que dispare eventos.
const PIXEL_BASE = `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${META_PIXEL_ID}');fbq('track','PageView');`;

export const metadata: Metadata = {
  metadataBase: new URL('https://feliceacademy.com.br'),
  title: {
    default: 'Felice Academy',
    template: '%s · Felice Academy',
  },
  description:
    'Educação e ferramentas para dentistas evoluírem clínica e carreira: cursos, mentorias e o Felice CRM.',
  applicationName: 'Felice Academy',
  formatDetection: { telephone: false, email: false, address: false },
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
