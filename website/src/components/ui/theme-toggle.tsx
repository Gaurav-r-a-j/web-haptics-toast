'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import { Monitor, Moon, Sun } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const onCycleTheme = () => {
    const current = theme ?? 'system';
    const next = current === 'system' ? 'light' : current === 'light' ? 'dark' : 'system';
    setTheme(next);
  };

  return (
    <button
      type="button"
      onClick={onCycleTheme}
      className={cn(
        "inline-flex h-[34px] w-[34px] items-center justify-center rounded-full border border-white/30 text-white transition-all duration-150 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-primary",
        className
      )}
      aria-label="Toggle color theme"
      title={mounted ? `Theme: ${theme ?? 'system'} (click to cycle)` : 'Toggle color theme'}
    >
      {!mounted || theme === 'system' ? (
        <Monitor size={16} aria-hidden />
      ) : theme === 'light' ? (
        <Sun size={16} aria-hidden />
      ) : (
        <Moon size={16} aria-hidden />
      )}
    </button>
  );
}
