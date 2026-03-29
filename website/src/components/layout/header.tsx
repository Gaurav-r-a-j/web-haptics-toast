'use client';

import React from 'react';
import Link from 'next/link';
import { isHapticsSupported } from 'web-haptics-toast';

import { useTheme } from 'next-themes';
import { siteContainer } from '@/src/utils/site-ui';
import { cn } from '@/src/lib/utils';
import { Slash, Volume2, VolumeX, Waves } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { ThemeToggle } from '@/src/components/ui/theme-toggle';
import { Logo } from '@/src/components/ui/logo';

const LOGO_ROTATION = ['WEB', 'HAPTICS'];

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
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = React.useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

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
    <motion.header
      initial={false}
      animate={{
        backgroundColor: isScrolled ? "var(--background)" : "transparent",
        backdropFilter: "none",
        borderBottomColor: "transparent"
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 transition-colors"
    >
      <a
        href="#main"
        className="absolute -top-full left-side z-[100] rounded-sm border border-border bg-secondary px-3 py-2 text-sm font-medium text-foreground no-underline transition-[top] duration-150 focus:-top-[0.75rem] focus:outline-none focus:shadow-focus-accent"
      >
        Skip to content
      </a>
      <nav className={`${siteContainer} relative z-20 flex items-center justify-between py-4 min-[480px]:py-5 max-w-[1440px] mx-auto w-full`}>
        {/* Logo (Left Aligned) */}
        <div className="flex flex-1 justify-start items-center">
          <Logo isScrolled={isScrolled} />
        </div>

        {/* Desktop Links (Centered Navigation) */}
        <div className="hidden min-[860px]:flex flex-1 justify-center items-center">
          <nav className="flex items-center space-x-2" aria-label="Primary">
            <Link
              href="/docs"
              className={cn(
                "px-4 py-1.5 rounded-full border text-xs font-semibold transition-colors duration-200",
                isScrolled ? "border-border text-foreground hover:bg-secondary" : "border-white/30 text-white hover:bg-white/10"
              )}
            >
              Docs
            </Link>

            <details ref={menuRef} className="relative group">
              <summary
                className={cn(
                  "cursor-pointer select-none list-none px-4 py-1.5 rounded-full border text-xs font-semibold transition-colors duration-200 [&::-webkit-details-marker]:hidden",
                  isScrolled ? "border-border text-foreground hover:bg-secondary" : "border-white/30 text-white hover:bg-white/10"
                )}
              >
                Menu
              </summary>
              <div
                className="absolute left-1/2 -translate-x-1/2 top-[calc(100%+8px)] z-50 min-w-[200px] rounded-2xl border border-border bg-popover p-2 shadow-float"
                role="menu"
                aria-label="Sections"
              >
                {menuLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="block rounded-xl px-3 py-2 text-sm text-foreground font-medium no-underline hover:bg-accent hover:text-accent-foreground"
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

        {/* Buttons / Toggles (Right Aligned) */}
        <div className="flex flex-1 justify-end items-center space-x-2">
          {/* Docs link fallback for smaller screens */}
          <Link
            href="/docs"
            className={cn(
              "min-[860px]:hidden px-4 py-1.5 rounded-full border text-xs font-semibold transition-colors duration-200",
              isScrolled ? "border-border text-foreground hover:bg-secondary" : "border-white/30 text-white hover:bg-white/10"
            )}
          >
            Docs
          </Link>

          <ThemeToggle className={cn(
            isScrolled ? "border-border bg-transparent text-muted-foreground hover:bg-secondary hover:text-foreground" : "border-white/30 bg-transparent text-white hover:bg-white hover:text-primary"
          )} />

          <button
            type="button"
            className={cn(
              "inline-flex h-[34px] w-[34px] items-center justify-center gap-0 rounded-full border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary data-[on=true]:border-primary data-[on=true]:bg-primary data-[on=true]:text-primary-foreground",
              isScrolled ? "border-border bg-transparent text-foreground hover:border-muted-foreground hover:bg-secondary" : "border-white/30 bg-transparent text-white hover:bg-white/10"
            )}
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
              className={cn(
                "inline-flex h-[34px] w-[34px] items-center justify-center gap-0 rounded-full border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary data-[on=true]:border-primary data-[on=true]:bg-primary data-[on=true]:text-primary-foreground",
                isScrolled ? "border-border bg-transparent text-foreground hover:border-muted-foreground hover:bg-secondary" : "border-white/30 bg-transparent text-white hover:bg-white/10"
              )}
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
            className={cn(
              "inline-flex h-[34px] w-[34px] items-center justify-center rounded-full border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary",
              isScrolled ? "border-border bg-transparent text-muted-foreground hover:bg-secondary hover:text-foreground" : "border-white/30 bg-transparent text-white hover:bg-white hover:text-primary"
            )}
            aria-label="GitHub repository"
            title="GitHub"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.58 2 12.235c0 4.528 2.865 8.363 6.839 9.72.5.095.682-.222.682-.49 0-.242-.008-.884-.013-1.735-2.782.62-3.369-1.37-3.369-1.37-.454-1.18-1.11-1.494-1.11-1.494-.908-.637.069-.624.069-.624 1.003.073 1.531 1.057 1.531 1.057.892 1.563 2.341 1.112 2.91.85.091-.667.349-1.112.635-1.367-2.22-.26-4.555-1.14-4.555-5.07 0-1.12.389-2.034 1.029-2.751-.103-.26-.446-1.306.098-2.722 0 0 .84-.275 2.75 1.052A9.3 9.3 0 0 1 12 7.07c.85.004 1.705.119 2.504.349 1.909-1.327 2.748-1.052 2.748-1.052.545 1.416.202 2.462.1 2.722.64.717 1.028 1.631 1.028 2.751 0 3.94-2.338 4.807-4.566 5.062.359.316.678.94.678 1.895 0 1.367-.012 2.468-.012 2.804 0 .27.18.59.688.489C19.137 20.594 22 16.76 22 12.235 22 6.58 17.523 2 12 2z" />
            </svg>
          </a>
        </div>
      </nav>
    </motion.header>
  );
};


