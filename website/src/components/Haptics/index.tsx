'use client';

import React from 'react';
import { toast } from 'web-haptics-toast';
import { CodeBlock } from '../CodeBlock';

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
      <p className="section-label" aria-hidden>Features</p>
      <h2 id="haptics-heading">Haptics</h2>
      <p style={{ marginTop: 0 }}>
        Toasts trigger haptic feedback by default on supported devices. Toggle below to test with haptics on or off.
        On desktop, enable <strong>Debug</strong> to hear the pattern as sound.
      </p>
      <div
        className="relative flex flex-wrap gap-2 overflow-auto py-[4px] mx-[calc(-1*var(--side-padding))] px-[var(--side-padding)] max-[600px]:[mask-image:linear-gradient(to_right,transparent,black_16px,black_calc(100%_-_16px),transparent)]"
      >
        <button
          className="cursor-pointer whitespace-nowrap rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg-secondary)] px-[0.875rem] py-[0.5rem] text-[0.8125rem] font-medium text-[var(--text-primary)] transition-[border-color,background,box-shadow] duration-200 [font-family:var(--font-sans)] hover:bg-[var(--bg-primary)] hover:border-[var(--text-secondary)] data-[active='true']:bg-[var(--accent)] data-[active='true']:border-[var(--accent)] data-[active='true']:text-[var(--text-on-accent)] focus:outline-none focus-visible:shadow-[0_0_0_2px_var(--bg-primary),_0_0_0_4px_var(--accent)]"
          data-active={haptics}
          onClick={() => setHaptics((v) => !v)}
        >
          Haptics {haptics ? 'on' : 'off'}
        </button>
        <button
          className="cursor-pointer whitespace-nowrap rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg-secondary)] px-[0.875rem] py-[0.5rem] text-[0.8125rem] font-medium text-[var(--text-primary)] transition-[border-color,background,box-shadow] duration-200 [font-family:var(--font-sans)] hover:bg-[var(--bg-primary)] hover:border-[var(--text-secondary)] data-[active='true']:bg-[var(--accent)] data-[active='true']:border-[var(--accent)] data-[active='true']:text-[var(--text-on-accent)] focus:outline-none focus-visible:shadow-[0_0_0_2px_var(--bg-primary),_0_0_0_4px_var(--accent)]"
          data-active={hapticsDebug}
          onClick={() => setHapticsDebug((v) => !v)}
        >
          Debug (sound on desktop)
        </button>
        <button
          className="cursor-pointer whitespace-nowrap rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg-secondary)] px-[0.875rem] py-[0.5rem] text-[0.8125rem] font-medium text-[var(--text-primary)] transition-[border-color,background,box-shadow] duration-200 [font-family:var(--font-sans)] hover:bg-[var(--bg-primary)] hover:border-[var(--text-secondary)] data-[variant='success']:bg-[rgba(52,199,89,0.14)] data-[variant='error']:bg-[rgba(255,69,58,0.12)] data-[variant='warning']:bg-[rgba(255,214,10,0.18)] focus:outline-none focus-visible:shadow-[0_0_0_2px_var(--bg-primary),_0_0_0_4px_var(--accent)]"
          data-variant="success"
          onClick={() => {
            toast.success('Success toast');
          }}
        >
          Toast success
        </button>
        <button
          className="cursor-pointer whitespace-nowrap rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg-secondary)] px-[0.875rem] py-[0.5rem] text-[0.8125rem] font-medium text-[var(--text-primary)] transition-[border-color,background,box-shadow] duration-200 [font-family:var(--font-sans)] hover:bg-[var(--bg-primary)] hover:border-[var(--text-secondary)] data-[variant='success']:bg-[rgba(52,199,89,0.14)] data-[variant='error']:bg-[rgba(255,69,58,0.12)] data-[variant='warning']:bg-[rgba(255,214,10,0.18)] focus:outline-none focus-visible:shadow-[0_0_0_2px_var(--bg-primary),_0_0_0_4px_var(--accent)]"
          data-variant="error"
          onClick={() => toast.error('Error toast')}
        >
          Toast error
        </button>
        <button
          className="cursor-pointer whitespace-nowrap rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg-secondary)] px-[0.875rem] py-[0.5rem] text-[0.8125rem] font-medium text-[var(--text-primary)] transition-[border-color,background,box-shadow] duration-200 [font-family:var(--font-sans)] hover:bg-[var(--bg-primary)] hover:border-[var(--text-secondary)] data-[variant='success']:bg-[rgba(52,199,89,0.14)] data-[variant='error']:bg-[rgba(255,69,58,0.12)] data-[variant='warning']:bg-[rgba(255,214,10,0.18)] focus:outline-none focus-visible:shadow-[0_0_0_2px_var(--bg-primary),_0_0_0_4px_var(--accent)]"
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
