'use client';

import React from 'react';
import { HeroText } from '@/src/components/ui/hero-text';
import { CodeBlock } from '@/src/components/shared/code-block';
import { triggerHaptic, toast } from 'web-haptics-toast';
import { Zap, Music, Radio, Palette, Hammer, MousePointer2 } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export const AdvancedFeatures = () => {
  return (
    <section id="advanced" className="py-24 bg-secondary relative overflow-hidden">
      {/* Decorative Diagonal Stripes */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 2px, transparent 0, transparent 40px)' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <div className="text-left">
            <HeroText shadowColor="var(--color-black)" className="text-4xl md:text-7xl text-primary leading-none uppercase mb-2">
              AND MANY MORE...
            </HeroText>
            <p className="max-w-xl text-xl md:text-2xl font-black italic text-black/60">
              Beyond the basics. <span className="text-primary">Many more options and tactical power.</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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

const FeatureCard = ({ icon, title, desc, code, onAction, actionLabel, className }: any) => (
  <div className={cn(
    "bg-white border-4 border-primary rounded-4xl p-8 shadow-[8px_8px_0_var(--color-primary)] flex flex-col items-start transition-all hover:-translate-y-1 mb-0 h-full",
    className
  )}>
    <div className="p-3 bg-black text-secondary rounded-2xl shadow-[4px_4px_0_var(--color-primary)] mb-6">
      {icon}
    </div>
    <h3 className="text-3xl font-[1000] uppercase tracking-tighter mb-4 text-black leading-none">{title}</h3>
    <p className="text-base font-bold text-black/80 mb-8 leading-relaxed">
      {desc}
    </p>

    <div className="mt-auto w-full space-y-8">
      <CodeBlock >{code}</CodeBlock>

      {onAction && (
        <button
          onClick={onAction}
          className="w-full py-4 rounded-2xl bg-black text-secondary font-black uppercase text-[10px] tracking-widest shadow-[4px_4px_0_var(--color-primary)] active:translate-y-1 active:translate-x-1 active:shadow-none transition-all"
        >
          {actionLabel}
        </button>
      )}
    </div>
  </div>
);
