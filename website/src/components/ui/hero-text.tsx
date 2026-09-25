import { cn } from '@/src/lib/utils';
import React from 'react';

interface HeroTextProps {
  children: React.ReactNode;
  className?: string;
  shadowColor?: string;
  /** Number of stacked shadow layers (depth of the 3D effect). Default 14. */
  layers?: number;
}

/**
 * HeroText Component
 * 
 * A specialized typography component for massive, high-impact brand text
 * with a customizable multi-layered text shadow for a 3D effect.
 */
export const HeroText: React.FC<HeroTextProps> = ({
  children,
  className = "",
  shadowColor = "#001A99",
  layers = 14
}) => {
  // Generate the layered text shadow string
  const textShadow = Array.from({ length: layers }, (_, i) => {
    const val = i + 1;
    return `${val}px ${val}px 0 ${shadowColor}`;
  }).join(', ');

  return (
    <h1
      className={cn(`text-[clamp(4.5rem,10vw,140px)] font-black leading-[0.85] tracking-tighter text-secondary m-0 p-0 uppercase select-none ${className}`)}
      style={{
        fontFamily: '"Arial Black", Impact, sans-serif',
        textShadow
      }}
    >
      {children}
    </h1>
  );
};
