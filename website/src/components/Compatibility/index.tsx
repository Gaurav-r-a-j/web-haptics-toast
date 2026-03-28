'use client';

import React from 'react';
import { linkExternal, sectionCard, sectionLabel, sectionTitle } from '@/src/lib/siteUi';

const mdnVibrate = 'https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API';

export const Compatibility = () => {
  return (
    <section id="compatibility" aria-label="Compatibility" className={sectionCard}>
      <p className={sectionLabel} aria-hidden>
        Compatibility
      </p>
      <h2 id="compatibility-heading" className={sectionTitle}>
        Browser support
      </h2>
      <p className="m-0 mb-5 max-w-[52ch] text-[0.9375rem] leading-snug text-muted-foreground">
        Haptics use the{' '}
        <a className={linkExternal} href={mdnVibrate} target="_blank" rel="noopener noreferrer">
          Vibration API (MDN)
        </a>
        . It’s mainly supported on Android browsers. iOS Safari does not support vibration.
      </p>

      <div className="grid gap-3 min-[860px]:grid-cols-3 min-[860px]:gap-4">
        <div
          className="flex h-full flex-col gap-2 rounded-xl border border-border bg-background p-4 data-[state=yes]:border-state-success-border"
          data-state="yes"
        >
          <div className="flex items-center justify-between gap-2">
            <div className="text-[0.9375rem] font-bold tracking-[-0.02em]">Android</div>
            <span className="shrink-0 rounded-full bg-state-success-medium px-2 py-[0.15rem] text-[0.6875rem] font-semibold uppercase tracking-wide text-foreground">
              Supported
            </span>
          </div>
          <div className="text-sm leading-snug text-muted-foreground">Chrome, Edge, and Firefox can vibrate on capable hardware.</div>
        </div>
        <div
          className="flex h-full flex-col gap-2 rounded-xl border border-border bg-background p-4 data-[state=no]:border-state-error-border"
          data-state="no"
        >
          <div className="flex items-center justify-between gap-2">
            <div className="text-[0.9375rem] font-bold tracking-[-0.02em]">iOS</div>
            <span className="shrink-0 rounded-full bg-state-error-soft px-2 py-[0.15rem] text-[0.6875rem] font-semibold uppercase tracking-wide text-foreground">
              No vibration
            </span>
          </div>
          <div className="text-sm leading-snug text-muted-foreground">Safari does not expose the Vibration API; toasts still work.</div>
        </div>
        <div
          className="flex h-full flex-col gap-2 rounded-xl border border-border bg-background p-4 data-[state=partial]:border-state-warning-border"
          data-state="partial"
        >
          <div className="flex items-center justify-between gap-2">
            <div className="text-[0.9375rem] font-bold tracking-[-0.02em]">Desktop</div>
            <span className="shrink-0 rounded-full bg-state-warning-badge px-2 py-[0.15rem] text-[0.6875rem] font-semibold uppercase tracking-wide text-foreground">
              Debug
            </span>
          </div>
          <div className="text-sm leading-snug text-muted-foreground">
            Use header <strong className="font-semibold text-foreground">Debug</strong> to preview patterns as sound.
          </div>
        </div>
      </div>
    </section>
  );
};

