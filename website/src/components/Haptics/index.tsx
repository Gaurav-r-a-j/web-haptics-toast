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
      <h2>Haptics</h2>
      <p style={{ marginTop: 0 }}>
        Toasts trigger haptic feedback by default on supported devices. Toggle below to test with haptics on or off.
        On desktop, enable <strong>Debug</strong> to hear the pattern as sound.
      </p>
      <div className="buttons">
        <button
          className="button"
          data-active={haptics}
          onClick={() => setHaptics((v) => !v)}
        >
          Haptics {haptics ? 'on' : 'off'}
        </button>
        <button
          className="button"
          data-active={hapticsDebug}
          onClick={() => setHapticsDebug((v) => !v)}
        >
          Debug (sound on desktop)
        </button>
        <button
          className="button"
          onClick={() => {
            toast.success('Success toast');
          }}
        >
          Toast success
        </button>
        <button
          className="button"
          onClick={() => toast.error('Error toast')}
        >
          Toast error
        </button>
        <button
          className="button"
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
