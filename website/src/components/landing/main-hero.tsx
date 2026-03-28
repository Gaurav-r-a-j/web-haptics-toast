import { motion } from 'motion/react';
import Link from 'next/link';
import { toast, triggerHaptic } from 'web-haptics-toast';
import { Copy, Check } from 'lucide-react';
import { HeroText } from '@/src/components/ui/hero-text';
import { Button } from '@/src/components/ui/button';
import { ArrowGreenLeft, ArrowGreenRight, CircularBadge } from '../icons/arrows';
import { HeroActionTray } from './hero-action-tray';
import { ParticlesProvider } from '@/src/components/shared/emoji-particles';
import React from 'react';

export const MainHero = ({ 
  haptics = true, 
  hapticsDebug = false 
}: { 
  haptics?: boolean; 
  hapticsDebug?: boolean;
}) => {
  const [shaking, setShaking] = React.useState(false);

  const handleBuzz = () => {
    setShaking(true);
    window.setTimeout(() => setShaking(false), 1000);
  };

  return (
    <ParticlesProvider>
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
                <HeroText className='leading-[0.85]'>WEB</HeroText>
                <HeroText className={`text-[clamp(4.6rem,12vw,180px)] text-white leading-[0.85] transition-transform ${shaking ? 'animate-haptics-shake' : ''}`}>
                  HAPTICS
                </HeroText>
                <HeroText className={`text-[clamp(4.6rem,12vw,180px)] text-white leading-[0.85] transition-transform ${shaking ? 'animate-haptics-shake' : ''}`}>
                  TOAST
                </HeroText>
              </div>

              {/* Action Row - 4 buttons centered below the stack */}
              <div className="relative flex flex-col items-center w-full mt-12 md:mt-20">
                {/* Decorative Arrow flanking on the left */}
                <div className="absolute -left-[5%] md:left-[-5%] top-1/2 -translate-y-1/2 w-24 h-24 md:w-40 md:h-40 pointer-events-none z-0">
                  <ArrowGreenLeft />
                </div>

                {/* Badge flanking the button row on the right - Made smaller and linked */}
                <Link
                  href="/docs"
                  className="absolute -right-[8%] md:-right-[18%] top-1/2 -translate-y-1/2 pointer-events-auto z-20 transition-transform active:scale-90"
                >
                  <CircularBadge className="w-16 h-16 md:w-24 md:h-24" />
                </Link>

                <HeroActionTray 
                  onBuzz={handleBuzz} 
                  haptics={haptics} 
                  hapticsDebug={hapticsDebug} 
                />

                {/* NPM Command Bar */}
                <div className="mt-8 md:mt-10 relative z-10">
                  <div
                    className="bg-background rounded-full px-5 py-2.5 md:px-8 md:py-4 flex items-center gap-3 md:gap-4 shadow-lg hover:shadow-xl transition-all cursor-pointer group"
                    onClick={() => {
                      const command = 'npm i web-haptics-toast';
                      navigator.clipboard.writeText(command);
                      toast.success('Copied to clipboard!', {
                        description: command,
                        duration: 2000
                      });
                    }}
                  >
                    <code className="text-primary font-mono text-sm md:text-lg font-bold">
                      <span className="opacity-70 select-none mr-2">$</span>
                      npm i web-haptics-toast
                    </code>

                    <div className="p-1.5 rounded-full  transition-colors">
                      <Copy className="w-3.5 h-3.5 md:w-5 md:h-5 text-secondary-foreground" />
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Absolute Overlays (Arrows, Badge) */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">

              {/* Floating Arrow Accent - Moved to Right Bottom where badge was */}
              <div className="absolute bottom-[2%] md:bottom-[0%] right-[2%] md:right-[-2%] z-40 pointer-events-none w-28 h-28 md:w-40 md:h-40">
                <ArrowGreenRight className="rotate-45" />
              </div>

            </div>
          </div>
        </main>
      </div>
    </ParticlesProvider>
  );
};
