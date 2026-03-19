'use client';

import { toast } from 'web-haptics-toast';
import Link from 'next/link';

export const Hero = () => {
  return (
    <section
      className="flex flex-col items-center justify-center px-0 pt-[3.5rem] pb-[4rem] text-center max-[600px]:pt-[2.5rem] max-[600px]:pb-[3rem]"
      aria-label="Introduction"
    >
      <span className="mb-[1.25rem] inline-block rounded-full border border-[var(--border)] bg-[var(--bg-secondary)] px-[0.75rem] py-[0.35rem] text-[0.6875rem] font-semibold tracking-[0.08em] text-[var(--text-secondary)] uppercase">
        React · Haptics
      </span>
      <h1
        className="relative m-0 mb-[0.5rem] text-[clamp(2.25rem,6vw,3.25rem)] font-bold leading-[1.08] tracking-[-0.035em] text-[var(--text-primary)] after:mt-[0.75rem] after:block after:h-[3px] after:w-10 after:rounded-full after:bg-[var(--accent)] after:content-[''] after:mx-auto"
      >
        web-haptics-toast
      </h1>
      <p className="m-0 mb-[1.5rem] max-w-[26em] text-[1.0625rem] leading-[1.55] text-[var(--text-secondary)]">
        Toasts with haptic feedback by default. Drop-in replacement for Sonner.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-[0.625rem] max-[600px]:flex-col max-[600px]:w-full max-[600px]:gap-[0.5rem]">
        <button
          type="button"
          onClick={() =>
            toast('Hello', {
              description: 'Haptics on supported devices.',
            })
          }
          className="flex h-[44px] items-center justify-center rounded-[var(--radius)] bg-[var(--accent)] px-[1.25rem] text-[0.9375rem] font-semibold text-[var(--text-on-accent)] transition-[background,transform] duration-200 hover:bg-[var(--accent-hover)] focus:outline-none focus:shadow-[0_0_0_2px_var(--bg-primary),_0_0_0_4px_var(--accent)]"
        >
          Try a toast
        </button>
        <Link
          href="/docs"
          className="flex h-[44px] max-[600px]:w-full max-[600px]:max-w-[260px] items-center justify-center rounded-[var(--radius)] border border-[var(--border)] bg-transparent px-[1rem] text-[0.875rem] font-medium text-[var(--text-primary)] transition-[border-color,background] duration-200 hover:border-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] focus:outline-none focus:shadow-[0_0_0_2px_var(--bg-primary),_0_0_0_4px_var(--accent)]"
        >
          Docs
        </Link>
        <a
          href="#install"
          className="flex h-[44px] max-[600px]:w-full max-[600px]:max-w-[260px] items-center justify-center rounded-[var(--radius)] border border-[var(--border)] bg-transparent px-[1rem] text-[0.875rem] font-medium text-[var(--text-primary)] transition-[border-color,background] duration-200 hover:border-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] focus:outline-none focus:shadow-[0_0_0_2px_var(--bg-primary),_0_0_0_4px_var(--accent)]"
        >
          Get started
        </a>
        <a
          href="https://github.com/designbyte-official/web-haptics-toast"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-[44px] w-[44px] items-center justify-center rounded-[var(--radius)] border border-transparent text-[var(--text-secondary)] transition-[color,background,border-color] duration-200 hover:border-[var(--border)] hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)] max-[600px]:px-0 max-[600px]:py-0 max-[600px]:leading-[1.5] focus:outline-none focus:shadow-[0_0_0_2px_var(--bg-primary),_0_0_0_4px_var(--accent)]"
          aria-label="GitHub repository"
          title="GitHub"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
            <path d="M12 2C6.477 2 2 6.58 2 12.235c0 4.528 2.865 8.363 6.839 9.72.5.095.682-.222.682-.49 0-.242-.008-.884-.013-1.735-2.782.62-3.369-1.37-3.369-1.37-.454-1.18-1.11-1.494-1.11-1.494-.908-.637.069-.624.069-.624 1.003.073 1.531 1.057 1.531 1.057.892 1.563 2.341 1.112 2.91.85.091-.667.349-1.112.635-1.367-2.22-.26-4.555-1.14-4.555-5.07 0-1.12.389-2.034 1.029-2.751-.103-.26-.446-1.306.098-2.722 0 0 .84-.275 2.75 1.052A9.3 9.3 0 0 1 12 7.07c.85.004 1.705.119 2.504.349 1.909-1.327 2.748-1.052 2.748-1.052.545 1.416.202 2.462.1 2.722.64.717 1.028 1.631 1.028 2.751 0 3.94-2.338 4.807-4.566 5.062.359.316.678.94.678 1.895 0 1.367-.012 2.468-.012 2.804 0 .27.18.59.688.489C19.137 20.594 22 16.76 22 12.235 22 6.58 17.523 2 12 2z" />
          </svg>
        </a>
      </div>
      <div className="mt-[2.5rem] flex w-full justify-center max-w-[320px]" aria-hidden>
        <div className="h-[44px] w-full max-w-[280px] rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--bg-secondary)] shadow-[0_4px_16px_rgba(0,0,0,0.06)]" />
      </div>
    </section>
  );
};
