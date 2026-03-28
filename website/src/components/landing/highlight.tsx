'use client';

import React from 'react';
import Link from 'next/link';

export const Highlight = () => {
  return (
    <section
      className="mt-8 overflow-hidden rounded-[2.5rem] md:rounded-[3rem] border-0 bg-primary text-primary-foreground p-8 md:p-12 shadow-2xl relative"
      aria-label="Why haptics"
    >
      <div className="relative z-10 max-w-4xl py-4 sm:py-8">
        <p className="mb-4 text-[10px] md:text-xs font-black uppercase tracking-[0.15em] text-secondary">
          Why it works
        </p>
        <h2 className="m-0 mb-6 text-3xl md:text-5xl font-black leading-[1.1] tracking-tighter uppercase sm:whitespace-pre-line">
          Haptics make toasts{'\n'}feel “native”.
        </h2>
        <p className="m-0 mb-8 max-w-[50ch] text-lg text-primary-foreground/90 font-medium">
          Toasts are easy to miss—especially on mobile. A subtle vibration makes feedback harder to ignore and easier to
          understand at a glance (success vs error). That’s why this library ships with haptics enabled by default.
        </p>
        <ul className="m-0 list-none grid gap-4 sm:grid-cols-1 md:grid-cols-3 sm:gap-x-8 sm:gap-y-4">
          <li className="flex items-start gap-4 text-[0.9375rem] leading-normal text-primary-foreground/80 font-medium">
            <span className="mt-[0.35rem] h-2.5 w-2.5 flex-none shrink-0 rounded-full bg-secondary" aria-hidden />
            <span>Better confirmation for important actions (save, pay, submit).</span>
          </li>
          <li className="flex items-start gap-4 text-[0.9375rem] leading-normal text-primary-foreground/80 font-medium">
            <span className="mt-[0.35rem] h-2.5 w-2.5 flex-none shrink-0 rounded-full bg-secondary" aria-hidden />
            <span>Stronger “error” feedback reduces repeated mistakes.</span>
          </li>
          <li className="flex items-start gap-4 text-[0.9375rem] leading-normal text-primary-foreground/80 font-medium">
            <span className="mt-[0.35rem] h-2.5 w-2.5 flex-none shrink-0 rounded-full bg-secondary" aria-hidden />
            <span>
              Global off: <code className="text-secondary bg-black/20 px-1 py-0.5 rounded font-bold">{'haptics={false}'}</code> on <code className="text-primary-foreground bg-black/20 px-1 py-0.5 rounded">Toaster</code>, or per toast:{' '}
              <code className="text-secondary bg-black/20 px-1 py-0.5 rounded font-bold">{'{ haptics: false }'}</code>.
            </span>
          </li>
        </ul>
        <div className="mt-10 flex flex-col gap-4 min-[420px]:flex-row min-[420px]:flex-wrap">
          <Link
            href="/haptics"
            className="flex h-14 min-h-[56px] w-full max-w-[240px] items-center justify-center rounded-3xl bg-secondary hover:bg-primary-foreground text-secondary-foreground px-6 text-[0.875rem] font-bold uppercase tracking-wider transition-colors min-[420px]:w-auto outline-none"
          >
            Read haptics docs →
          </Link>
          <a
            href="#compatibility"
            className="flex h-14 min-h-[56px] w-full max-w-[240px] items-center justify-center rounded-3xl border-2 border-primary-foreground/20 bg-transparent hover:bg-primary-foreground/10 text-primary-foreground px-6 text-[0.875rem] font-bold uppercase tracking-wider transition-colors min-[420px]:w-auto outline-none"
          >
            See compatibility
          </a>
        </div>
      </div>
    </section>
  );
};

