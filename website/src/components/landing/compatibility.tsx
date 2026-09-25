'use client';

import React from 'react';
import { CheckCircle2, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { Reveal, softButtonClass, softOutlineButtonClass } from '@/src/components/shared/section';
import { cn } from '@/src/lib/utils';

function PlatformIcon() {
  return (
    <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
      <CheckCircle2 className="size-4.5 text-primary" strokeWidth={2.5} />
    </div>
  );
}

/**
 * Compatibility panel: tonal stacked rows — no borders. The flagship Android row
 * floats on a shadowed card; iOS/Desktop sit flat on muted surfaces.
 */
export const Compatibility = ({ className }: { className?: string }) => {
  const reduce = useReducedMotion();

  return (
    <div className={className}>
      <div className="mb-8 md:mb-10">
        <p className="m-0 mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
          Compatibility
        </p>
        <h2 className="m-0 text-3xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-4xl">
          Works <span className="text-primary">everywhere</span>
        </h2>
        <p className="mt-4 text-base font-normal leading-relaxed text-muted-foreground">
          Android buzzes natively. iOS gets tuned fallbacks through WebKit. Desktop simulates the
          patterns as sound, so you can build from anywhere.
        </p>
      </div>

      <Reveal>
        <div className="flex flex-col gap-3 sm:gap-4">
          {/* Android — flagship row */}
          <div className="group/row relative flex items-start gap-4 rounded-2xl bg-card p-5 shadow-card transition-[box-shadow] duration-300 hover:shadow-float">
            <PlatformIcon />
            <div className="flex-1">
              <div className="mb-1 flex flex-wrap items-center gap-2">
                <h3 className="m-0 text-base font-semibold tracking-tight text-foreground">
                  Android
                </h3>
                <span className="rounded-md bg-secondary px-2 py-0.5 text-[9px] font-semibold uppercase tracking-widest text-secondary-foreground">
                  Native
                </span>
              </div>
              <p className="m-0 text-sm font-normal leading-relaxed text-muted-foreground">
                Straight to the Vibration API — every Android browser just handles it.
              </p>
            </div>

            {/* Live haptic pulse visualization (decorative) */}
            <div className="absolute bottom-4 right-5 flex items-center gap-1 opacity-30 transition-opacity group-hover/row:opacity-100">
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  animate={reduce ? undefined : { height: [4, 14, 4] }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.12 }}
                  className="w-1 rounded-full bg-primary/70"
                />
              ))}
            </div>
          </div>

          {/* iOS + Desktop */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              {
                name: 'iOS',
                tag: 'Core',
                desc: 'Safari blocks the Vibration API, so patterns are approximated with what WebKit allows.',
              },
              {
                name: 'Desktop',
                tag: 'Simulation',
                desc: 'Patterns play as soft clicks while you develop. Same code, just audible.',
              },
            ].map((p) => (
              <div
                key={p.name}
                className="flex items-start gap-3 rounded-2xl bg-muted p-4"
              >
                <PlatformIcon />
                <div>
                  <div className="mb-0.5 flex items-center gap-2">
                    <h4 className="m-0 text-xs font-semibold uppercase tracking-widest text-foreground">
                      {p.name}
                    </h4>
                    <span className="rounded-md bg-background px-1.5 py-px text-[8px] font-semibold uppercase tracking-widest text-muted-foreground">
                      {p.tag}
                    </span>
                  </div>
                  <p className="m-0 text-[13px] font-normal leading-snug text-muted-foreground">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <Link href="/haptics" className={cn(softButtonClass, 'flex-1')}>
              Read docs
            </Link>
            <Link
              href="https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(softOutlineButtonClass, 'flex-1')}
            >
              MDN Vibration API
              <ExternalLink className="size-3.5" strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
