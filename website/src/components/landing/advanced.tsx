'use client';

import React from 'react';
import { SectionHeading, Reveal } from '@/src/components/shared/section';
import { CodeBlock } from '@/src/components/shared/code-block';
import { triggerHaptic, toast } from 'web-haptics-toast';
import { Zap, Music, Radio, Hammer, MousePointer2, MousePointerClick } from 'lucide-react';
import { cn } from '@/src/lib/utils';

/**
 * Masonry-style case grid on background — deliberately different from every
 * other section: no band, no uniform rows, alternating tile heights via
 * col/row spans. Borderless: surfaces and shadows carry the structure.
 */
export const AdvancedFeatures = () => {
  return (
    <section id="advanced" className="scroll-mt-24 bg-muted py-16 text-foreground md:py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-3 sm:px-4 md:px-6">
        <SectionHeading
          eyebrow="And many more"
          title={
            <>
              Beyond the <span className="text-primary">basics</span>
            </>
          }
          lede="The smaller things that add up. Every button below actually fires — tap around."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {/* Row 1: wide feature + small */}
          <FeatureCard
            icon={<Zap size={22} strokeWidth={2.5} />}
            title="Go native"
            desc="Buzz without showing a toast at all. Great for primary buttons and moments where another popup would just be noise."
            code={`import { triggerHaptic } from 'web-haptics-toast';\n\ntriggerHaptic('success');`}
            onAction={() => triggerHaptic('success')}
            actionLabel="Try direct pulse"
            className="lg:col-span-2"
          />
          <FeatureCard
            icon={<Music size={22} strokeWidth={2.5} />}
            title="Custom rhythm"
            desc="Pass any pattern straight to a toast — [100, 50, 100] is a perfectly good vibration."
            code={`triggerHaptic([100, 50, 100]);`}
            onAction={() => {
              triggerHaptic([100, 50, 100]);
              toast('Rhythmic alert', {
                description: 'Custom pattern fired manually via triggerHaptic.',
                haptics: false,
              });
            }}
            actionLabel="Feel rhythm"
          />

          {/* Row 2 */}
          <FeatureCard
            icon={<Hammer size={22} strokeWidth={2.5} />}
            title="Global override"
            desc="Wire success, error, warning — whatever pattern you want, once, at the root."
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
            icon={<MousePointer2 size={22} strokeWidth={2.5} />}
            title="Soft selection"
            desc="The tiny tick iOS makes when you flip a switch. Your toggles get it too."
            code={`triggerHaptic('selection');`}
            onAction={() => triggerHaptic('selection')}
            actionLabel="Soft vibe"
          />
          <FeatureCard
            icon={<Radio size={22} strokeWidth={2.5} />}
            title="Total control"
            desc="Toasts are just IDs — keep the reference, update it, replace loading with success."
            code={`toast.dismiss(id);\ntoast.loading('Working...');`}
            onAction={() => {
              const id = toast.loading('Working…');
              window.setTimeout(() => {
                toast.success('Updated from loading', { id });
              }, 1400);
            }}
            actionLabel="Try loading → success"
          />

          {/* Row 3 */}
          <FeatureCard
            icon={<Zap size={22} strokeWidth={2.5} />}
            title="Soft pulse"
            desc="A lighter tick for tabs, chips, and other small controls."
            code={`triggerHaptic('light');`}
            onAction={() => triggerHaptic('light')}
            actionLabel="Light pulse"
          />
          <FeatureCard
            icon={<MousePointerClick size={22} strokeWidth={2.5} />}
            title="Actions & cancel"
            desc="Toast with a confirm and cancel. Give each button its own buzz so the choice feels deliberate."
            code={`toast('Deploy to production?', {\n  action: { label: 'Deploy', onClick: ... },\n  cancel: { label: 'Not now' }\n});`}
            onAction={() =>
              toast('Deploy to production?', {
                description: 'This will ship the latest build.',
                action: {
                  label: 'Deploy',
                  onClick: () => {
                    triggerHaptic('success');
                    toast.success('Deploying!');
                  },
                },
                cancel: { label: 'Not now', onClick: () => triggerHaptic('soft') },
              })
            }
            actionLabel="Open dialog toast"
            className="lg:col-span-2"
          />
        </div>
      </div>
    </section>
  );
};

type FeatureCardProps = {
  icon: React.ReactElement<{ size?: number | string; strokeWidth?: number }>;
  title: string;
  desc: string;
  code: string;
  onAction?: () => void;
  actionLabel?: string;
  className?: string;
};

const FeatureCard = ({ icon, title, desc, code, onAction, actionLabel, className }: FeatureCardProps) => (
  <Reveal className={cn('h-full', className)}>
    <div className="flex h-full flex-col items-start rounded-3xl bg-card p-6 shadow-card transition-[box-shadow] duration-300 hover:shadow-float sm:p-7">
      <div className="mb-4 rounded-xl bg-primary/10 p-2.5 text-primary">
        {React.cloneElement(icon, { size: 20, strokeWidth: 2.5 })}
      </div>
      <h3 className="m-0 text-lg font-semibold leading-snug tracking-tight text-foreground">
        {title}
      </h3>
      <p className="mt-2 text-sm font-normal leading-relaxed text-muted-foreground">
        {desc}
      </p>

      <div className="mt-auto w-full space-y-5 pt-6">
        <CodeBlock>{code}</CodeBlock>

        {onAction && (
          <button
            type="button"
            onClick={onAction}
            className="w-full rounded-xl bg-muted py-3 text-[11px] font-semibold tracking-[0.08em] text-foreground transition-[background-color,transform] duration-200 hover:bg-accent hover:-translate-y-0.5 active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          >
            {actionLabel}
          </button>
        )}
      </div>
    </div>
  </Reveal>
);
