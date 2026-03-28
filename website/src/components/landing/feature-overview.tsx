'use client';

import Link from 'next/link';
import { toast } from 'web-haptics-toast';
import { Check, AlertCircle, XCircle, Vibrate, ArrowRight } from 'lucide-react';
import { HeroText } from '@/src/components/ui/hero-text';
import { Button } from '@/src/components/ui/button';

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
      'Native vibration presets for every toast type. Seamlessly integrated with the Sonner core for a unified feedback experience.',
    href: '/haptics',
    linkLabel: 'Haptics guide',
  },
  {
    title: 'Per-toast haptics',
    description:
      'Granular control at the call-site. Toggle feedback for individual notifications while maintaining your global haptic configuration.',
    href: '/toast',
    linkLabel: 'Toast API',
  },
  {
    title: 'Manual triggerHaptic',
    description:
      'Direct access to the haptic engine. Trigger precise vibration patterns from any UI element without relying on toast events.',
    href: '/haptics#manual-haptics',
    linkLabel: 'Manual haptics',
  },
  {
    title: 'Sonner-compatible',
    description:
      'Zero-friction migration path. Drop-in replacement for Sonner with identical API signatures and optional npm aliasing support.',
    href: '/migration-from-sonner',
    linkLabel: 'Migration',
  },
  {
    title: 'Layout & polish',
    description:
      'Highly customizable stacks. Fine-tune positioning, expansion behaviors, and rich color themes to match your application branding.',
    href: '#position',
    linkLabel: 'Position & more',
  },
  {
    title: 'Types & promise',
    description:
      'Comprehensive status support. Native haptic feedback for success, error, loading, and promise-based state transitions.',
    href: '#types',
    linkLabel: 'Toast types',
  },
];

import { ArrowBlack1, ArrowBlack2 } from '../icons/arrows';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '../ui/card';

export const FeatureOverview = () => {
  return (
    <section id="features" aria-labelledby="features-heading" className="bg-background text-foreground rounded-t-4xl px-6 py-12 md:px-10 md:py-16 relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.1)] mt-auto w-full -translate-y-20 md:-translate-y-32">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex flex-col items-center text-center mb-16 w-full max-w-4xl">
          <p className="mb-4 text-[10px] md:text-xs font-black uppercase tracking-[0.15em] text-muted-foreground" aria-hidden>
            Overview
          </p>
          <HeroText shadowColor='#cfd9fc' className="text-4xl md:text-7xl mb-6 text-primary">
            EVERYTHING BUILT IN
          </HeroText>
          <p className="m-0 max-w-[60ch] text-[0.9375rem] md:text-lg leading-snug text-muted-foreground font-semibold">
            Standardized tools for modern haptic experiences. Built to work properly with your existing Sonner implementations.
          </p>
        </div>

        <ul className="m-0 grid list-none gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3 w-full">
          {cards.map((c, index) => (
            <Card
              key={c.title}
              className="flex flex-col items-start text-left transition-all hover:-translate-y-1 rounded-3xl border-0 group relative overflow-hidden  p-4 md:p-6 lg:p-8"
            >
              {/* Subtle Decorative Haptic Pattern Background */}
              <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>

              <CardHeader className="flex flex-col w-full items-start relative z-10 p-0">
                <CardTitle className="font-black uppercase w-full">
                  {c.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex flex-col items-start flex-1 relative z-10 p-0 gap-4 md:gap-8">
                <CardDescription className="w-full text-sm md:text-base leading-relaxed">
                  {c.description}
                </CardDescription>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="rounded-full px-8 py-3 text-[11px] font-black tracking-widest uppercase  hover:bg-primary hover:text-primary-foreground transition-all w-full flex items-center justify-between"
                >
                  <Link href={c.href}>
                    {c.linkLabel}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </ul>

      </div>
    </section>
  );
};
