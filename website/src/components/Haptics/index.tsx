'use client';

import React from 'react';
import { toast } from 'web-haptics-toast';
import { CodeBlock } from '../CodeBlock';
import { sectionLabel, sectionTitle } from '@/src/lib/siteUi';

export const Haptics = ({
  haptics,
  hapticsDebug,
  hapticsShowSwitch,
  customHapticMap,
  setHaptics,
  setHapticsDebug,
  setHapticsShowSwitch,
  setCustomHapticMap,
}: {
  haptics: boolean;
  hapticsDebug: boolean;
  hapticsShowSwitch: boolean;
  customHapticMap: boolean;
  setHaptics: React.Dispatch<React.SetStateAction<boolean>>;
  setHapticsDebug: React.Dispatch<React.SetStateAction<boolean>>;
  setHapticsShowSwitch: React.Dispatch<React.SetStateAction<boolean>>;
  setCustomHapticMap: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const snippet = React.useMemo(() => {
    const lines = [
      '<Toaster',
      `  haptics={${haptics}}`,
      `  hapticsDebug={${hapticsDebug}}`,
      `  hapticsShowSwitch={${hapticsShowSwitch}}`,
    ];
    if (customHapticMap) {
      lines.push(`  hapticPatternMap={{`);
      lines.push(`    info: 'selection',`);
      lines.push(`    loading: 'light',`);
      lines.push(`  }}`);
    }
    lines.push('/>');
    return lines.join('\n');
  }, [haptics, hapticsDebug, hapticsShowSwitch, customHapticMap]);

  return (
    <div>
      <p className={sectionLabel} aria-hidden>
        Features
      </p>
      <h2 id="haptics-heading" className={sectionTitle}>
        Haptics
      </h2>
      <p className="m-0 mb-1 max-w-[52ch] text-[0.9375rem] leading-[1.55] text-muted-foreground">
        Toasts trigger haptic feedback by default on supported devices. Use the toggles to match the live{' '}
        <code className="text-[0.8125rem]">Toaster</code> on this page. On desktop, enable{' '}
        <strong className="font-semibold text-foreground">Debug</strong> to hear the pattern as sound.{' '}
        <strong className="font-semibold text-foreground">Built-in switch</strong> adds an on-screen control for end users.
      </p>
      <div
        className="relative mx-[calc(-1*var(--side-padding))] flex flex-wrap gap-2.5 overflow-auto px-[var(--side-padding)] py-1.5 max-[600px]:[mask-image:linear-gradient(to_right,transparent,black_16px,black_calc(100%_-_16px),transparent)]"
      >
        <button
          className="cursor-pointer whitespace-nowrap rounded border border-border bg-secondary px-[0.875rem] py-[0.5rem] text-[0.8125rem] font-medium text-foreground transition-[border-color,background,box-shadow] duration-200 [font-family:var(--font-sans)] hover:bg-background hover:border-muted-foreground data-[active='true']:bg-primary data-[active='true']:border-primary data-[active='true']:text-primary-foreground focus:outline-none focus-visible:shadow-focus-ring"
          data-active={haptics}
          onClick={() => setHaptics((v) => !v)}
        >
          Haptics {haptics ? 'on' : 'off'}
        </button>
        <button
          className="cursor-pointer whitespace-nowrap rounded border border-border bg-secondary px-[0.875rem] py-[0.5rem] text-[0.8125rem] font-medium text-foreground transition-[border-color,background,box-shadow] duration-200 [font-family:var(--font-sans)] hover:bg-background hover:border-muted-foreground data-[active='true']:bg-primary data-[active='true']:border-primary data-[active='true']:text-primary-foreground focus:outline-none focus-visible:shadow-focus-ring"
          data-active={hapticsDebug}
          onClick={() => setHapticsDebug((v) => !v)}
        >
          Debug (sound on desktop)
        </button>
        <button
          className="cursor-pointer whitespace-nowrap rounded border border-border bg-secondary px-[0.875rem] py-[0.5rem] text-[0.8125rem] font-medium text-foreground transition-[border-color,background,box-shadow] duration-200 [font-family:var(--font-sans)] hover:bg-background hover:border-muted-foreground data-[active='true']:bg-primary data-[active='true']:border-primary data-[active='true']:text-primary-foreground focus:outline-none focus-visible:shadow-focus-ring"
          data-active={hapticsShowSwitch}
          onClick={() => setHapticsShowSwitch((v) => !v)}
        >
          Built-in switch
        </button>
        <button
          className="cursor-pointer whitespace-nowrap rounded border border-border bg-secondary px-[0.875rem] py-[0.5rem] text-[0.8125rem] font-medium text-foreground transition-[border-color,background,box-shadow] duration-200 [font-family:var(--font-sans)] hover:bg-background hover:border-muted-foreground data-[active='true']:bg-primary data-[active='true']:border-primary data-[active='true']:text-primary-foreground focus:outline-none focus-visible:shadow-focus-ring"
          data-active={customHapticMap}
          onClick={() => setCustomHapticMap((v) => !v)}
        >
          Custom pattern map
        </button>
        <button
          className="cursor-pointer whitespace-nowrap rounded border border-border bg-secondary px-[0.875rem] py-[0.5rem] text-[0.8125rem] font-medium text-foreground transition-[border-color,background,box-shadow] duration-200 [font-family:var(--font-sans)] hover:bg-background hover:border-muted-foreground data-[variant='success']:bg-[rgba(52,199,89,0.14)] data-[variant='error']:bg-[rgba(255,69,58,0.12)] data-[variant='warning']:bg-[rgba(255,214,10,0.18)] focus:outline-none focus-visible:shadow-focus-ring"
          data-variant="success"
          onClick={() => toast.success('Success toast')}
        >
          Toast success
        </button>
        <button
          className="cursor-pointer whitespace-nowrap rounded border border-border bg-secondary px-[0.875rem] py-[0.5rem] text-[0.8125rem] font-medium text-foreground transition-[border-color,background,box-shadow] duration-200 [font-family:var(--font-sans)] hover:bg-background hover:border-muted-foreground data-[variant='success']:bg-[rgba(52,199,89,0.14)] data-[variant='error']:bg-[rgba(255,69,58,0.12)] data-[variant='warning']:bg-[rgba(255,214,10,0.18)] focus:outline-none focus-visible:shadow-focus-ring"
          data-variant="error"
          onClick={() => toast.error('Error toast')}
        >
          Toast error
        </button>
        <button
          className="cursor-pointer whitespace-nowrap rounded border border-border bg-secondary px-[0.875rem] py-[0.5rem] text-[0.8125rem] font-medium text-foreground transition-[border-color,background,box-shadow] duration-200 [font-family:var(--font-sans)] hover:bg-background hover:border-muted-foreground data-[variant='success']:bg-[rgba(52,199,89,0.14)] data-[variant='error']:bg-[rgba(255,69,58,0.12)] data-[variant='warning']:bg-[rgba(255,214,10,0.18)] focus:outline-none focus-visible:shadow-focus-ring"
          data-variant="warning"
          onClick={() => toast.warning('Warning toast')}
        >
          Toast warning
        </button>
        <button
          className="cursor-pointer whitespace-nowrap rounded border border-border bg-secondary px-[0.875rem] py-[0.5rem] text-[0.8125rem] font-medium text-foreground transition-[border-color,background,box-shadow] duration-200 [font-family:var(--font-sans)] hover:bg-background hover:border-muted-foreground focus:outline-none focus-visible:shadow-focus-ring"
          type="button"
          onClick={() => toast.info('Info toast — uses selection pattern when custom map is on')}
        >
          Toast info
        </button>
      </div>
      <CodeBlock>{snippet}</CodeBlock>
    </div>
  );
};
