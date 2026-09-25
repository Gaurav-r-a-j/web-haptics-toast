'use client';

import React from 'react';
import clsx from 'clsx';
import copy from 'copy-to-clipboard';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { CheckCircle2, Copy, Terminal, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { Reveal, softButtonClass } from '@/src/components/shared/section';

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

const PLATFORMS = [
  {
    name: 'Android',
    tag: 'Native',
    desc: 'Straight to the Vibration API — every Android browser just handles it.',
  },
  {
    name: 'iOS',
    tag: 'Fallbacks',
    desc: 'Safari blocks the Vibration API, so patterns are approximated with what WebKit allows.',
  },
  {
    name: 'Desktop',
    tag: 'Simulation',
    desc: 'Patterns play as soft clicks while you develop. Same code, just audible.',
  },
];

/**
 * Install section — full-bleed dark band in the "Why" band's design language:
 * #0a0c12 surface, lime gradient accents, glowing blue CTA, white/5 tiles.
 * Layout: asymmetric header → full-width terminal → 3-up platform row → CTAs.
 */
export const Installation = () => {
  const [pm, setPm] = React.useState<PackageManager>('npm');
  const [copying, setCopying] = React.useState(0);
  const [mounted, setMounted] = React.useState(false);
  const reduce = useReducedMotion();
  React.useEffect(() => setMounted(true), []);

  const line = INSTALL_LINES[pm];

  const onCopy = React.useCallback(() => {
    copy(line);
    setCopying((c) => c + 1);
    setTimeout(() => setCopying((c) => c - 1), 2000);
  }, [line]);

  return (
    <section
      id="setup"
      className="relative overflow-hidden scroll-mt-24 bg-muted py-16 text-foreground md:py-24 dark:bg-[#0a0c12] dark:text-zinc-50"
    >
      {/* Ambient glows — lime + blue tint in light, lime + blue in dark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(56rem 28rem at 85% -10%, rgba(204,255,0,0.22), transparent 60%), radial-gradient(40rem 26rem at -5% 115%, rgba(0,56,255,0.07), transparent 62%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden dark:block"
        style={{
          background:
            'radial-gradient(56rem 28rem at 85% -10%, rgba(204,255,0,0.08), transparent 60%), radial-gradient(40rem 26rem at -5% 115%, rgba(0,56,255,0.20), transparent 62%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-3 sm:px-4 md:px-6">
        {/* Asymmetric header: headline left, lede right */}
        <div className="mb-10 grid gap-6 md:mb-14 md:grid-cols-12 md:items-end">
          <Reveal className="md:col-span-7">
            <p className="m-0 mb-4 bg-linear-to-r from-primary to-indigo-500 bg-clip-text text-[11px] font-semibold uppercase tracking-[0.22em] text-transparent dark:from-secondary dark:to-zinc-50">
              Install
            </p>
            <h2 className="m-0 text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              One command.{' '}
              <span className="bg-linear-to-r from-primary to-indigo-500 bg-clip-text text-transparent dark:from-secondary dark:to-zinc-50">
                You&apos;re done.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="md:col-span-5">
            <p className="m-0 text-pretty text-base font-normal leading-relaxed text-muted-foreground dark:text-zinc-400 md:text-lg">
              Install it, drop the Toaster in your root layout, and every toast can buzz.
              No providers, no config files, nothing to wire up.
            </p>
          </Reveal>
        </div>

        {/* Terminal — full width, dark elevated card with lime hairline */}
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#12151d] shadow-float">
            {/* Hairline glow along the top edge (matches CodeBlock) */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(204,255,0,0.35), transparent)' }}
            />

            <div className="flex items-center gap-3 border-b border-white/5 px-5 py-3.5 sm:px-6">
              <Terminal className="size-4 text-zinc-500" strokeWidth={2.5} />
              <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-500">
                Quick start
              </span>
              <span className="ml-auto rounded-md bg-secondary/15 px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-widest text-secondary">
                v1.0.1 · verified
              </span>
            </div>

            <div className="space-y-6 p-5 sm:p-7 md:p-8">
              <div
                className="flex w-full flex-wrap gap-1.5 rounded-2xl bg-white/5 p-1"
                role="tablist"
                aria-label="Package manager"
              >
                {MANAGERS.map((id) => (
                  <button
                    key={id}
                    className={clsx(
                      'h-8 flex-1 rounded-xl px-4 text-[10px] font-semibold uppercase tracking-widest transition-colors duration-200',
                      pm === id
                        ? 'bg-white/10 text-white'
                        : 'text-zinc-500 hover:text-zinc-300',
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
                    'group flex h-16 w-full items-center overflow-hidden rounded-xl px-4 text-left font-mono text-[0.9rem] font-semibold shadow-pressed transition-colors duration-200 sm:h-[4.5rem] sm:px-5 md:text-[1.05rem]',
                    copying ? 'bg-secondary/15 text-white' : 'bg-black/40 text-zinc-100 hover:bg-black/30',
                  )}
                  aria-label={`Copy install command: ${line}`}
                >
                  <span className="min-w-0 flex-1 select-all overflow-x-auto whitespace-nowrap pr-3 [-webkit-overflow-scrolling:touch]">
                    <span className="mr-2 text-secondary">$</span>
                    {line}
                  </span>
                  <span
                    className={clsx(
                      'flex size-10 shrink-0 items-center justify-center rounded-lg transition-colors duration-200',
                      copying ? 'bg-secondary text-black' : 'bg-white/10 text-zinc-400 group-hover:text-white',
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

              <div className="flex items-start gap-3 rounded-xl bg-white/5 p-4">
                <div className="mt-0.5 size-1.5 shrink-0 rounded-full bg-secondary" />
                <p className="m-0 text-sm font-normal leading-relaxed text-zinc-400">
                  That&apos;s it — add <code className="text-zinc-200">&lt;Toaster /&gt;</code> to your root layout and
                  every toast fires with haptics out of the box.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Platform row — 3-up floating cards (light) / tiles (dark) */}
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {PLATFORMS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.06}>
              <div className="group relative h-full rounded-2xl bg-card p-5 shadow-card transition-[box-shadow,background-color] duration-300 hover:shadow-float dark:bg-white/5 dark:shadow-none dark:hover:bg-white/[0.07]">
                <div className="mb-2 flex items-center gap-2">
                  <h3 className="m-0 text-sm font-semibold tracking-tight text-foreground dark:text-zinc-100">
                    {p.name}
                  </h3>
                  <span className="rounded-md bg-primary/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-widest text-primary dark:bg-secondary/10 dark:text-secondary">
                    {p.tag}
                  </span>
                  {/* Live pulse bars on Android (decorative) */}
                  {i === 0 && (
                    <span className="ml-auto flex items-center gap-1 opacity-30 transition-opacity group-hover:opacity-100">
                      {[0, 1, 2, 3].map((b) => (
                        <motion.span
                          key={b}
                          animate={reduce ? undefined : { height: [4, 12, 4] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: b * 0.12 }}
                          className="w-1 rounded-full bg-primary/70 dark:bg-secondary/70"
                        />
                      ))}
                    </span>
                  )}
                </div>
                <p className="m-0 text-[13px] font-normal leading-relaxed text-muted-foreground dark:text-zinc-400">
                  {p.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTAs */}
        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/haptics" className={softButtonClass}>
              Read the docs
            </Link>
            <Link
              href="https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-card px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-foreground shadow-card transition-[box-shadow,background-color,transform] duration-200 hover:shadow-float hover:-translate-y-0.5 active:translate-y-0 dark:bg-white/10 dark:text-zinc-50 dark:shadow-none dark:hover:bg-white/15 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              MDN Vibration API
              <ExternalLink className="size-3.5" strokeWidth={2.5} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
