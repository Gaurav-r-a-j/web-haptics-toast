'use client';

import type { ReactElement, ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from 'next-themes';
import { ThemeColorMeta } from '@/src/components/ThemeColorMeta';
import { SiteAtmosphere } from '@/src/components/SiteAtmosphere';

export function Providers({ children }: { children: ReactNode }): ReactElement {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem storageKey="theme" disableTransitionOnChange>
      <ThemeColorMeta />
      <SiteAtmosphere />
      {children}
      <Analytics />
    </ThemeProvider>
  );
}
