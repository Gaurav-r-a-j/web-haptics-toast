'use client';

import type { ReactElement, ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/react';

/** Vercel Analytics only injects its script when actually served by Vercel. */
const isVercel = process.env.NEXT_PUBLIC_VERCEL === '1';
import { ThemeProvider } from 'next-themes';
import { ThemeColorMeta } from '@/src/components/shared/theme-color-meta';
import { SiteAtmosphere } from '@/src/components/shared/site-atmosphere';

export function Providers({ children }: { children: ReactNode }): ReactElement {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem storageKey="theme" disableTransitionOnChange>
      <ThemeColorMeta />
      <SiteAtmosphere />
      {children}
      {isVercel ? <Analytics /> : null}
    </ThemeProvider>
  );
}
