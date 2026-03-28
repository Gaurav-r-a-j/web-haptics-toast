import React from 'react';

interface HeroTextProps {
  children: React.ReactNode;
  className?: string;
  shadowColor?: string;
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
  shadowColor = "#001A99" 
}) => {
  // Generate the 14-layer text shadow string
  const textShadow = Array.from({ length: 14 }, (_, i) => {
    const val = i + 1;
    return `${val}px ${val}px 0 ${shadowColor}`;
  }).join(', ');

  return (
    <h1
      className={`text-[clamp(4.5rem,10vw,140px)] font-black leading-[0.85] tracking-tighter text-secondary m-0 p-0 uppercase select-none ${className}`}
      style={{
        fontFamily: '"Arial Black", Impact, sans-serif',
        textShadow
      }}
    >
      {children}
    </h1>
  );
};
