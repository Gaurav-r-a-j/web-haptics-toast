'use client';

import React from 'react';
import { useTheme } from 'next-themes';

export const SiteThemeSelect = ({ className = '' }: { className?: string }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div
        className={`h-9 min-w-[5.5rem] rounded-md border border-[var(--border)] bg-[var(--bg-secondary)] ${className}`}
        aria-hidden
      />
    );
  }

  return (
    <select
      value={theme ?? 'system'}
      onChange={(e) => setTheme(e.target.value)}
      className={`h-9 min-w-[5.5rem] cursor-pointer rounded-md border border-[var(--border)] bg-[var(--bg-secondary)] px-2 text-xs font-medium text-[var(--text-primary)] outline-none transition-[border-color,background] hover:border-[var(--text-secondary)] focus-visible:shadow-[0_0_0_2px_var(--bg-primary),_0_0_0_4px_var(--accent)] ${className}`}
      aria-label="Site color theme"
    >
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="system">System</option>
    </select>
  );
};
