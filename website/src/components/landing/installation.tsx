'use client';

import React from 'react';
import clsx from 'clsx';
import copy from 'copy-to-clipboard';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Copy, Terminal } from 'lucide-react';
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

/**
 * Full-width calm header, then terminal (wide) + compatibility (narrow).
 * Everything is tonal surfaces + shadows — no borders.
 */
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
    <section id="setup" className="bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6">
        <div className="mb-10 max-w-2xl md:mb-14">
          <p className="m-0 mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
            Install
          </p>
          <h2 className="m-0 text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-6xl">
            One command. <span className="text-primary">You&apos;re done.</span>
          </h2>
          <p className="mt-4 text-lg font-normal leading-relaxed text-muted-foreground">
            Install it, drop the Toaster in your root layout, and every toast can buzz.
            No providers, no config files, nothing to wire up.
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Terminal (wide, left) */}
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-3xl bg-card shadow-card">
              {/* Terminal header */}
              <div className="flex items-center gap-3 bg-muted/70 px-5 py-3.5 sm:px-6">
                <Terminal className="size-4 text-muted-foreground" strokeWidth={2.5} />
                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Quick start
                </span>
                <span className="ml-auto rounded-md bg-primary/10 px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-widest text-primary">
                  v1.0.1 · verified
                </span>
              </div>

              <div className="space-y-6 p-5 sm:p-7 md:p-8">
                <div
                  className="flex w-full flex-wrap gap-1.5 rounded-2xl bg-muted p-1"
                  role="tablist"
                  aria-label="Package manager"
                >
                  {MANAGERS.map((id) => (
                    <button
                      key={id}
                      className={clsx(
                        'h-8 flex-1 rounded-xl px-4 text-[10px] font-semibold uppercase tracking-widest transition-colors duration-200',
                        pm === id
                          ? 'bg-background text-foreground shadow-card'
                          : 'text-muted-foreground hover:text-foreground',
                      )}
                      onClick={() => setPm(id)}
                      role="tab"
                      aria-selected={pm === id}
                      aria-controls={`install-panel-${id}`}
                      id={`install-tab-${id}`}
                    >
                      {id}
                    </button>
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
                    className={clsx(
                      'group flex h-16 w-full items-center overflow-hidden rounded-xl px-4 text-left font-mono text-[0.9rem] font-semibold transition-colors duration-200 sm:h-[4.5rem] sm:px-5 md:text-[1.05rem]',
                      copying
                        ? 'bg-primary/10 text-foreground'
                        : 'bg-muted text-foreground hover:bg-accent',
                    )}
                    aria-label={`Copy install command: ${line}`}
                  >
                    <span className="min-w-0 flex-1 select-all overflow-x-auto whitespace-nowrap pr-3 [-webkit-overflow-scrolling:touch]">
                      <span className="mr-2 font-semibold text-primary">$</span>
                      {line}
                    </span>
                    <span
                      className={clsx(
                        'flex size-10 shrink-0 items-center justify-center rounded-lg transition-colors duration-200',
                        copying ? 'bg-primary text-primary-foreground' : 'bg-background text-muted-foreground',
                      )}
                      aria-hidden
                    >
                      {mounted ? (
                        <AnimatePresence initial={false} mode="wait">
                          {copying ? (
                            <motion.div animate="visible" exit="hidden" initial="hidden" key="check" variants={variants}>
                              <CheckCircle2 size={18} strokeWidth={2.5} />
                            </motion.div>
                          ) : (
                            <motion.div animate="visible" exit="hidden" initial="hidden" key="copy" variants={variants}>
                              <Copy size={18} strokeWidth={2.5} />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      ) : (
                        <span className="size-5" />
                      )}
                    </span>
                  </button>
                </div>

                {/* Usage note */}
                <div className="flex items-start gap-3 rounded-xl bg-muted/50 p-4">
                  <div className="mt-0.5 size-1.5 shrink-0 rounded-full bg-primary" />
                  <p className="m-0 text-sm font-normal leading-relaxed text-muted-foreground">
                    That&apos;s it — add <code>&lt;Toaster /&gt;</code> to your root layout and
                    every toast fires with haptics out of the box.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Compatibility (narrow, right) */}
          <Compatibility className="lg:col-span-5" />
        </div>
      </div>
    </section>
  );
};
