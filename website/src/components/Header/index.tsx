'use client';

import React from 'react';
import Link from 'next/link';
import { isHapticsSupported } from 'web-haptics-toast';
import { useTheme } from 'next-themes';
import { siteContainer } from '@/src/lib/siteUi';
import { Monitor, Moon, Sun, Slash, Volume2, VolumeX, Waves } from 'lucide-react';

const menuLinks = [
  { href: '#features', label: 'Features' },
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
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const menuRef = React.useRef<HTMLDetailsElement>(null);
  const [isDesktop, setIsDesktop] = React.useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(min-width: 860px)').matches;
  });

  React.useEffect(() => {
    setSupported(Boolean(isHapticsSupported));
    setMounted(true);
  }, []);

  React.useEffect(() => {
    const mq = window.matchMedia('(min-width: 860px)');
    const sync = () => setIsDesktop(mq.matches);
    sync();
    mq.addEventListener?.('change', sync);
    return () => mq.removeEventListener?.('change', sync);
  }, []);

  const onCycleTheme = () => {
    const current = theme ?? 'system';
    const next = current === 'system' ? 'light' : current === 'light' ? 'dark' : 'system';
    setTheme(next);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <a
        href="#main"
        className="absolute -top-full left-[var(--side-padding)] z-[100] rounded-sm border border-border bg-secondary px-3 py-2 text-sm font-medium text-foreground no-underline transition-[top] duration-150 focus:-top-[0.75rem] focus:outline-none focus:shadow-focus-accent"
      >
        Skip to content
      </a>
      <div
        className={`${siteContainer} flex flex-wrap items-center justify-between gap-x-3 gap-y-2 py-3 min-[480px]:gap-4 min-[480px]:py-3.5`}
      >
        <div className="flex min-w-0 items-center gap-3">
          <Link href="/" className="text-[0.9375rem] font-semibold tracking-[-0.02em] text-foreground no-underline hover:text-primary" aria-label="Home">
            <span className="inline max-[600px]:hidden">web-haptics-toast</span>
            <span className="hidden max-[600px]:inline-flex h-[34px] w-[34px] items-center justify-center rounded-full bg-secondary text-foreground text-[0.8125rem] font-bold tracking-tight">
              db
            </span>
          </Link>
          <nav className="flex items-center gap-1 max-[600px]:hidden" aria-label="Primary">
            <Link
              href="/docs"
              className="rounded-sm px-3 py-2 text-xs font-medium text-muted-foreground no-underline transition-colors duration-150 hover:bg-secondary hover:text-foreground max-[600px]:px-2 max-[600px]:py-[0.4rem] max-[600px]:text-xs"
            >
              Docs
            </Link>
            <details ref={menuRef} className="relative group">
              <summary
                className="cursor-pointer select-none list-none rounded-sm px-3 py-2 text-[0.8125rem] font-medium text-muted-foreground transition-colors duration-150 group-[open]:bg-secondary group-[open]:text-foreground hover:bg-secondary hover:text-foreground [&::-webkit-details-marker]:hidden max-[600px]:px-2 max-[600px]:py-[0.4rem]"
              >
                Menu
              </summary>
              <div
                className="absolute left-0 top-[calc(100%+8px)] z-50 min-w-[min(100vw-2rem,220px)] max-w-[calc(100vw-2rem)] rounded-[12px] border border-border bg-secondary p-2 shadow-float max-[400px]:left-auto max-[400px]:right-0"
                role="menu"
                aria-label="Sections"
              >
                {menuLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="block rounded-[10px] px-[0.6rem] py-2 text-sm text-foreground no-underline hover:bg-background"
                    role="menuitem"
                    onClick={() => {
                      menuRef.current?.removeAttribute('open');
                    }}
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </details>
          </nav>
        </div>

        <div className="flex min-w-0 items-center gap-2">
          <button
            type="button"
            onClick={onCycleTheme}
            className="inline-flex h-[34px] w-[34px] items-center justify-center rounded-sm text-muted-foreground transition-colors duration-150 hover:bg-secondary hover:text-foreground focus:outline-none focus:shadow-focus-ring"
            aria-label="Toggle color theme"
            title={mounted ? `Theme: ${theme ?? 'system'} (click to cycle)` : 'Toggle color theme'}
          >
            {!mounted || theme === 'system' ? (
              <Monitor size={18} aria-hidden />
            ) : theme === 'light' ? (
              <Sun size={18} aria-hidden />
            ) : (
              <Moon size={18} aria-hidden />
            )}
          </button>
          <button
            type="button"
            className="inline-flex h-[34px] w-[34px] items-center justify-center gap-0 rounded-full border border-border bg-secondary px-3 text-foreground transition-colors duration-150 hover:border-muted-foreground focus:outline-none focus:shadow-focus-ring data-[on=true]:border-primary data-[on=true]:bg-primary data-[on=true]:text-primary-foreground max-[600px]:px-0"
            aria-pressed={haptics}
            onClick={() => setHaptics((v) => !v)}
            title="Toggle haptics"
            data-on={haptics ? 'true' : 'false'}
          >
            {haptics ? (
              <Waves size={16} aria-hidden />
            ) : (
              <span className="relative inline-flex h-[16px] w-[16px] items-center justify-center">
                <Waves size={16} aria-hidden />
                <Slash size={16} className="absolute inset-0 m-auto rotate-[-20deg]" aria-hidden />
              </span>
            )}
            <span className="sr-only">Haptics</span>
          </button>
          {isDesktop && supported !== null && (
            <button
              type="button"
              className="inline-flex h-[34px] w-[34px] items-center justify-center gap-0 rounded-full border border-border bg-secondary px-3 text-foreground transition-colors duration-150 hover:border-muted-foreground focus:outline-none focus:shadow-focus-ring data-[on=true]:border-primary data-[on=true]:bg-primary data-[on=true]:text-primary-foreground max-[600px]:px-0"
              aria-pressed={hapticsDebug}
              onClick={() => setHapticsDebug((v) => !v)}
              title="Debug: play pattern as sound"
              data-on={hapticsDebug ? 'true' : 'false'}
            >
              <span className="inline-flex opacity-90" aria-hidden>
                {hapticsDebug ? <Volume2 size={16} aria-hidden /> : <VolumeX size={16} aria-hidden />}
              </span>
              <span className="sr-only">Debug</span>
            </button>
          )}
          <a
            href="https://github.com/Gaurav-r-a-j/web-haptics-toast"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-[34px] w-[34px] items-center justify-center rounded-sm text-muted-foreground transition-colors duration-150 hover:bg-secondary hover:text-foreground focus:outline-none focus:shadow-focus-ring"
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
