'use client';

import React from 'react';
import { HeroText } from '@/src/components/ui/hero-text';
import { Card, CardContent } from '@/src/components/ui/card';
import { CheckCircle2, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const Compatibility = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <div className="px-4 mb-20">
        <HeroText
          shadowColor="var(--secondary-foreground)"
          className="mb-14 text-4xl md:text-5xl lg:text-7xl text-primary leading-none uppercase tracking-tight"
        >
          COMPATIBILITY
        </HeroText>
        <p className="text-muted-foreground font-black text-lg max-w-xl opacity-70">
          Native Vibration API support across modern ecosystems. Reliable tactile responses as standard.
        </p>
      </div>

      <Link
        href="https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API"
        target="_blank"
        className="block"
      >
        <Card
          className="shadow-none overflow-hidden group transition-all relative p-3 md:p-6 bg-card border border-black/5"
          style={{
            boxShadow: Array.from({ length: 8 }, (_, i) => {
              const val = i + 1;
              return `${val}px ${val}px 0 var(--secondary-foreground)`;
            }).join(', ')
          }}
        >
          <CardContent className="p-0 relative">
            <Image
              src="/compatibility.webp"
              alt="Compatibility Information"
              width={500}
              height={300}
              className="object-contain w-full p-4 transition-transform duration-500 group-hover:scale-[1.02]"
              priority
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="size-12 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center shadow-2xl scale-50 group-hover:scale-100 transition-transform duration-300">
                <ExternalLink className="size-6" strokeWidth={3} />
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>


    </div>
  );
};


