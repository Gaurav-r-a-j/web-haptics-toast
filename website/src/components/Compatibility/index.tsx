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
      <p className="m-0 mb-[1rem] text-[var(--text-secondary)]">
        Haptics use the{' '}
        <a className="link-external" href={mdnVibrate} target="_blank" rel="noopener noreferrer">
          Vibration API (MDN)
        </a>
        . It’s mainly supported on Android browsers. iOS Safari does not support vibration.
      </p>

      <div className="grid gap-[0.75rem] min-[860px]:grid-cols-3 min-[860px]:gap-[1rem]">
        <div
          className="rounded-[12px] border border-[var(--border)] bg-[var(--bg-primary)] px-[1rem] py-[0.9rem] data-[state=yes]:border-[rgba(52,199,89,0.35)]"
          data-state="yes"
        >
          <div className="font-bold tracking-[-0.02em]">Android</div>
          <div className="mt-[0.25rem] text-[0.875rem] text-[var(--text-secondary)]">Chrome / Edge / Firefox</div>
        </div>
        <div
          className="rounded-[12px] border border-[var(--border)] bg-[var(--bg-primary)] px-[1rem] py-[0.9rem] data-[state=no]:border-[rgba(255,69,58,0.28)]"
          data-state="no"
        >
          <div className="font-bold tracking-[-0.02em]">iOS</div>
          <div className="mt-[0.25rem] text-[0.875rem] text-[var(--text-secondary)]">Safari (no vibration)</div>
        </div>
        <div
          className="rounded-[12px] border border-[var(--border)] bg-[var(--bg-primary)] px-[1rem] py-[0.9rem] data-[state=partial]:border-[rgba(255,159,10,0.35)]"
          data-state="partial"
        >
          <div className="font-bold tracking-[-0.02em]">Desktop</div>
          <div className="mt-[0.25rem] text-[0.875rem] text-[var(--text-secondary)]">Use Debug (sound)</div>
        </div>
      </div>
    </section>
  );
};

