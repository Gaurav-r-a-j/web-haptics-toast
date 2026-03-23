'use client';

import React from 'react';
import Link from 'next/link';

export const Highlight = () => {
  return (
    <section
      className="mt-6 overflow-hidden rounded-[12px] border border-[var(--border)] bg-[var(--bg-secondary)] text-[var(--text-primary)]"
      aria-label="Why haptics"
    >
      <div className="px-[1.25rem] py-[1.75rem] sm:px-[1.5rem]">
        <p className="mb-[0.5rem] text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-[var(--text-secondary)]">
          Why it works
        </p>
        <h2 className="m-0 mb-[0.5rem] text-[1.5rem] leading-[1.2] tracking-[-0.02em]">
          Haptics make toasts feel “native”.
        </h2>
        <p className="m-0 mb-[1rem] text-[var(--text-secondary)]">
          Toasts are easy to miss—especially on mobile. A subtle vibration makes feedback harder to ignore and easier to
          understand at a glance (success vs error). That’s why this library ships with haptics enabled by default.
        </p>
        <ul className="m-0 list-none grid gap-[0.75rem] sm:grid-cols-3 sm:gap-x-5 sm:gap-y-3">
          <li className="flex items-start gap-2.5 text-[0.9375rem] leading-[1.5] text-[var(--text-primary)]">
            <span className="mt-[0.35rem] h-2 w-2 flex-none shrink-0 rounded-full bg-[var(--accent)]" aria-hidden />
            <span>Better confirmation for important actions (save, pay, submit).</span>
          </li>
          <li className="flex items-start gap-2.5 text-[0.9375rem] leading-[1.5] text-[var(--text-primary)]">
            <span className="mt-[0.35rem] h-2 w-2 flex-none shrink-0 rounded-full bg-[var(--accent)]" aria-hidden />
            <span>Stronger “error” feedback reduces repeated mistakes.</span>
          </li>
          <li className="flex items-start gap-2.5 text-[0.9375rem] leading-[1.5] text-[var(--text-primary)]">
            <span className="mt-[0.35rem] h-2 w-2 flex-none shrink-0 rounded-full bg-[var(--accent)]" aria-hidden />
            <span>
              Global off: <code>{'haptics={false}'}</code> on <code>Toaster</code>, or per toast:{' '}
              <code>{'{ haptics: false }'}</code>.
            </span>
          </li>
        </ul>
        <div className="mt-[1.25rem] flex flex-col gap-2.5 min-[420px]:flex-row min-[420px]:flex-wrap">
          <Link
            href="/haptics"
            className="flex h-11 min-h-[44px] w-full items-center justify-center rounded-full bg-[var(--accent)] px-[0.9rem] text-[0.875rem] font-semibold text-[var(--text-on-accent)] min-[420px]:h-[40px] min-[420px]:min-h-0 min-[420px]:w-auto"
          >
            Read haptics docs
          </Link>
          <a
            href="#compatibility"
            className="flex h-11 min-h-[44px] w-full items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg-primary)] px-[0.9rem] text-[0.875rem] font-semibold text-[var(--text-primary)] hover:border-[var(--text-secondary)] min-[420px]:h-[40px] min-[420px]:min-h-0 min-[420px]:w-auto"
          >
            See compatibility
          </a>
        </div>
      </div>
    </section>
  );
};

