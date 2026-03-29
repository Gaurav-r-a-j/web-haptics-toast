'use client';

import React from 'react';
import clsx from 'clsx';
import { HeroText } from '@/src/components/ui/hero-text';
import copy from 'copy-to-clipboard';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';

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
    <div className="p-8 md:p-16 lg:py-20 border-b border-border text-foreground bg-background">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <HeroText shadowColor="#cfd9fc" className="text-4xl md:text-5xl lg:text-7xl mb-12 text-primary leading-none uppercase text-center w-full">
          INSTALLATION
        </HeroText>
        <p className="m-0 mb-12 max-w-2xl text-center text-lg md:text-xl font-bold leading-relaxed text-muted-foreground">
          Deploy the package, mount the provider near your root, and start triggering tactile feedback instantly.
        </p>

        <div
          className="mb-3 flex w-full max-w-3xl flex-wrap gap-2"
          role="tablist"
          aria-label="Package manager"
        >
        {MANAGERS.map((id) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={pm === id}
            aria-controls={`install-panel-${id}`}
            id={`install-tab-${id}`}
            className={clsx(
              'h-9 min-w-[4.25rem] rounded-md border px-3 text-xs font-semibold uppercase tracking-[0.04em] transition-[border-color,background,color] focus:outline-none focus-visible:shadow-focus-ring',
              pm === id
                ? 'border-primary bg-background text-foreground'
                : 'border-border bg-secondary text-muted-foreground hover:border-muted-foreground hover:text-foreground',
            )}
            onClick={() => setPm(id)}
          >
            {id}
          </button>
        ))}
      </div>

      <div
        id={`install-panel-${pm}`}
        role="tabpanel"
        aria-labelledby={`install-tab-${pm}`}
        className="max-w-3xl w-full"
      >
        <button
          type="button"
          onClick={onCopy}
          className="relative flex h-11 w-full cursor-pointer items-center overflow-hidden rounded-sm border border-border bg-secondary px-3 pr-12 text-left font-mono text-[0.875rem] leading-[1.5] text-foreground transition-[border-color,box-shadow] duration-200 hover:border-muted-foreground focus:outline-none focus-visible:shadow-focus-ring"
          aria-label={`Copy install command: ${line}`}
        >
          <span className="min-w-0 flex-1 select-all overflow-x-auto whitespace-nowrap pr-1 [-webkit-overflow-scrolling:touch]">
            {line}
          </span>
          <span
            className="pointer-events-none absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-sm border border-border bg-background text-foreground [&>div]:flex"
            aria-hidden
          >
            {mounted ? (
              <MotionConfig transition={{ duration: 0.15 }}>
                <AnimatePresence initial={false} mode="wait">
                  {copying ? (
                    <motion.div animate="visible" exit="hidden" initial="hidden" key="check" variants={variants}>
                      <svg
                        viewBox="0 0 24 24"
                        width="14"
                        height="14"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        shapeRendering="geometricPrecision"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </motion.div>
                  ) : (
                    <motion.div animate="visible" exit="hidden" initial="hidden" key="copy" variants={variants}>
                      <svg
                        viewBox="0 0 24 24"
                        width="14"
                        height="14"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        shapeRendering="geometricPrecision"
                      >
                        <path d="M8 17.929H6c-1.105 0-2-.912-2-2.036V5.036C4 3.91 4.895 3 6 3h8c1.105 0 2 .911 2 2.036v1.866m-6 .17h8c1.105 0 2 .91 2 2.035v10.857C20 21.09 19.105 22 18 22h-8c-1.105 0-2-.911-2-2.036V9.107c0-1.124.895-2.036 2-2.036z"></path>
                      </svg>
                    </motion.div>
                  )}
                </AnimatePresence>
              </MotionConfig>
            ) : (
              <span className="h-7 w-7" />
            )}
          </span>
        </button>
        </div>
      </div>
    </div>
  );
};
