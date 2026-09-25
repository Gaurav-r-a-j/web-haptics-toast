'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/src/components/shared/section';

type CardItem = {
  title: string;
  description: string;
  href: string;
};

const cards: CardItem[] = [
  {
    title: 'Feel every toast',
    description:
      'Every toast type ships with a vibration preset that just works. Successes feel like successes; errors actually get your attention.',
    href: '/haptics',
  },
  {
    title: 'Total control',
    description:
      'Pass any pattern you like — a long buzz for errors, a double-tap for chat messages. Your call, per toast.',
    href: '/toast',
  },
  {
    title: 'Go rogue',
    description:
      'You don\u2019t need a toast to buzz. Call triggerHaptic() on any button, toggle, or flow you like.',
    href: '/haptics#manual-haptics',
  },
  {
    title: 'Swap in seconds',
    description:
      'Already on Sonner? Change the import line and you\u2019re done. Same API, same props — plus haptics.',
    href: '/migration-from-sonner',
  },
  {
    title: 'Stay pretty',
    description:
      'Stacks, positions, themes — the toast styling you already know, kept intact. Haptics ride along on top.',
    href: '#playground',
  },
  {
    title: 'Smart feedback',
    description:
      'Promises can buzz the moment they resolve. Loading feels alive, and success lands with a satisfying pulse.',
    href: '#advanced',
  },
];

/**
 * Editorial index: no cards, no borders — a calm numbered list on a tonal band.
 * Two-column on desktop, single column on mobile; rows light up on hover.
 */
export const FeatureOverview = () => {
  return (
    <section id="features" aria-labelledby="features-heading" className="bg-muted text-foreground dark:bg-transparent">
      <div className="mx-auto w-full max-w-7xl px-3 py-16 sm:px-5 md:px-10 md:py-24">
        {/* Asymmetric header: title left, lede right */}
        <div className="mb-10 grid gap-6 md:mb-14 md:grid-cols-12 md:items-end">
          <Reveal className="md:col-span-7">
            <p className="m-0 mb-4 bg-linear-to-r from-primary to-indigo-500 bg-clip-text text-[11px] font-semibold uppercase tracking-[0.22em] text-transparent">
              What you get
            </p>
            <h2
              id="features-heading"
              className="m-0 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl"
            >
              Everything{' '}
              <span className="bg-linear-to-r from-primary to-indigo-500 bg-clip-text text-transparent">
                built in
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="md:col-span-5">
            <p className="m-0 max-w-[46ch] text-pretty text-base font-normal leading-relaxed text-muted-foreground md:text-lg">
              Haptics for your toasts, without the ceremony. One import, it works on the
              browsers people actually use, and it stays quiet everywhere else.
            </p>
          </Reveal>
        </div>

        {/* Numbered index cards — generous gaps, number aligned to title */}
        <div className="grid gap-x-6 gap-y-4 md:gap-x-8 lg:grid-cols-2">
          {cards.map((c, index) => (
            <Reveal key={c.title} delay={(index % 2) * 0.06}>
              <Link
                href={c.href}
                className="group flex h-full items-start gap-4 rounded-2xl bg-card px-5 py-6 shadow-card transition-[box-shadow] duration-300 hover:shadow-float sm:gap-5 sm:px-7"
              >
                <span className="w-7 shrink-0 pt-1 text-sm font-medium tabular-nums leading-none text-primary">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-lg font-semibold leading-snug tracking-tight text-foreground">
                    {c.title}
                  </span>
                  <span className="mt-2 block text-sm font-normal leading-relaxed text-muted-foreground">
                    {c.description}
                  </span>
                </span>
                <ArrowRight
                  className="mt-1 size-4 shrink-0 text-primary opacity-0 transition-[opacity,transform] duration-200 group-hover:translate-x-1 group-hover:opacity-100 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
                  strokeWidth={2}
                />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
