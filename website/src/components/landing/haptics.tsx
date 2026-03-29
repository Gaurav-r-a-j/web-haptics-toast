'use client';

import React from 'react';
import { toast } from 'web-haptics-toast';
import { CodeBlock } from '@/src/components/shared/code-block';
import {
  chipActiveStates,
  chipScrollRow,
  hapticChip,
  toastVariantSurfaces,
} from '@/src/utils/site-ui';
import { HeroText } from '@/src/components/ui/hero-text';

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
    <div className="p-8 md:p-16 lg:py-20 border-b border-border text-foreground bg-background">
      <div className="max-w-7xl mx-auto">
        <HeroText shadowColor="#cfd9fc" className="text-4xl md:text-6xl lg:text-7xl mb-12 text-primary leading-none uppercase">
          HAPTICS
        </HeroText>
        <p className="m-0 mb-12 max-w-2xl text-lg md:text-xl font-bold leading-relaxed text-muted-foreground">
          Toggle rich colors, global close buttons, and custom headless components. Global Toaster props update instantly via simple presets.
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
    </div>
  );
};
