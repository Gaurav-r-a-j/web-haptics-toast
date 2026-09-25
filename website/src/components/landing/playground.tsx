'use client';

import React from 'react';
import { toast, triggerHaptic } from 'web-haptics-toast';
import { SectionHeading, Reveal } from '@/src/components/shared/section';
import { CodeBlock } from '@/src/components/shared/code-block';
import { cn } from '@/src/lib/utils';
import {
  Check, AlertCircle, Info, AlertTriangle, Play,
  Settings2, Layout, Zap, Cpu, MousePointer2, Layers,
} from 'lucide-react';

const POSITIONS = [
  'top-left', 'top-center', 'top-right',
  'bottom-left', 'bottom-center', 'bottom-right'
] as const;

type Position = (typeof POSITIONS)[number];

type ToggleSetter = React.Dispatch<React.SetStateAction<boolean>>;

export interface PlaygroundProps {
  richColors: boolean;
  setRichColors: ToggleSetter;
  closeButton: boolean;
  setCloseButton: ToggleSetter;
  expand: boolean;
  setExpand: ToggleSetter;
  position: Position;
  setPosition: (p: Position) => void;
  haptics: boolean;
  setHaptics: ToggleSetter;
  hapticsDebug: boolean;
  setHapticsDebug: ToggleSetter;
  hapticsShowSwitch: boolean;
  setHapticsShowSwitch: ToggleSetter;
}

/**
 * Console + stage: a quiet settings console (left) and an open, airy launch
 * grid (right, no wrapper card). Section sits on a tonal band.
 */
export const Playground = ({
  richColors, setRichColors,
  closeButton, setCloseButton,
  expand, setExpand,
  position, setPosition,
  haptics, setHaptics,
  hapticsDebug, setHapticsDebug,
  hapticsShowSwitch, setHapticsShowSwitch,
}: PlaygroundProps) => {

  const snippet = `
<Toaster 
  position="${position}"
  expand={${expand}}
  richColors={${richColors}}
  closeButton={${closeButton}}
  haptics={${haptics}}
  hapticsDebug={${hapticsDebug}}
  hapticsShowSwitch={${hapticsShowSwitch}}
/>
`.trim();

  const triggerToast = (type: string) => {
    switch (type) {
      case 'success': toast.success('Tactile Success!', { description: 'The vibration just feels right.' }); break;
      case 'error': toast.error('Critical Failure', { description: 'A sharp, double-pulse warning.' }); break;
      case 'info': toast.info('System Update', { description: 'Subtle selection feedback.' }); break;
      case 'warning': toast.warning('Battery Low', { description: 'A medium, caution-heavy pulse.' }); break;
      case 'action':
        toast.message('Protocol Initiated', {
          description: 'Tactile sequence in progress',
          action: { label: 'Abort', onClick: () => toast.error('Aborted') },
        });
        break;
      case 'custom':
        toast.custom((t) => (
          <div className="flex items-center gap-3 rounded-2xl bg-card p-4 shadow-float">
            <div className="size-2.5 animate-pulse rounded-full bg-primary" />
            <span className="text-xs font-semibold tracking-wide text-foreground">Custom headless engine</span>
            <button onClick={() => toast.dismiss(t)} className="ml-auto rounded-lg bg-muted px-2 py-1 text-[10px] font-semibold text-muted-foreground hover:bg-accent">X</button>
          </div>
        ));
        break;
      case 'promise':
        toast.promise(new Promise(res => setTimeout(res, 2000)), {
          loading: 'Processing...',
          success: 'Task finalized!',
          error: 'Error occurred',
        });
        break;
      case 'manualHaptic':
        if (haptics) {
          triggerHaptic('success', { debug: hapticsDebug });
        }
        toast.success('Manual haptic + toast', {
          description: haptics
            ? 'triggerHaptic() first, then toast(..., { haptics: false }).'
            : 'Turn Haptic Feedback on to feel triggerHaptic; toast stays silent (haptics: false).',
          haptics: false,
        });
        break;
      default: toast('Default Haptic Toast', { description: 'Simple, direct feedback.' });
    }
  };

  return (
    <section id="playground" className="scroll-mt-24 bg-muted py-16 text-foreground md:py-24 dark:bg-transparent">
      <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6">
        <SectionHeading
          eyebrow="Playground"
          title={
            <>
              Dial in your{' '}
              <span className="bg-linear-to-r from-primary to-indigo-500 bg-clip-text text-transparent">
                tactical experience
              </span>
            </>
          }
          lede="Flip the switches, fire some toasts, feel what changes. Everything on this page is real — no mocks."
        />

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">

          {/* Left: settings console */}
          <Reveal className="lg:col-span-5">
            <div className="flex flex-col rounded-3xl bg-card p-5 shadow-card sm:p-7">
              <div className="mb-7 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Settings2 size={20} strokeWidth={2.5} />
                </div>
                <h3 className="m-0 text-lg font-semibold tracking-tight">Configuration</h3>
              </div>

              {/* Settings-style switch rows */}
              <div className="space-y-2">
                <SwitchRow label="Haptic Feedback" active={haptics} onClick={() => setHaptics(!haptics)} />
                <SwitchRow label="Debug Mode" active={hapticsDebug} onClick={() => setHapticsDebug(!hapticsDebug)} />
                <SwitchRow label="Rich Colors" active={richColors} onClick={() => setRichColors(!richColors)} />
                <SwitchRow label="Close Button" active={closeButton} onClick={() => setCloseButton(!closeButton)} />
                <SwitchRow label="Expand Stack" active={expand} onClick={() => setExpand(!expand)} />
                <SwitchRow label="Manual Switch" active={hapticsShowSwitch} onClick={() => setHapticsShowSwitch(!hapticsShowSwitch)} />
              </div>

              {/* Anchor grid */}
              <div className="mt-8">
                <div className="mb-3 flex items-center gap-2">
                  <Layout size={15} className="text-primary" strokeWidth={2.5} />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">Anchor grid</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {POSITIONS.map((p) => (
                    <button
                      key={p}
                      onClick={() => setPosition(p)}
                      className={cn(
                        'h-11 rounded-xl text-[11px] font-semibold tracking-wide transition-[background-color,color,transform] duration-200 active:scale-[0.98]',
                        position === p
                          ? 'bg-primary text-primary-foreground shadow-[0_8px_20px_-8px_rgba(0,56,255,0.6)]'
                          : 'bg-muted text-muted-foreground hover:bg-accent hover:text-foreground'
                      )}
                    >
                      {p.replace('-', ' ')}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: open launch stage (no wrapper card) */}
          <Reveal className="lg:col-span-7" delay={0.08}>
            <div className="mb-7 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                <Play size={20} strokeWidth={2.5} />
              </div>
              <h3 className="m-0 text-lg font-semibold tracking-tight">Launch center</h3>
            </div>

            <div className="relative z-10 mb-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
              <LaunchPadButton label="Success" icon={<Check />} tone="secondary" onClick={() => triggerToast('success')} />
              <LaunchPadButton label="Error" icon={<AlertCircle />} tone="red" onClick={() => triggerToast('error')} />
              <LaunchPadButton label="Info" icon={<Info />} tone="blue" onClick={() => triggerToast('info')} />
              <LaunchPadButton label="Warning" icon={<AlertTriangle />} tone="yellow" onClick={() => triggerToast('warning')} />
              <LaunchPadButton label="Custom" icon={<Cpu />} tone="white" onClick={() => triggerToast('custom')} />
              <LaunchPadButton label="Action" icon={<Zap />} tone="white" onClick={() => triggerToast('action')} />
            </div>

            <p className="relative z-10 mb-2 mt-6 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Manual haptic (no double buzz)
            </p>
            <div className="relative z-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <LaunchPadButton
                label="triggerHaptic + toast"
                icon={<MousePointer2 />}
                tone="primary"
                onClick={() => triggerToast('manualHaptic')}
              />
              <LaunchPadButton
                label="Promise"
                icon={<Layers />}
                tone="white"
                onClick={() => triggerToast('promise')}
              />
            </div>

            <div className="mt-8">
              <CodeBlock>{snippet}</CodeBlock>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};

type LaunchPadTone = 'secondary' | 'red' | 'blue' | 'yellow' | 'primary' | 'white';

/* Brand tones stay solid; type-color tiles are tints so the stage stays calm. */
const LAUNCH_TONE_CLASSES: Record<LaunchPadTone, string> = {
  secondary: 'bg-secondary text-secondary-foreground hover:brightness-105',
  red: 'bg-red-500/10 text-red-600 hover:bg-red-500/20 dark:text-red-400',
  blue: 'bg-blue-500/10 text-blue-600 hover:bg-blue-500/20 dark:text-blue-400',
  yellow: 'bg-yellow-400/15 text-yellow-700 hover:bg-yellow-400/25 dark:text-yellow-400',
  primary: 'bg-primary text-primary-foreground hover:brightness-110',
  white: 'bg-card text-foreground shadow-card hover:shadow-float',
};

type IconElement = React.ReactElement<{ size?: number | string; strokeWidth?: number }>;

const LaunchPadButton = ({ label, icon, tone, onClick }: {
  label: string;
  icon: IconElement;
  tone: LaunchPadTone;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={cn(
      'group flex flex-col items-center justify-center gap-2.5 rounded-2xl p-5 text-center transition-[transform,background-color,filter,box-shadow] duration-200 hover:-translate-y-0.5 active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0',
      LAUNCH_TONE_CLASSES[tone],
    )}
  >
    <div className="transition-transform duration-200 group-hover:scale-110 motion-reduce:group-hover:scale-100">
      {React.cloneElement(icon, { size: 22, strokeWidth: 2.5 })}
    </div>
    <span className="text-[11px] font-semibold tracking-wide">{label}</span>
  </button>
);

/** Settings-style switch row: label + track/knob toggle, no borders. */
const SwitchRow = ({ label, active, onClick }: {
  label: string;
  active: boolean;
  onClick: () => void;
}) => (
  <button
    type="button"
    onClick={onClick}
    role="switch"
    aria-checked={active}
    className="flex w-full items-center justify-between gap-3 rounded-xl bg-muted px-4 py-3 text-left transition-colors duration-200 hover:bg-accent"
  >
    <span className="text-[13px] font-medium text-foreground">{label}</span>
    <span
      className={cn(
        'relative h-6 w-10 shrink-0 rounded-full transition-colors duration-200',
        active ? 'bg-primary' : 'bg-border',
      )}
      aria-hidden
    >
      <span
        className={cn(
          'absolute left-0.5 top-0.5 size-5 rounded-full bg-white shadow-sm transition-transform duration-200',
          active && 'translate-x-4',
        )}
      />
    </span>
  </button>
);
