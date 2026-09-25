import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Raleway } from 'next/font/google';
import '@/src/theme.css';
import '../../../src/styles.css';
import '@/src/globals.css';
import { Providers } from '@/src/app/providers';

/**
 * Raleway — primary site font. next/font self-hosts it (no external requests,
 * CSP stays strict) and exposes it as the --font-raleway CSS variable.
 */
const raleway = Raleway({
  subsets: ['latin'],
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
