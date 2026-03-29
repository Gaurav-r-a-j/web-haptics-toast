'use client';

import { useEffect } from 'react';

/** Matches theme.css `--background` for light / dark (browser chrome, PWA). */
const THEME_COLOR = {
  light: '#faf8f2',
  dark: '#141210',
} as const;

export function ThemeColorMeta() {
  useEffect(() => {
    const meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) return;

    const sync = () => {
      const dark = document.documentElement.classList.contains('dark');
      meta.setAttribute('content', dark ? THEME_COLOR.dark : THEME_COLOR.light);
    };

    sync();
    const obs = new MutationObserver(sync);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => obs.disconnect();
  }, []);

  return null;
}
