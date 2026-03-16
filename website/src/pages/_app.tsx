import type { ReactElement } from 'react';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
// Theme tokens first (single source of truth for colors)
import '../theme.css';
// Use root package source CSS so website works without building the package first
import '../../../src/styles.css';
import '../style.css';
import '../globals.css';

export default function Nextra({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      {/* @ts-ignore */}
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
