'use client';

import React from 'react';
import clsx from 'clsx';
import { HeroText } from '@/src/components/ui/hero-text';
import { Button } from '@/src/components/ui/button';
import copy from 'copy-to-clipboard';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';
import { CheckCircle2, AlertCircle, Copy } from 'lucide-react';
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
    <section id="setup" className="p-8 md:p-16 lg:py-24 bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">

        {/* Left Column: COMPATIBILITY (Extracted) */}
        <Compatibility className="w-full flex-1" />

        {/* Right Column: INSTALLATION */}
        <div className="lg:pt-2 w-full flex-1 mb-20">
          <div className="mb-20 pr-4">
            <HeroText
              shadowColor="#000000"
              className="mb-10 text-4xl md:text-5xl lg:text-7xl text-primary leading-none uppercase tracking-tight text-right rotate-1"
            >
              INSTALL
            </HeroText>
            <p className="text-xl font-bold max-w-lg text-black/80 leading-relaxed text-right ml-auto">
              One command. Zero config. Just add the provider and start <span className="text-[#0038FF] italic">vibrating</span> your users' worlds.
            </p>
          </div>

          <div className="relative group">
            {/* Redesigned Installation Card - Terminal Style */}
            <div className="absolute -inset-1 bg-black rounded-[2.5rem] blur-sm opacity-10 group-hover:opacity-20 transition duration-1000"></div>
            
            <div className="relative overflow-hidden border-4 border-black bg-white rounded-[2.5rem] shadow-[12px_12px_0_black] transition-all hover:scale-[1.01] w-full">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 p-6 border-b-4 border-black bg-black/5">
                <div className="flex gap-1.5 shrink-0">
                  <div className="size-3 rounded-full bg-red-500 border-2 border-black" />
                  <div className="size-3 rounded-full bg-yellow-500 border-2 border-black" />
                  <div className="size-3 rounded-full bg-green-500 border-2 border-black" />
                </div>
                <div className="ml-4 font-black text-[10px] uppercase tracking-widest opacity-40 truncate">System Setup</div>
                <div className="ml-auto flex items-center gap-2 shrink-0">
                  <span className="hidden sm:inline-flex px-2 py-0.5 bg-[#0038FF] text-white text-[8px] font-black rounded-lg rotate-3 shadow-[2px_2px_0_black]">v1.0.1</span>
                  <span className="px-2 py-0.5 bg-[#CCFF00] text-black text-[8px] font-black rounded-lg -rotate-2 border border-black/10">VERIFIED</span>
                </div>
              </div>

              <div className="p-8 space-y-8">
                <div
                  className="flex w-full flex-wrap gap-2 justify-start"
                  role="tablist"
                  aria-label="Package manager"
                >
                  {MANAGERS.map((id) => (
                    <Button
                      key={id}
                      variant="outline"
                      size="sm"
                      className={clsx(
                        'h-9 min-w-22 rounded-xl text-[10px] font-[1000] uppercase tracking-widest transition-all border-2 border-black shadow-[3px_3px_0_black] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none',
                        pm === id ? 'bg-primary text-white' : 'bg-white text-black/60 hover:text-black hover:bg-black/5'
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
                  className="w-full relative"
                >
                  <button
                    type="button"
                    onClick={onCopy}
                    className={clsx(
                      "group relative flex h-20 md:h-24 w-full cursor-pointer items-center overflow-hidden rounded-4xl border-4 border-black px-4 md:px-8 md:pr-20 text-left font-mono text-[0.85rem] sm:text-[1.1rem] md:text-[1.2rem] font-bold transition-all active:scale-[0.98]",
                      copying ? "bg-[#CCFF00] text-black" : "bg-black/5 text-black hover:bg-black/10"
                    )}
                    aria-label={`Copy install command: ${line}`}
                  >
                    <AnimatePresence>
                      {copying && (
                        <motion.div 
                          className="absolute inset-0 bg-[#CCFF00]/20"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        />
                      )}
                    </AnimatePresence>
                    <span className="min-w-0 flex-1 select-all overflow-x-auto whitespace-nowrap pr-1 [-webkit-overflow-scrolling:touch] relative z-10">
                      <span className="text-[#0038FF] font-[1000]">$</span> {line}
                    </span>
                    <span
                      className="absolute right-5 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-2xl bg-[#CCFF00] text-black border-4 border-black transition-all group-hover:scale-110 group-hover:rotate-6 shadow-[4px_4px_0_black]"
                      aria-hidden
                    >
                      {mounted ? (
                        <MotionConfig transition={{ duration: 0.15 }}>
                          <AnimatePresence initial={false} mode="wait">
                            {copying ? (
                              <motion.div animate="visible" exit="hidden" initial="hidden" key="check" variants={variants}>
                                <CheckCircle2 size={22} strokeWidth={4} />
                              </motion.div>
                            ) : (
                              <motion.div animate="visible" exit="hidden" initial="hidden" key="copy" variants={variants}>
                                <Copy size={22} strokeWidth={4} />
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </MotionConfig>
                      ) : (
                        <span className="h-12 w-12" />
                      )}
                    </span>
                  </button>
                </div>
              </div>

              {/* Usage Guideline Footer */}
              <div className="pt-6 border-t-4 border-black/5 flex items-start gap-4 bg-black/2 p-8">
                <div className="p-3 bg-primary/10 rounded-2xl border-2 border-primary/20 shadow-[2px_2px_0_var(--primary)]">
                  <AlertCircle size={20} className="text-primary" strokeWidth={4} />
                </div>
                <div className="space-y-1">
                  <p className="font-black text-[10px] uppercase tracking-widest text-primary opacity-50">Usage Guideline</p>
                  <p className="font-bold text-sm lg:text-[15px] leading-tight text-black italic">
                    Mount the provider at the root level to enjoy tactile feedback across any component instantly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
