'use client';

import React from 'react';
import clsx from 'clsx';
import { HeroText } from '@/src/components/ui/hero-text';
import { Button } from '@/src/components/ui/button';
import { Card, CardContent, CardTitle, CardHeader, CardDescription } from '@/src/components/ui/card';
import copy from 'copy-to-clipboard';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';
import { CheckCircle2, AlertCircle, Copy, Info } from 'lucide-react';
import { Compatibility } from './compatibility';

const variants = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0.5 },
};

const MANAGERS = ['npm', 'yarn', 'pnpm', 'bun'] as const;
type PackageManager = (typeof MANAGERS)[number];

const INSTALL_LINES: Record<PackageManager, string> = {
  npm: 'npm install web-haptics-toast',
  yarn: 'yarn add web-haptics-toast',
  pnpm: 'pnpm add web-haptics-toast',
  bun: 'bun add web-haptics-toast',
};

export const Installation = () => {
  const [pm, setPm] = React.useState<PackageManager>('npm');
  const [copying, setCopying] = React.useState(0);
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  const line = INSTALL_LINES[pm];

  const onCopy = React.useCallback(() => {
    copy(line);
    setCopying((c) => c + 1);
    setTimeout(() => setCopying((c) => c - 1), 2000);
  }, [line]);

  return (
    <section id="setup" className="p-8 md:p-16 lg:py-24 border-b border-border bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        
        {/* Left Column: COMPATIBILITY (Extracted) */}
        <Compatibility className="w-full flex-1" />

        {/* Right Column: INSTALLATION */}
        <div className="lg:pt-2 w-full flex-1 mb-20">
          <div className="mb-20">
            <HeroText 
              shadowColor="var(--secondary-foreground)" 
              className="mb-14 text-4xl md:text-5xl lg:text-7xl text-primary leading-none uppercase tracking-tight text-right lg:text-left"
            >
              INSTALL
            </HeroText>
            <p className="text-muted-foreground font-black text-lg text-right lg:text-left opacity-70">
              One package. Total tactile control. Simple.
            </p>
          </div>

          <div className="space-y-8">
            <div
              className="flex w-full flex-wrap gap-2 justify-end lg:justify-start"
              role="tablist"
              aria-label="Package manager"
            >
              {MANAGERS.map((id) => (
                <Button
                  key={id}
                  variant={pm === id ? 'default' : 'outline'}
                  size="lg"
                  className={clsx(
                    'h-11 min-w-[5.5rem] rounded-2xl text-xs font-black uppercase tracking-widest transition-all scale-x-105',
                    pm === id ? 'shadow-none scale-110' : 'shadow-none opacity-60 hover:opacity-100'
                  )}
                  onClick={() => setPm(id)}
                  role="tab"
                  aria-selected={pm === id}
                  aria-controls={`install-panel-${id}`}
                  id={`install-tab-${id}`}
                >
                  {id}
                </Button>
              ))}
            </div>

            <div
              id={`install-panel-${pm}`}
              role="tabpanel"
              aria-labelledby={`install-tab-${pm}`}
              className="w-full"
            >
              <button
                type="button"
                onClick={onCopy}
                className="group relative flex h-16 w-full cursor-pointer items-center overflow-hidden rounded-[24px] border border-border bg-background px-6 pr-16 text-left font-mono text-[1rem] font-black text-foreground transition-all duration-300 hover:border-black/30 hover:shadow-none focus:outline-none focus:ring-2 focus:ring-primary shadow-none"
                aria-label={`Copy install command: ${line}`}
              >
                <span className="min-w-0 flex-1 select-all overflow-x-auto whitespace-nowrap pr-1 [-webkit-overflow-scrolling:touch]">
                  <span className="text-primary/50 font-black">$</span> {line}
                </span>
                <span
                  className="absolute right-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-2xl bg-primary text-primary-foreground transition-all group-hover:scale-110 group-hover:rotate-6 shadow-none"
                  aria-hidden
                >
                  {mounted ? (
                    <MotionConfig transition={{ duration: 0.15 }}>
                      <AnimatePresence initial={false} mode="wait">
                        {copying ? (
                          <motion.div animate="visible" exit="hidden" initial="hidden" key="check" variants={variants}>
                            <CheckCircle2 size={18} strokeWidth={3} />
                          </motion.div>
                        ) : (
                          <motion.div animate="visible" exit="hidden" initial="hidden" key="copy" variants={variants}>
                            <Copy size={18} strokeWidth={3} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </MotionConfig>
                  ) : (
                    <span className="h-9 w-9" />
                  )}
                </span>
              </button>
            </div>
          </div>

          <div className="pt-16">
            <Card className="shadow-none relative overflow-hidden transition-transform hover:scale-[1.01] border-border/10 bg-background/30 backdrop-blur-sm">
              <CardHeader className="pb-4 border-b border-border/10 mb-2">
                <div className="flex items-center gap-3">
                  <AlertCircle size={14} className="text-primary" strokeWidth={3} />
                  <p className="font-black uppercase text-[10px] tracking-[0.3em] opacity-70">Pro Tip</p>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="m-0 font-black text-base lg:text-lg leading-snug relative z-10">
                  Mount the provider at the root level to enjoy tactile feedback across any component instantly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

      </div>
    </section>
  );
};
