'use client';

import React from 'react';
import Link from 'next/link';
import { HeroText } from '@/src/components/ui/hero-text';
import { Button } from '@/src/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/src/components/ui/card';


const NavButton = ({ href, children, variant = "secondary" as const }: { href: string; children: React.ReactNode; variant?: "secondary" | "outline" }) => (
  <Button
    variant={variant}
    size="lg"
    asChild
    className={`rounded-full px-10 py-5 font-black uppercase text-xs h-auto transition-all active:scale-95 ${variant === 'outline' ? 'border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10' : ''
      }`}
  >
    <Link href={href} target={href.startsWith('http') ? '_blank' : undefined}>
      {children}
    </Link>
  </Button>
);

const CompatibilityCard = ({ title, status, desc, color }: { title: string; status: string; desc: string; color: string }) => (
  <Card className="p-8 border-border bg-card hover:border-primary/40 transition-all group rounded-3xl shadow-none flex flex-col justify-between h-full">
    <CardHeader className="p-0 mb-2 flex-row items-center justify-between">
      <CardTitle className="text-xs font-black uppercase leading-none text-foreground">
        {title}
      </CardTitle>
      {/* <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase border ${color}`}>
        {status}
      </span> */}
    </CardHeader>
    <CardContent className="p-0">
      <CardDescription className="text-sm font-bold text-muted-foreground/80 m-0 leading-relaxed">
        {desc}
      </CardDescription>
    </CardContent>
  </Card>
);

export const Highlight = () => {
  return (
    <section aria-label="Tactile Experience Highlights" className="space-y-0 text-left w-full font-sans">

      {/* 🚀 PHILOSOPHY SECTION (FIRST) */}
      <div id="why" className="overflow-hidden rounded-t-[4rem] border-0 bg-primary text-primary-foreground py-20 md:py-28 relative px-4">

        <div className="relative z-10 max-w-7xl container mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 items-start">
            <div className="flex-1 space-y-4">
              <HeroText shadowColor="#000000" className="text-4xl md:text-6xl lg:text-7xl mb-0 text-primary-foreground leading-none uppercase">
                WHY TO USE
              </HeroText>
              <HeroText shadowColor="#000000" className="text-6xl md:text-7xl lg:text-8xl mb-0 text-secondary leading-none uppercase">
                WEB HAPTICS<br />TOAST
              </HeroText>
            </div>

            <div className="flex-1">
              <p className="m-0 text-2xl md:text-3xl lg:text-4xl  text-primary-foreground font-black leading-[1.1]">
                Toasts are too easy to ignore. Vibration cuts through the noise.
              </p>
              <p className="m-0 text-base md:text-lg text-primary-foreground/70 mt-2 md:mt-4 font-semibold leading-relaxed max-w-xl">
                Ever wonder why native apps feel "snappier"? It's the subtle physical feedback we don't consciously notice.
                Bridge the gap. No more double-clicking because they "didn't see" the message.
              </p>

              <ul className="m-0 list-none mt-4 md:mt-8 lg:mt-10 space-y-4">
                {[
                  "Confirm actions without visual clutter.",
                  "Reduce user anxiety through physical feedback.",
                  "Elite tactile feel for modern web apps."
                ].map((text, i) => (
                  <li key={text} className="flex items-center gap-4 text-xs md:text-sm lg:text-base font-semibold capitalize text-secondary">
                    <span className="h-2 w-2 rounded-full bg-secondary shrink-0" />
                    {text}
                  </li>
                ))}
              </ul>

              <div className="pt-8">
                <NavButton href="/haptics">Explore Documentation</NavButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 📱 COMPATIBILITY SECTION (SECOND) */}
      <div id="compatibility" className="bg-background text-foreground p-8 md:p-16 lg:py-20 border-0 relative border-y border-border">
        <div className="relative z-10 max-w-7xl container mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
            <div className="max-w-4xl">
              <HeroText shadowColor="var(--secondary)" className="text-4xl md:text-6xl lg:text-7xl mb-0 text-primary leading-none uppercase">
                COMPATIBILITY
              </HeroText>
            </div>
            <div className="md:text-right">
              <p className="m-0 text-muted-foreground font-black uppercase text-[10px]">
                CHECK <Link href="https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API" target="_blank" className="text-primary underline">MDN VIBRATION API</Link>
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3 w-full">
            <CompatibilityCard
              title="Chrome / Edge / Firefox"
              status="Pure Native"
              desc="Full Vibration API support. Hardware-level haptic feedback for 3.5B+ devices."
              color="text-primary border-primary/20"
            />
            <CompatibilityCard
              title="Safari (iOS / macOS)"
              status="Clean Fallback"
              desc="Safari does not yet expose haptic engines. Components retain perfect visual state."
              color="text-muted-foreground border-muted-foreground/20"
            />
            <CompatibilityCard
              title="Desktop Environments"
              status="Debug Simulation"
              desc="Simulates tactile patterns via high-fidelity audio during development phases."
              color="text-muted-foreground border-muted-foreground/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
