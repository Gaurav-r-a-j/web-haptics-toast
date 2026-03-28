'use client';

import Link from 'next/link';
import { toast } from 'web-haptics-toast';
import { Check, AlertCircle, XCircle, Vibrate, ArrowRight } from 'lucide-react';
import { sectionLabel, sectionTitle } from '@/src/utils/site-ui';

type Card = {
  title: string;
  description: string;
  href: string;
  linkLabel: string;
};

const cards: Card[] = [
  {
    title: 'Haptics built in',
    description:
      'Vibration presets per toast type. Tune with hapticPatternMap, test on desktop with hapticsDebug, or expose a built-in on-screen toggle with hapticsShowSwitch.',
    href: '/haptics',
    linkLabel: 'Haptics guide',
  },
  {
    title: 'Per-toast haptics',
    description:
      'Skip vibration for a single toast while keeping global haptics on: toast(..., { haptics: false }).',
    href: '/toast',
    linkLabel: 'Toast API',
  },
  {
    title: 'Manual triggerHaptic',
    description:
      'Fire presets from buttons, forms, or shortcuts—without tying vibration to every toast.',
    href: '/haptics#manual-haptics',
    linkLabel: 'Manual haptics',
  },
  {
    title: 'Sonner-compatible',
    description:
      'Same toast() and Toaster API as Sonner. Optional npm alias keeps import from \'sonner\'.',
    href: '/migration-from-sonner',
    linkLabel: 'Migration',
  },
  {
    title: 'Layout & polish',
    description:
      'Position, expand stack, rich colors, close button, and custom content—try the sections below.',
    href: '#position',
    linkLabel: 'Position & more',
  },
  {
    title: 'Types & promise',
    description:
      'success, error, loading, promise, custom—same patterns you expect from Sonner.',
    href: '#types',
    linkLabel: 'Toast types',
  },
];

import { ArrowBlack1, ArrowBlack2 } from '../icons/arrows';

export const FeatureOverview = () => {
  return (
    <section id="features" aria-labelledby="features-heading" className="bg-background text-foreground rounded-t-4xl px-6 py-12 md:px-10 md:py-16 relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.1)] mt-auto w-full -translate-y-20 md:-translate-y-32">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="flex flex-col items-center text-center mb-16 w-full max-w-3xl">
          <p className="mb-4 text-[10px] md:text-xs font-black uppercase tracking-[0.15em] text-muted-foreground" aria-hidden>
            Documentation Overview
          </p>
          <h2 id="features-heading" className="text-3xl md:text-5xl uppercase leading-[1.1] mb-6 font-black tracking-tighter">
            Everything in One Package
          </h2>
          <p className="m-0 max-w-[60ch] text-[0.9375rem] md:text-base leading-snug text-muted-foreground font-medium">
            Standardized tools for modern haptic experiences. Built to work properly with your existing Sonner implementations.
          </p>
        </div>

        <ul className="m-0 grid list-none gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3 w-full">
          {cards.map((c, index) => (
            <li
              key={c.title}
              className="flex flex-col items-center text-center rounded-4xl border border-border bg-card p-8 shadow-sm transition-all hover:-translate-y-2 hover:shadow-lg relative min-h-[16rem]"
            >
              <h3 className="text-lg md:text-xl uppercase leading-tight mb-2 font-black text-foreground">
                {c.title}
              </h3>
              <p className="m-0 mt-2 text-[10px] md:text-xs leading-snug text-muted-foreground font-bold mb-auto max-w-[24ch]">
                {c.description}
              </p>
              <Link
                href={c.href}
                className={`mt-6 px-6 py-3 rounded-full text-[11px] font-black transition-all hover:scale-105 tracking-widest shadow-md flex items-center gap-2 ${
                  index % 2 === 0 ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'
                }`}
              >
                {c.linkLabel}
                <ArrowRight className="w-3 h-3" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-8 rounded-4xl border border-border bg-card p-8 shadow-sm w-full max-w-4xl">
          <p className="m-0 mb-6 text-[10px] md:text-xs font-black uppercase tracking-[0.15em] text-muted-foreground text-center">
            Live Demo
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              type="button"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-black/5 bg-secondary px-6 py-3 text-center text-[11px] font-black uppercase tracking-widest text-secondary-foreground transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-sm"
              onClick={() =>
                toast('Manual Control', {
                  description: 'Haptics disabled for this toast.',
                  haptics: false,
                })
              }
            >
              <Vibrate className="w-3.5 h-3.5" />
              Disable Haptics
            </button>
            <button
              type="button"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-black/5 bg-primary px-6 py-3 text-center text-[11px] font-black uppercase tracking-widest text-primary-foreground transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-sm"
              onClick={() =>
                toast.success('Settings Saved', {
                  description: 'Native success haptic played.',
                })
              }
            >
              <Check className="w-3.5 h-3.5" />
              Success
            </button>
            <button
              type="button"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-black/5 bg-primary px-6 py-3 text-center text-[11px] font-black uppercase tracking-widest text-primary-foreground transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-sm"
              onClick={() =>
                toast.error('Payment Failed', {
                  description: 'Native error haptic played.',
                })
              }
            >
              <AlertCircle className="w-3.5 h-3.5" />
              Error
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
