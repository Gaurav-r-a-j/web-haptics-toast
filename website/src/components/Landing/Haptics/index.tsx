'use client';

import React from 'react';
import { toast } from 'web-haptics-toast';
import { CodeBlock } from '../../Shared/CodeBlock';
import {
  chipActiveStates,
  chipScrollRow,
  hapticChip,
  sectionLabel,
  sectionTitle,
  toastVariantSurfaces,
} from '@/src/utils/siteUi';

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

  const toggleChip = `${hapticChip} ${chipActiveStates}`;
  const toastChip = `${hapticChip} ${toastVariantSurfaces}`;

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
      <div className={chipScrollRow}>
        <button className={toggleChip} data-active={haptics} onClick={() => setHaptics((v) => !v)}>
          Haptics {haptics ? 'on' : 'off'}
        </button>
        <button className={toggleChip} data-active={hapticsDebug} onClick={() => setHapticsDebug((v) => !v)}>
          Debug (sound on desktop)
        </button>
        <button
          className={toggleChip}
          data-active={hapticsShowSwitch}
          onClick={() => setHapticsShowSwitch((v) => !v)}
        >
          Built-in switch
        </button>
        <button className={toggleChip} data-active={customHapticMap} onClick={() => setCustomHapticMap((v) => !v)}>
          Custom pattern map
        </button>
        <button className={toastChip} data-variant="success" onClick={() => toast.success('Success toast')}>
          Toast success
        </button>
        <button className={toastChip} data-variant="error" onClick={() => toast.error('Error toast')}>
          Toast error
        </button>
        <button className={toastChip} data-variant="warning" onClick={() => toast.warning('Warning toast')}>
          Toast warning
        </button>
        <button
          className={hapticChip}
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
