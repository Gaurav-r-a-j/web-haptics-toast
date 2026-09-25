'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/src/lib/utils';

/**
 * Modern section system shared by every landing section.
 * Replaces the previous repeated pattern of 14-layer-shadow HeroText headers,
 * 4px black borders and hard offset shadows with quiet, token-based styling.
 */

const EASE = [0.21, 0.65, 0.35, 1] as const;

/** Fade-and-rise reveal wrapper. Runs once; respects prefers-reduced-motion. */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? undefined : { opacity: 0, y: 24 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.55, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

/** Consistent section header: green-lime eyebrow, big title, optional lede. */
export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = 'center',
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  align?: 'center' | 'left';
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        'mb-12 flex w-full flex-col md:mb-16',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      <p
        className={cn(
          'mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary',
          align === 'center' && 'mx-auto',
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          'm-0 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl',
        )}
      >
        {title}
      </h2>
      {lede ? (
        <p
          className={cn(
            'mt-5 max-w-[55ch] text-pretty text-lg font-normal leading-relaxed text-muted-foreground md:text-xl',
          )}
        >
          {lede}
        </p>
      ) : null}
    </Reveal>
  );
}

/** Soft elevated card: borderless tonal surface, neumorphic shadow does the lifting. */
export const sectionCardClass =
  'rounded-3xl bg-card p-6 shadow-card transition-[box-shadow] duration-300 hover:shadow-float sm:rounded-[2rem] sm:p-8';

/** Quiet solid CTA button that pairs with the section system. */
export const softButtonClass =
  'inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground shadow-[0_10px_24px_-10px_rgba(0,56,255,0.55)] transition-[transform,box-shadow,filter] duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-10px_rgba(0,56,255,0.6)] active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0';

/** Subtle tonal button used for secondary actions (no border — surface contrast only). */
export const softOutlineButtonClass =
  'inline-flex items-center justify-center gap-2 rounded-xl bg-muted px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-foreground transition-[background-color,transform] duration-200 hover:bg-accent hover:-translate-y-0.5 active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0';
