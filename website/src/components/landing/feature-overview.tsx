'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { HeroText } from '@/src/components/ui/hero-text';
import { CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import clsx from 'clsx';
import { neoPressShadow4 } from '@/src/utils/site-ui';

type CardItem = {
  title: string;
  description: string;
  href: string;
  linkLabel: string;
};

const cards: CardItem[] = [
  {
    title: 'FEEL EVERY TOAST',
    description:
      'Native presets for every notification. Because your users deserve more than just visual noise—give them something to actually feel.',
    href: '/haptics',
    linkLabel: 'Learn Presets',
  },
  {
    title: 'TOTAL CONTROL',
    description:
      'Dial it in manually. Strong for critical errors, subtle for success. You decide the vibration vibe for every single alert.',
    href: '/toast',
    linkLabel: 'Explore API',
  },
  {
    title: 'GO ROGUE',
    description:
      'Tap into the haptic system directly. Use tactical power for buttons, toggles, or whatever you want—not just toasts.',
    href: '/haptics#manual-haptics',
    linkLabel: 'Manual Mode',
  },
  {
    title: 'SWAP IN SECONDS',
    description:
      'Already using Sonner? Just change the import. Zero friction, zero headache, and instantly upgraded feedback.',
    href: '/migration-from-sonner',
    linkLabel: 'Quick Swap',
  },
  {
    title: 'STAY PRETTY',
    description:
      'Chunky stacks, custom positions, and modern themes. It is not just a library—it is a premium design system enhancement.',
    href: '#position',
    linkLabel: 'Layout Guide',
  },
  {
    title: 'SMART FEEDBACK',
    description:
      'Loading states that feel like they are working. Success that satisfyingly pulses. It is the tactical edge your app needs.',
    href: '#types',
    linkLabel: 'See Types',
  },
];

export const FeatureOverview = () => {
  return (
    <section id="features" aria-labelledby="features-heading" className="bg-primary text-black">
      <div className="relative z-20 mt-auto w-full rounded-t-3xl bg-background px-3 py-8 text-foreground shadow-[0_-20px_50px_rgba(0,0,0,0.1)] sm:rounded-t-4xl sm:px-5 sm:py-10 md:px-10 md:py-16">
        <div className="container mx-auto flex flex-col items-center">
          <div className="flex flex-col items-center text-center mb-16 w-full max-w-4xl">
            <p className="mb-4 text-[10px] md:text-xs font-black uppercase tracking-[0.15em] text-muted-foreground" aria-hidden>
              Overview
            </p>
            <HeroText shadowColor="var(--secondary)" className="text-4xl md:text-7xl mb-10 text-black">
              EVERYTHING BUILT IN
            </HeroText>
            <p className="m-0 max-w-[50ch] text-xl md:text-2xl leading-snug text-black font-black ">
              Simple tools for modern tactile experiences. <span className="text-primary">Native, reliable, and ridiculously easy to setup.</span>
            </p>
          </div>

          <div className="m-0 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full pb-20 mt-10">
            {cards.map((c, index) => (
              <div
                key={c.title}
                className={clsx(
                  "group relative flex flex-col items-start overflow-hidden rounded-3xl border-4 border-black bg-white p-4 text-left shadow-[8px_8px_0_black] transition-all hover:-translate-x-1 hover:-translate-y-2 sm:rounded-4xl sm:p-5 md:p-8 lg:p-10",
                  index % 3 === 0 ? "rotate-1" : index % 3 === 1 ? "-rotate-1" : "rotate-0"
                )}
              >
                {/* Subtle Decorative Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                  style={{ backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

                <CardHeader className="flex flex-col w-full items-start relative z-10 p-0 mb-6">
                  <CardTitle className="font-[1000] uppercase w-full text-2xl md:text-3xl tracking-tighter text-black">
                    {c.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex flex-col items-start flex-1 relative z-10 p-0 gap-8 w-full">
                  <CardDescription className="w-full text-lg leading-relaxed font-bold text-black/60 italic">
                    {c.description}
                  </CardDescription>

                  <Link
                    href={c.href}
                    className={clsx(
                      'group/btn relative inline-flex w-full items-center justify-between rounded-2xl bg-black p-4 px-6 mt-auto font-black text-xs uppercase tracking-[0.2em] text-white shadow-[4px_4px_0_rgba(0,0,0,0.3)] transition-[transform,box-shadow,background-color] hover:bg-primary',
                      neoPressShadow4,
                    )}
                  >
                    {c.linkLabel}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-2" strokeWidth={4} />
                  </Link>
                </CardContent>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
