'use client';

import React from 'react';
import Link from 'next/link';
import { HeroText } from '@/src/components/ui/hero-text';
import { Button } from '@/src/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/src/components/ui/card';


const NavButton = ({ href, children, variant = "secondary" as const }: { href: string; children: React.ReactNode; variant?: "secondary" | "outline" }) => (
  <Button
    variant={variant}
    size="sm"
    asChild
    className={`rounded-2xl px-8 py-4 font-black uppercase text-xs h-auto transition-all active:scale-95 border-2 border-black/10 hover:-translate-y-1 hover:-translate-x-1 ${variant === 'outline' ? 'border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10' : 'bg-secondary text-secondary-foreground shadow-none'
      }`}
    style={{
      boxShadow: '4px 4px 0 #000000'
    }}
  >
    <Link href={href} target={href.startsWith('http') ? '_blank' : undefined} className="flex items-center gap-2">
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
      <div id="why" className="overflow-hidden rounded-t-[2.5rem] md:rounded-t-[4rem] border-0 bg-primary text-primary-foreground py-16 md:py-28 relative px-6 md:px-10">

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
            <div className="flex-1 space-y-2 md:space-y-4 w-full">
              <HeroText shadowColor="#000000" className="text-4xl md:text-6xl lg:text-7xl mb-0 text-primary-foreground leading-none uppercase tracking-tighter">
                WHY TO USE
              </HeroText>
              <HeroText shadowColor="#000000" className="text-5xl md:text-7xl lg:text-8xl mb-0 text-secondary leading-none uppercase tracking-tighter">
                WEB HAPTICS<br />TOAST
              </HeroText>
            </div>

            <div className="flex-1 w-full">
              <p className="m-0 text-xl md:text-2xl lg:text-4xl text-primary-foreground font-black leading-[1.1] tracking-tight">
                Toasts are too easy to ignore. Vibration cuts through the noise.
              </p>
              <p className="m-0 text-base md:text-lg text-primary-foreground/70 mt-2 md:mt-4 font-semibold leading-relaxed max-w-xl">
                Ever wonder why native apps feel &quot;snappier&quot;? It&apos;s the subtle physical feedback we don&apos;t consciously notice.
                Bridge the gap. No more double-clicking because they &quot;didn&apos;t see&quot; the message.
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
    </section>
  );
};

