'use client';

import Link from 'next/link';
import { toast, triggerHaptic } from 'web-haptics-toast';
import { sectionCard, sectionLabel, sectionTitle } from '@/src/utils/site-ui';

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

export const FeatureOverview = () => {
  return (
    <section className={sectionCard} id="features" aria-labelledby="features-heading">
      <p className={sectionLabel} aria-hidden>
        Overview
      </p>
      <h2 id="features-heading" className={sectionTitle}>
        Everything in one package
      </h2>
      <p className="m-0 mb-6 max-w-[60ch] text-[0.9375rem] leading-[1.55] text-muted-foreground">
        The live <code className="text-[0.8125rem]">Toaster</code> on this page matches the sections below. Skim the cards, use the try buttons for a quick preview, then open a doc link when you are ready to copy code into your app.
      </p>

      <ul className="m-0 grid list-none gap-3 p-0 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
        {cards.map((c) => (
          <li
            key={c.title}
            className="flex min-h-0 flex-col rounded-xl border border-border bg-background p-4 shadow-card"
          >
            <p className="m-0 text-[0.9375rem] font-semibold tracking-tight text-foreground">{c.title}</p>
            <p className="m-0 mt-2 flex-1 text-sm leading-snug text-muted-foreground">{c.description}</p>
            <Link
              href={c.href}
              className="mt-3 inline-flex w-fit text-sm font-medium text-primary no-underline underline-offset-2 hover:underline"
            >
              {c.linkLabel} →
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-6 rounded-xl border border-border bg-background p-4 sm:p-5">
        <p className="m-0 mb-3 text-[0.6875rem] font-semibold uppercase tracking-[0.06em] text-muted-foreground">
          Try on this page
        </p>
        <div className="flex flex-wrap gap-2.5">
          <button
            type="button"
            className="inline-flex min-h-[44px] items-center rounded-md border border-border bg-secondary px-3 py-2 text-left text-[0.8125rem] font-medium text-foreground transition-colors hover:border-muted-foreground focus:outline-none focus-visible:shadow-focus-ring sm:min-h-0"
            aria-label="Show a toast with haptics disabled for that toast only"
            onClick={() =>
              toast('No vibration for this one', {
                haptics: false,
                description: 'Uses per-toast { haptics: false }',
              })
            }
          >
            Toast without haptic
          </button>
          <button
            type="button"
            className="inline-flex min-h-[44px] items-center rounded-md border border-border bg-secondary px-3 py-2 text-left text-[0.8125rem] font-medium text-foreground transition-colors hover:border-muted-foreground focus:outline-none focus-visible:shadow-focus-ring sm:min-h-0"
            aria-label="Trigger success haptic then show a toast without toast-driven haptics"
            onClick={() => {
              triggerHaptic('success');
              toast('Saved', { description: 'Manual triggerHaptic + toast', haptics: false });
            }}
          >
            triggerHaptic + toast
          </button>
          <Link
            href="/getting-started"
            className="inline-flex min-h-[44px] items-center justify-center rounded-md border border-border bg-secondary px-3 py-2 text-[0.8125rem] font-medium text-foreground no-underline transition-colors hover:border-muted-foreground focus:outline-none focus-visible:shadow-focus-ring sm:min-h-0"
          >
            Quick reference
          </Link>
        </div>
      </div>
    </section>
  );
};
