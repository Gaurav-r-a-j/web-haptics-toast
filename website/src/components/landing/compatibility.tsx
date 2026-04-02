'use client';

import React from 'react';
import { HeroText } from '@/src/components/ui/hero-text';
import { Card, CardContent } from '@/src/components/ui/card';
import { motion } from 'framer-motion';
import { CheckCircle2, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export const Compatibility = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <div className="mb-8 px-0 sm:px-1 md:mb-16 md:px-2">
        <HeroText
          shadowColor="#000000"
          className="mb-6 text-4xl md:text-5xl lg:text-7xl text-primary leading-none uppercase tracking-tight -rotate-2"
        >
          COMPATIBILITY
        </HeroText>
        <p className="text-xl font-bold max-w-lg text-black/80 leading-relaxed mb-10 translate-x-2">
          Zero compromises. Native feedback for Android, sophisticated fallbacks for iOS, and <span className="text-primary italic">full simulation</span> for Desktop.
        </p>
      </div>

      <div className="relative group">
        <div
          className="absolute -inset-1 bg-linear-to-r from-primary/10 via-primary/5 to-transparent rounded-4xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"
        ></div>
        <Card
          className="shadow-none overflow-hidden group transition-all relative bg-card border border-black/5 rounded-4xl"
          style={{
            boxShadow: Array.from({ length: 8 }, (_, i) => {
              const val = i + 1;
              return `${val}px ${val}px 0 var(--secondary-foreground)`;
            }).join(', ')
          }}
        >
          <CardContent className="relative flex flex-col items-stretch gap-6 p-4 sm:gap-8 sm:p-6 md:flex-row md:p-12">
            {/* Platform Grid */}
            <div className="flex-1 space-y-6">
              <div className="group/card flex items-start gap-4 p-6 rounded-3xl bg-white border-4 border-black hover:bg-white transition-all shadow-[8px_8px_0_black] rotate-1 relative overflow-hidden">
                <div className="mt-1 relative shrink-0">
                  <div className="size-12 bg-[#CCFF00] rounded-xl border-4 border-black rotate-12 flex items-center justify-center shadow-[4px_4px_0_black]">
                    <CheckCircle2 className="size-6 text-black" strokeWidth={4} />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-black uppercase text-primary tracking-tighter">ANDROID</h3>
                    <span className="px-2 py-0.5 bg-black text-[#CCFF00] text-[8px]  rounded-lg tracking-widest uppercase">Native</span>
                  </div>
                  <p className="text-sm font-bold text-black opacity-70 leading-relaxed max-w-[200px]">
                    Perfect Vibration API integration for all mobile browsers.
                  </p>
                </div>

                {/* Haptic Pulse Visualization */}
                <div className="absolute right-4 bottom-4 flex items-center gap-1 opacity-20 group-hover/card:opacity-100 transition-opacity">
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ height: [4, 16, 4] }}
                      transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                      className="w-1 bg-[#CCFF00] rounded-full border border-black/10"
                    />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="group/card flex items-start gap-3 p-5 rounded-3xl bg-white border-4 border-black hover:bg-white transition-all shadow-[6px_6px_0_black] -rotate-2 relative">
                  <div className="relative shrink-0">
                    <div className="size-10 bg-[#CCFF00] rounded-lg border-4 border-black -rotate-12 flex items-center justify-center shadow-[3px_3px_0_black]">
                      <CheckCircle2 className="size-5 text-black" strokeWidth={4} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-black text-[10px] uppercase tracking-widest text-primary">iOS</h4>
                      <span className="px-1.5 py-0.5 bg-black text-[#CCFF00] text-[6px] font-black rounded-md tracking-widest uppercase italic">CORE</span>
                    </div>
                    <p className="font-bold text-[11px] leading-tight opacity-80 text-black italic">WebKit support. <b>Native iPhone feel.</b></p>
                  </div>
                </div>

                <div className="group/card flex items-start gap-3 p-5 rounded-3xl bg-white border-4 border-black hover:bg-white transition-all shadow-[6px_6px_0_black] rotate-2 relative">
                  <div className="relative shrink-0">
                    <div className="size-10 bg-[#CCFF00] rounded-lg border-4 border-black rotate-6 flex items-center justify-center shadow-[3px_3px_0_black]">
                      <CheckCircle2 className="size-5 text-black" strokeWidth={4} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-black text-[10px] uppercase tracking-widest text-primary">Desktop</h4>
                      <span className="px-1.5 py-0.5 bg-black text-[#CCFF00] text-[6px] font-black rounded-md tracking-widest uppercase italic">Simulation</span>
                    </div>
                    <p className="font-bold text-[11px] leading-tight opacity-80 italic text-black">Full audio-haptic simulation experience.</p>
                  </div>
                </div>
              </div>

              {/* Bottom Buttons - Full Width 50/50 */}
              <div className="flex items-center gap-4 w-full pt-4">
                <Link
                  href="/haptics"
                  className="flex-1 px-6 py-4 bg-primary text-primary-foreground rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:scale-[1.02] transition-transform shadow-[6px_6px_0_var(--secondary-foreground)] border-2 border-black text-center"
                >
                  Read Docs
                </Link>
                <Link
                  href="https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API"
                  target="_blank"
                  className="flex-1 px-6 py-4 bg-[#CCFF00] text-black rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:scale-[1.02] transition-transform shadow-[6px_6px_0_var(--secondary-foreground)] border-2 border-black flex items-center justify-center gap-2"
                >
                  MDN <ExternalLink className="size-4" strokeWidth={3} />
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>


    </div>
  );
};

