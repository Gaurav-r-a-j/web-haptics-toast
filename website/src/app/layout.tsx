import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import localFont from 'next/font/local';
import '@/src/theme.css';
import '../../../src/styles.css';
import '@/src/globals.css';
import { Providers } from '@/src/app/providers';

/**
 * Raleway — primary site font, self-hosted (OFL license in src/fonts/OFL.txt).
 * next/font/local: no build-time network fetch (CI-safe), no external requests,
 * CSP stays strict. Variable font covers weights 100–900 + italic.
 */
const raleway = localFont({
  src: [
    { path: '../fonts/Raleway-Variable.ttf', style: 'normal' },
    { path: '../fonts/Raleway-Italic-Variable.ttf', style: 'italic' },
  ],
  display: 'swap',
  variable: '--font-raleway',
});

export const metadata: Metadata = {
  title: {
    default: 'web-haptics-toast',
    template: '%s – web-haptics-toast',
  },
  description:
    'Standalone React toasts with built-in haptics. Sonner-compatible API—one package, no extra haptics dependency.',
  openGraph: {
    title: 'web-haptics-toast',
    description:
      'Standalone React toasts with built-in haptics. Sonner-compatible API—one package, no extra haptics dependency.',
    url: 'https://web-haptics-toast.designbyte.dev',
    siteName: 'web-haptics-toast',
    type: 'website',
  },
  alternates: {
    canonical: 'https://web-haptics-toast.designbyte.dev',
  },
  twitter: {
    card: 'summary_large_image',
  },
  authors: [{ name: 'DesignByte' }],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  other: {
    'msapplication-TileColor': '#faf8f2',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning className={raleway.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
