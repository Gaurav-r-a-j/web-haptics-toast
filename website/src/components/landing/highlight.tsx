'use client';

import React from 'react';
import Link from 'next/link';
import { Reveal, softButtonClass } from '@/src/components/shared/section';
import { cn } from '@/src/lib/utils';

const bullets = [
  'Confirm actions without shouting on screen.',
  'Reassure users the tap actually registered.',
  'Feels like a native app, ships as one import.',
];

/**
 * Full-bleed "why" band. Terminal-black ties it to the always-black code blocks;
 * type stays calm (sentence case, semibold) — the contrast does the work.
 */
export const Highlight = () => {
  return (
    <section aria-label="Tactile Experience Highlights" className="w-full">
      <div
        id="why"
        className="relative overflow-hidden bg-[#0a0c12] px-3 py-16 text-zinc-50 sm:px-5 md:px-10 md:py-24"
      >
        {/* Ambient depth: lime + blue glows so the band never reads as a flat void */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(60rem 30rem at 80% -20%, rgba(204,255,0,0.10), transparent 60%), radial-gradient(44rem 28rem at 0% 120%, rgba(0,56,255,0.22), transparent 62%)',
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Staggered editorial grid: title left, argument right, offset on desktop */}
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <p className="m-0 text-[11px] font-semibold uppercase tracking-[0.22em] text-secondary/90">
                Why haptics
              </p>
              <h2 className="m-0 mt-5 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
                Toasts people can <span className="text-secondary">feel</span>
              </h2>
              <p className="m-0 mt-6 max-w-[44ch] text-pretty text-lg font-normal leading-relaxed text-zinc-400">
                People swipe toasts away without reading them. A buzz is a lot harder to
                ignore.
              </p>
            </Reveal>

            <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.08}>
              <p className="m-0 text-pretty text-base font-normal leading-relaxed text-zinc-400 md:text-lg">
                Native apps feel finished because of tiny physical cues you barely notice. This
                brings that feel to the web — no more &quot;I never saw a notification&quot;
                messages from your users.
              </p>

              <ul className="m-0 mt-8 list-none space-y-1 p-0">
                {bullets.map((text) => (
                  <li
                    key={text}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-normal text-zinc-300 transition-colors duration-200 hover:bg-white/5 md:text-[15px]"
                  >
                    <span className="size-1.5 shrink-0 rounded-full bg-secondary" />
                    {text}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center gap-3 pt-9">
                <Link href="/haptics" className={softButtonClass}>
                  Explore documentation
                </Link>
                <Link
                  href="/migration-from-sonner"
                  className={cn(
                    'inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-50 transition-[background-color,transform] duration-200 hover:bg-white/15 hover:-translate-y-0.5 active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0',
                  )}
                >
                  Coming from Sonner
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
