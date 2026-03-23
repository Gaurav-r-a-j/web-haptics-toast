'use client';

import React from 'react';
import Link from 'next/link';
import { isHapticsSupported } from 'web-haptics-toast';
import { SiteThemeSelect } from '@/src/components/SiteThemeSelect';

const menuLinks = [
  { href: '#install', label: 'Install' },
  { href: '#usage', label: 'Usage' },
  { href: '#haptics', label: 'Haptics' },
  { href: '#types', label: 'Types' },
  { href: '#compatibility', label: 'Compatibility' },
];

export const Header = ({
  haptics,
  setHaptics,
  hapticsDebug,
  setHapticsDebug,
}: {
  haptics: boolean;
  setHaptics: React.Dispatch<React.SetStateAction<boolean>>;
  hapticsDebug: boolean;
  setHapticsDebug: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [supported, setSupported] = React.useState<boolean | null>(null);
  const [isDesktop, setIsDesktop] = React.useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(min-width: 860px)').matches;
  });

  React.useEffect(() => {
    setSupported(Boolean(isHapticsSupported));
  }, []);

  React.useEffect(() => {
    const mq = window.matchMedia('(min-width: 860px)');
    const sync = () => setIsDesktop(mq.matches);
    sync();
    mq.addEventListener?.('change', sync);
    return () => mq.removeEventListener?.('change', sync);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg-primary)]">
      <a
        href="#main"
        className="absolute -top-full left-[var(--side-padding)] z-[100] rounded-sm border border-[var(--border)] bg-[var(--bg-secondary)] px-3 py-2 text-sm font-medium text-[var(--text-primary)] no-underline transition-[top] duration-150 focus:-top-[0.75rem] focus:outline-none focus:shadow-[0_0_0_2px_var(--accent)]"
      >
        Skip to content
      </a>
      <div className="mx-auto flex max-w-[1120px] items-center justify-between gap-4 px-[max(var(--side-padding),_env(safe-area-inset-left))] py-[0.875rem]">
        <div className="flex min-w-0 items-center gap-3">
          <Link href="/" className="text-[0.9375rem] font-semibold tracking-[-0.02em] text-[var(--text-primary)] no-underline hover:text-[var(--accent)]" aria-label="Home">
            web-haptics-toast
          </Link>
          <nav className="flex items-center gap-1" aria-label="Primary">
            <Link
              href="/docs"
              className="rounded-sm px-3 py-2 text-xs font-medium text-[var(--text-secondary)] no-underline transition-colors duration-150 hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)] max-[600px]:px-2 max-[600px]:py-[0.4rem] max-[600px]:text-xs"
            >
              Docs
            </Link>
            <details className="relative group">
              <summary
                className="cursor-pointer select-none list-none rounded-sm px-3 py-2 text-[0.8125rem] font-medium text-[var(--text-secondary)] transition-colors duration-150 group-[open]:bg-[var(--bg-secondary)] group-[open]:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)] [&::-webkit-details-marker]:hidden max-[600px]:px-2 max-[600px]:py-[0.4rem]"
              >
                Menu
              </summary>
              <div
                className="absolute left-0 top-[calc(100%+8px)] min-w-[180px] rounded-[12px] border border-[var(--border)] bg-[var(--bg-secondary)] p-2 shadow-[0_18px_40px_rgba(0,0,0,0.12)]"
                role="menu"
                aria-label="Sections"
              >
                {menuLinks.map((l) => (
                  <a key={l.href} href={l.href} className="block rounded-[10px] px-[0.6rem] py-2 text-sm text-[var(--text-primary)] no-underline hover:bg-[var(--bg-primary)]" role="menuitem">
                    {l.label}
                  </a>
                ))}
              </div>
            </details>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <SiteThemeSelect className="max-[480px]:min-w-0 max-[480px]:flex-1" />
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-secondary)] px-2 py-[0.4rem] text-[var(--text-primary)] transition-colors duration-150 focus:outline-none focus:shadow-[0_0_0_2px_var(--bg-primary),_0_0_0_4px_var(--accent)]"
            aria-pressed={haptics}
            onClick={() => setHaptics((v) => !v)}
            title="Toggle haptics"
          >
            <span className="text-xs font-semibold tracking-[-0.01em] max-[600px]:hidden">Haptics</span>
            <span
                className="group relative inline-block h-[20px] w-[34px] rounded-full border border-[var(--border)] bg-[var(--bg-primary)] transition-colors duration-150 data-[on=true]:bg-[var(--accent)] data-[on=true]:border-[var(--accent)]"
              data-on={haptics ? 'true' : 'false'}
            >
              <span
                className="absolute left-[3px] top-1/2 h-[14px] w-[14px] -translate-y-1/2 rounded-full bg-[var(--bg-primary)] transition-[left] duration-150 group-[data-on=true]:left-[17px]"
              />
            </span>
          </button>
          {isDesktop && supported !== null && (
            <button
              type="button"
              className="inline-flex h-[34px] items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-secondary)] px-[0.6rem] text-[var(--text-primary)] focus:outline-none focus:shadow-[0_0_0_2px_var(--bg-primary),_0_0_0_4px_var(--accent)]"
              aria-pressed={hapticsDebug}
              onClick={() => setHapticsDebug((v) => !v)}
              title="Debug: play pattern as sound"
            >
              <span className="inline-flex opacity-90" aria-hidden>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M11 5L6 9H2v6h4l5 4V5z" />
                  <path d="M15.5 8.5a5 5 0 0 1 0 7" />
                </svg>
              </span>
              <span className="text-xs font-semibold tracking-[-0.01em] max-[600px]:hidden">Debug</span>
            </button>
          )}
          <a
            href="https://github.com/designbyte-official/web-haptics-toast"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-[34px] w-[34px] items-center justify-center rounded-sm text-[var(--text-secondary)] transition-colors duration-150 hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)] focus:outline-none focus:shadow-[0_0_0_2px_var(--bg-primary),_0_0_0_4px_var(--accent)]"
            aria-label="GitHub repository"
            title="GitHub"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.58 2 12.235c0 4.528 2.865 8.363 6.839 9.72.5.095.682-.222.682-.49 0-.242-.008-.884-.013-1.735-2.782.62-3.369-1.37-3.369-1.37-.454-1.18-1.11-1.494-1.11-1.494-.908-.637.069-.624.069-.624 1.003.073 1.531 1.057 1.531 1.057.892 1.563 2.341 1.112 2.91.85.091-.667.349-1.112.635-1.367-2.22-.26-4.555-1.14-4.555-5.07 0-1.12.389-2.034 1.029-2.751-.103-.26-.446-1.306.098-2.722 0 0 .84-.275 2.75 1.052A9.3 9.3 0 0 1 12 7.07c.85.004 1.705.119 2.504.349 1.909-1.327 2.748-1.052 2.748-1.052.545 1.416.202 2.462.1 2.722.64.717 1.028 1.631 1.028 2.751 0 3.94-2.338 4.807-4.566 5.062.359.316.678.94.678 1.895 0 1.367-.012 2.468-.012 2.804 0 .27.18.59.688.489C19.137 20.594 22 16.76 22 12.235 22 6.58 17.523 2 12 2z" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
};
