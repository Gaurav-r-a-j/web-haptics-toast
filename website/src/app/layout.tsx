import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import '@/src/theme.css';
import '../../../src/styles.css';
import '@/src/globals.css';
import { Providers } from '@/src/app/providers';

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
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
