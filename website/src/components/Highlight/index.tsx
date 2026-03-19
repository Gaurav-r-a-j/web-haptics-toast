'use client';

import React from 'react';
import Link from 'next/link';

export const Highlight = () => {
  return (
    <section
      className="mt-[1.5rem] overflow-hidden rounded-[12px] border border-[var(--border)] bg-[var(--bg-secondary)] text-[var(--text-primary)]"
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
        <ul className="m-0 list-none grid gap-[0.5rem] sm:grid-cols-3 sm:gap-[0.75rem]">
          <li>
            <span className="mt-[0.25rem] h-[10px] w-[10px] flex-none rounded-full bg-[var(--accent)]" aria-hidden />
            Better confirmation for important actions (save, pay, submit).
          </li>
          <li>
            <span className="mt-[0.25rem] h-[10px] w-[10px] flex-none rounded-full bg-[var(--accent)]" aria-hidden />
            Stronger “error” feedback reduces repeated mistakes.
          </li>
          <li>
            <span className="mt-[0.25rem] h-[10px] w-[10px] flex-none rounded-full bg-[var(--accent)]" aria-hidden />
            One prop to disable: <code>haptics={false}</code>.
          </li>
        </ul>
        <div className="mt-[1.25rem] flex flex-wrap gap-[0.75rem]">
          <Link
            href="/haptics"
            className="flex h-[40px] items-center justify-center rounded-full bg-[var(--accent)] px-[0.9rem] text-[0.875rem] font-semibold text-[var(--text-on-accent)]"
          >
            Read haptics docs
          </Link>
          <a
            href="#compatibility"
            className="flex h-[40px] items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg-primary)] px-[0.9rem] text-[0.875rem] font-semibold text-[var(--text-primary)] hover:border-[var(--text-secondary)]"
          >
            See compatibility
          </a>
        </div>
      </div>
    </section>
  );
};

