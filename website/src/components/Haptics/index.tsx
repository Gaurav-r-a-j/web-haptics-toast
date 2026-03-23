'use client';

import React from 'react';
import { toast } from 'web-haptics-toast';
import { CodeBlock } from '../CodeBlock';
import { sectionLabel, sectionTitle } from '@/src/lib/siteUi';

export const Haptics = ({
  haptics,
  hapticsDebug,
  setHaptics,
  setHapticsDebug,
}: {
  haptics: boolean;
  hapticsDebug: boolean;
  setHaptics: React.Dispatch<React.SetStateAction<boolean>>;
  setHapticsDebug: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div>
      <p className={sectionLabel} aria-hidden>
        Features
      </p>
      <h2 id="haptics-heading" className={sectionTitle}>
        Haptics
      </h2>
      <p className="m-0 mb-1 max-w-[52ch] text-[0.9375rem] leading-[1.55] text-text-secondary">
        Toasts trigger haptic feedback by default on supported devices. Use the toggles to preview with haptics on or off.
        On desktop, enable <strong className="font-semibold text-text-primary">Debug</strong> to hear the pattern as sound.
      </p>
      <div
        className="relative mx-[calc(-1*var(--side-padding))] flex flex-wrap gap-2.5 overflow-auto px-[var(--side-padding)] py-1.5 max-[600px]:[mask-image:linear-gradient(to_right,transparent,black_16px,black_calc(100%_-_16px),transparent)]"
      >
        <button
          className="cursor-pointer whitespace-nowrap rounded-[var(--radius)] border border-border bg-bg-secondary px-[0.875rem] py-[0.5rem] text-[0.8125rem] font-medium text-text-primary transition-[border-color,background,box-shadow] duration-200 [font-family:var(--font-sans)] hover:bg-bg-primary hover:border-text-secondary data-[active='true']:bg-accent data-[active='true']:border-accent data-[active='true']:text-text-on-accent focus:outline-none focus-visible:shadow-[0_0_0_2px_var(--bg-primary),_0_0_0_4px_var(--accent)]"
          data-active={haptics}
          onClick={() => setHaptics((v) => !v)}
        >
          Haptics {haptics ? 'on' : 'off'}
        </button>
        <button
          className="cursor-pointer whitespace-nowrap rounded-[var(--radius)] border border-border bg-bg-secondary px-[0.875rem] py-[0.5rem] text-[0.8125rem] font-medium text-text-primary transition-[border-color,background,box-shadow] duration-200 [font-family:var(--font-sans)] hover:bg-bg-primary hover:border-text-secondary data-[active='true']:bg-accent data-[active='true']:border-accent data-[active='true']:text-text-on-accent focus:outline-none focus-visible:shadow-[0_0_0_2px_var(--bg-primary),_0_0_0_4px_var(--accent)]"
          data-active={hapticsDebug}
          onClick={() => setHapticsDebug((v) => !v)}
        >
          Debug (sound on desktop)
        </button>
        <button
          className="cursor-pointer whitespace-nowrap rounded-[var(--radius)] border border-border bg-bg-secondary px-[0.875rem] py-[0.5rem] text-[0.8125rem] font-medium text-text-primary transition-[border-color,background,box-shadow] duration-200 [font-family:var(--font-sans)] hover:bg-bg-primary hover:border-text-secondary data-[variant='success']:bg-[rgba(52,199,89,0.14)] data-[variant='error']:bg-[rgba(255,69,58,0.12)] data-[variant='warning']:bg-[rgba(255,214,10,0.18)] focus:outline-none focus-visible:shadow-[0_0_0_2px_var(--bg-primary),_0_0_0_4px_var(--accent)]"
          data-variant="success"
          onClick={() => {
            toast.success('Success toast');
          }}
        >
          Toast success
        </button>
        <button
          className="cursor-pointer whitespace-nowrap rounded-[var(--radius)] border border-border bg-bg-secondary px-[0.875rem] py-[0.5rem] text-[0.8125rem] font-medium text-text-primary transition-[border-color,background,box-shadow] duration-200 [font-family:var(--font-sans)] hover:bg-bg-primary hover:border-text-secondary data-[variant='success']:bg-[rgba(52,199,89,0.14)] data-[variant='error']:bg-[rgba(255,69,58,0.12)] data-[variant='warning']:bg-[rgba(255,214,10,0.18)] focus:outline-none focus-visible:shadow-[0_0_0_2px_var(--bg-primary),_0_0_0_4px_var(--accent)]"
          data-variant="error"
          onClick={() => toast.error('Error toast')}
        >
          Toast error
        </button>
        <button
          className="cursor-pointer whitespace-nowrap rounded-[var(--radius)] border border-border bg-bg-secondary px-[0.875rem] py-[0.5rem] text-[0.8125rem] font-medium text-text-primary transition-[border-color,background,box-shadow] duration-200 [font-family:var(--font-sans)] hover:bg-bg-primary hover:border-text-secondary data-[variant='success']:bg-[rgba(52,199,89,0.14)] data-[variant='error']:bg-[rgba(255,69,58,0.12)] data-[variant='warning']:bg-[rgba(255,214,10,0.18)] focus:outline-none focus-visible:shadow-[0_0_0_2px_var(--bg-primary),_0_0_0_4px_var(--accent)]"
          data-variant="warning"
          onClick={() => toast.warning('Warning toast')}
        >
          Toast warning
        </button>
      </div>
      <CodeBlock>
        {`<Toaster haptics={${haptics}} hapticsDebug={${hapticsDebug}} />`}
      </CodeBlock>
    </div>
  );
};
