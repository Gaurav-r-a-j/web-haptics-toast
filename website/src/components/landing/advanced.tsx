'use client';

import React from 'react';
import { HeroText } from '@/src/components/ui/hero-text';
import { CodeBlock } from '@/src/components/shared/code-block';
import { triggerHaptic, toast } from 'web-haptics-toast';
import { Zap, Music, Radio, Palette, Hammer, MousePointer2 } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export const AdvancedFeatures = () => {
  return (
    <section id="advanced" className="bg-secondary py-12 text-black md:py-24 relative overflow-hidden">
      {/* Decorative Diagonal Stripes */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 2px, transparent 0, transparent 40px)' }} />

      <div className="relative z-10 mx-auto max-w-7xl px-3 sm:px-4 md:px-6">
        <div className="mb-10 flex flex-col items-center justify-between gap-6 md:mb-16 md:flex-row md:gap-8">
          <div className="text-left">
            <HeroText className="text-4xl md:text-7xl leading-none uppercase mb-2 text-primary">
              AND MANY MORE...
            </HeroText>
            <p className="max-w-xl text-xl md:text-2xl font-black italic text-black/60">
              Beyond the basics. <span className="text-primary">Many more options and tactical power.</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {/* Row 1: Wide + Small */}
          <FeatureCard
            icon={<Zap size={24} strokeWidth={3} />}
            title="Go Native"
            desc="Trigger physical feedback without even showing a toast. Perfect for high-intensity button interactions where visual clutter isn't needed. Seamlessly integrate vibration into every click."
            code={`import { triggerHaptic } from 'web-haptics-toast';\n\ntriggerHaptic('success');`}
            onAction={() => triggerHaptic('success')}
            actionLabel="Try Direct Pulse"
            className="lg:col-span-2"
          />
          <FeatureCard
            icon={<Music size={24} strokeWidth={3} />}
            title="Custom Rhythm"
            desc="Pass unique vibration patterns directly to individual toasts. Create your own tactical language for your app."
            code={`toast('Rhythmic Alert', {\n  hapticPattern: [100, 50, 100]\n});`}
            onAction={() => toast('Rhythmic Alert', { hapticPattern: [100, 50, 100] } as any)}
            actionLabel="Feel Rhythm"
          />

          {/* Row 2: Small + Small + Small */}
          <FeatureCard
            icon={<Hammer size={24} strokeWidth={3} />}
            title="Global Override"
            desc="Map built-in types to your own custom rhythms at the root."
            code={`<Toaster hapticPatternMap={{\n  success: [50, 30]\n}} />`}
            onAction={() => {
              triggerHaptic('medium');
              toast.success('hapticPatternMap', {
                description: 'Set on <Toaster /> to remap success, error, etc. to custom patterns.',
              });
            }}
            actionLabel="Try + hint toast"
          />
          <FeatureCard
            icon={<MousePointer2 size={24} strokeWidth={3} />}
            title="Soft Selection"
            desc="Subtle, native-feeling vibration for toggles, switches, and list selections."
            code={`triggerHaptic('selection');`}
            onAction={() => triggerHaptic('selection')}
            actionLabel="Soft Vibe"
          />
          <FeatureCard
            icon={<Radio size={24} strokeWidth={3} />}
            title="Total Control"
            desc="Programmatically dismiss, update, or pause toasts across the tactile system."
            code={`toast.dismiss(id);\ntoast.loading('Working...');`}
            onAction={() => {
              const id = toast.loading('Working…');
              window.setTimeout(() => {
                toast.success('Updated from loading', { id });
              }, 1400);
            }}
            actionLabel="Try loading → success"
          />

          {/* Row 3: Small + Wide */}
          <FeatureCard
            icon={<Zap size={24} strokeWidth={3} />}
            title="Soft Pulse"
            desc="Quick feedback for subtle UI elements like tabs and small toggles."
            code={`triggerHaptic('info');`}
            onAction={() => triggerHaptic('info')}
            actionLabel="Info Pulse"
          />
          <FeatureCard
            icon={<Palette size={24} strokeWidth={3} />}
            title="Themed Vibes"
            desc="Force light or dark themes per toast, regardless of the global system settings. Build native vibes that look exactly how you want, every single time. 100% theme control for any situation and any brand identity."
            code={`toast('Dark Mode Only', {\n  theme: 'dark'\n});`}
            onAction={() => toast('Dark Mode Only', { theme: 'dark' } as any)}
            actionLabel="Launch Dark"
            className="lg:col-span-2"
          />
        </div>
      </div>
    </section>
  );
};

/** Same offset-shadow CTA as before; fill is primary instead of black. */
const actionPrimaryClass =
  'w-full rounded-2xl border-2 border-black bg-primary py-4 font-black uppercase text-[10px] tracking-widest text-primary-foreground shadow-[4px_4px_0_black] transition-all hover:brightness-110 active:translate-x-1 active:translate-y-1 active:shadow-none';

const FeatureCard = ({ icon, title, desc, code, onAction, actionLabel, className }: any) => (
  <div
    className={cn(
      'mb-0 flex h-full flex-col items-start rounded-4xl border-4 border-primary bg-white p-4 shadow-[8px_8px_0_var(--color-primary)] transition-all hover:-translate-y-1 sm:p-5 md:p-8',
      className,
    )}
  >
    <div className="mb-4 rounded-2xl bg-black p-3 text-secondary shadow-[4px_4px_0_var(--color-primary)] sm:mb-6">{icon}</div>
    <h3 className="mb-3 text-2xl font-[1000] uppercase leading-none tracking-tighter text-black sm:mb-4 sm:text-3xl">{title}</h3>
    <p className="mb-6 text-sm font-bold leading-relaxed text-black/80 sm:mb-8 sm:text-base">{desc}</p>

    <div className="mt-auto w-full space-y-5 sm:space-y-8">
      <CodeBlock>{code}</CodeBlock>

      {onAction && (
        <button type="button" onClick={onAction} className={actionPrimaryClass}>
          {actionLabel}
        </button>
      )}
    </div>
  </div>
);
