import { motion } from 'motion/react';
import Link from 'next/link';
import { toast, triggerHaptic } from 'web-haptics-toast';
import { HeroText } from '@/src/components/ui/hero-text';
import { Button } from '@/src/components/ui/button';
import { ArrowGreenLeft, ArrowGreenRight, CircularBadge } from '../icons/arrows';

export const MainHero = () => {
  return (
    <div className="min-h-screen bg-primary flex flex-col font-sans selection:bg-secondary selection:text-black relative overflow-hidden w-full pt-16">

      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-size-[4rem_4rem] pointer-events-none z-0"></div>

      {/* Hero Section */}
      <main className="flex-1 relative z-10 pt-8 pb-32 md:pt-12 md:pb-48 px-4 flex flex-col items-center justify-center w-full max-w-[1440px] mx-auto">

        {/* Massive Typography & Elements Container */}
        <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center z-10 mt-4 mb-16">

          {/* Centered Vertical Stack */}
          <div className="w-full flex flex-col items-center relative z-10 space-y-2 md:space-y-4">

            {/* Massive Typed Stack */}
            <div className="flex flex-col items-center">
              <HeroText>#WEB</HeroText>
              <HeroText className="text-[clamp(4.6rem,12vw,180px)] text-white">
                HAPTICS
              </HeroText>
              <HeroText className="text-[clamp(4.6rem,12vw,180px)] text-white">
                TOAST
              </HeroText>
            </div>

            {/* Action Row - 4 buttons centered below the stack */}
            <div className="relative flex flex-col items-center w-full mt-12 md:mt-20">
              {/* Decorative Arrow flanking on the left */}
              <div className="absolute -left-[5%] md:left-[0%] top-1/2 -translate-y-1/2 w-24 h-24 md:w-40 md:h-40 pointer-events-none z-0">
                <ArrowGreenLeft />
              </div>

              {/* Badge flanking the button row on the right - Made smaller and linked */}
              <Link
                href="/docs"
                className="absolute -right-[8%] md:-right-[18%] top-1/2 -translate-y-1/2 pointer-events-auto z-20 transition-transform active:scale-90"
              >
                <CircularBadge className="w-16 h-16 md:w-24 md:h-24" />
              </Link>

              <div className="relative z-10 flex flex-wrap justify-center gap-3 md:gap-5 max-w-4xl mx-auto px-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full text-base md:text-xl font-black h-auto px-6 py-3"
                  onClick={() => {
                    toast('Success', { description: 'Haptic: success', haptics: false });
                    triggerHaptic('success');
                  }}
                >
                  <span className="text-xl md:text-2xl leading-none">✅</span> Success
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  className="rounded-full text-base md:text-xl font-black h-auto px-6 py-3"
                  onClick={() => {
                    toast('Nudge', { description: 'Haptic: nudge', haptics: false });
                    triggerHaptic('nudge');
                  }}
                >
                  <span className="text-xl md:text-2xl leading-none">👉</span> Nudge
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  className="rounded-full text-base md:text-xl font-black h-auto px-6 py-3"
                  onClick={() => {
                    toast('Error', { description: 'Haptic: error', haptics: false });
                    triggerHaptic('error');
                  }}
                >
                  <span className="text-xl md:text-2xl leading-none">🚨</span> Error
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full text-base md:text-xl font-black h-auto px-6 py-3"
                  onClick={() => {
                    toast('Buzz', { description: 'Haptic: buzz', haptics: false });
                    triggerHaptic('buzz');
                  }}
                >
                  <span className="text-xl md:text-2xl leading-none">🐝</span> Buzz
                </Button>
              </div>
            </div>

          </div>

          {/* Absolute Overlays (Arrows, Badge) */}
          <div className="absolute inset-0 w-full h-full pointer-events-none">

            {/* Floating Arrow Accent - Moved to Right Bottom where badge was */}
            <div className="absolute bottom-[2%] md:bottom-[5%] right-[2%] md:right-[5%] z-40 pointer-events-none w-28 h-28 md:w-40 md:h-40">
              <ArrowGreenRight className="rotate-45" />
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};
