'use client';

import React from 'react';

const mdnVibrate = 'https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API';

export const Compatibility = () => {
  return (
    <section
      id="compatibility"
      aria-label="Compatibility"
      className="rounded-[12px] border border-[var(--border)] bg-[var(--bg-secondary)] px-[1.25rem] py-[1.5rem] min-[860px]:px-[1.5rem] min-[860px]:py-[1.75rem]"
    >
      <p className="section-label" aria-hidden>
        Compatibility
      </p>
      <h2 id="compatibility-heading">Browser support</h2>
      <p className="m-0 mb-[1.25rem] max-w-[52ch] text-[0.9375rem] leading-[1.55] text-[var(--text-secondary)]">
        Haptics use the{' '}
        <a className="link-external" href={mdnVibrate} target="_blank" rel="noopener noreferrer">
          Vibration API (MDN)
        </a>
        . It’s mainly supported on Android browsers. iOS Safari does not support vibration.
      </p>

      <div className="grid gap-3 min-[860px]:grid-cols-3 min-[860px]:gap-4">
        <div
          className="flex h-full flex-col gap-2 rounded-[12px] border border-[var(--border)] bg-[var(--bg-primary)] p-4 data-[state=yes]:border-[rgba(52,199,89,0.35)]"
          data-state="yes"
        >
          <div className="flex items-center justify-between gap-2">
            <div className="text-[0.9375rem] font-bold tracking-[-0.02em]">Android</div>
            <span className="shrink-0 rounded-full bg-[rgba(52,199,89,0.16)] px-2 py-[0.15rem] text-[0.6875rem] font-semibold uppercase tracking-[0.04em] text-[var(--text-primary)]">
              Supported
            </span>
          </div>
          <div className="text-[0.875rem] leading-[1.45] text-[var(--text-secondary)]">Chrome, Edge, and Firefox can vibrate on capable hardware.</div>
        </div>
        <div
          className="flex h-full flex-col gap-2 rounded-[12px] border border-[var(--border)] bg-[var(--bg-primary)] p-4 data-[state=no]:border-[rgba(255,69,58,0.28)]"
          data-state="no"
        >
          <div className="flex items-center justify-between gap-2">
            <div className="text-[0.9375rem] font-bold tracking-[-0.02em]">iOS</div>
            <span className="shrink-0 rounded-full bg-[rgba(255,69,58,0.12)] px-2 py-[0.15rem] text-[0.6875rem] font-semibold uppercase tracking-[0.04em] text-[var(--text-primary)]">
              No vibration
            </span>
          </div>
          <div className="text-[0.875rem] leading-[1.45] text-[var(--text-secondary)]">Safari does not expose the Vibration API; toasts still work.</div>
        </div>
        <div
          className="flex h-full flex-col gap-2 rounded-[12px] border border-[var(--border)] bg-[var(--bg-primary)] p-4 data-[state=partial]:border-[rgba(255,159,10,0.35)]"
          data-state="partial"
        >
          <div className="flex items-center justify-between gap-2">
            <div className="text-[0.9375rem] font-bold tracking-[-0.02em]">Desktop</div>
            <span className="shrink-0 rounded-full bg-[rgba(255,159,10,0.18)] px-2 py-[0.15rem] text-[0.6875rem] font-semibold uppercase tracking-[0.04em] text-[var(--text-primary)]">
              Debug
            </span>
          </div>
          <div className="text-[0.875rem] leading-[1.45] text-[var(--text-secondary)]">Use header <strong className="font-semibold text-[var(--text-primary)]">Debug</strong> to preview patterns as sound.</div>
        </div>
      </div>
    </section>
  );
};

