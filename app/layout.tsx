import type { Metadata, Viewport } from 'next';
import './globals.css';

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
      <body>{children}</body>
    </html>
  );
}
