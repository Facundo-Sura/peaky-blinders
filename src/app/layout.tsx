import type { Metadata } from 'next';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { LoadingScreen } from '@/components/LoadingScreen';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Facundo Sura | Fullstack Developer',
  description: 'Portfolio profesional de Facundo Sura - Fullstack Web Developer. Construyendo imperios digitales con código limpio.',
  keywords: ['Fullstack Developer', 'React', 'Node.js', 'TypeScript', 'Portfolio'],
  authors: [{ name: 'Facundo Sura' }],
  openGraph: {
    title: 'Facundo Sura | Fullstack Developer',
    description: 'Portfolio profesional - Construyendo imperios digitales',
    type: 'website',
    locale: 'es_AR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Facundo Sura | Fullstack Developer',
    description: 'Portfolio profesional - Construyendo imperios digitales',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <ThemeProvider>
          <LoadingScreen />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
