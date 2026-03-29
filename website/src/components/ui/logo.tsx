'use client';

import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Bell } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const LOGO_ROTATION = ['WEB', 'HAPTICS'];

export const Logo = ({ isScrolled = true, className }: { isScrolled?: boolean; className?: string }) => {
  return (
    <Link href="/" className={cn("flex items-center gap-1 no-underline group", className)} aria-label="Home">
      <div className={cn(
        "font-black tracking-tight text-xs px-3 py-1.5 rounded-2xl rounded-bl-sm relative shadow-sm h-[30px] flex items-center min-w-[85px] justify-center transition-colors duration-300",
        isScrolled ? "bg-foreground text-background" : "bg-white text-black"
      )}>
        <div className="relative h-full flex items-center overflow-hidden w-full justify-center">
          <LogoTextRotation />
        </div>
        <div className={cn(
          "absolute -bottom-1.5 left-0 w-2.5 h-2.5 transition-colors duration-300",
          isScrolled ? "bg-foreground" : "bg-white"
        )} style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}></div>
      </div>
      <div className={cn(
        "bg-[#CCFF00] text-black font-black text-xs px-3 py-1.5 rounded-full border shadow-sm transition-colors duration-300",
        isScrolled ? "border-foreground/10" : "border-white/30"
      )}>
        TOAST
      </div>
    </Link>
  );
};

const LogoTextRotation = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % LOGO_ROTATION.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={index}
        initial={{ y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -15, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        className="flex items-center gap-1.5"
      >
        {index === 0 && <Bell size={10} className="fill-current" strokeWidth={3} />}
        {LOGO_ROTATION[index]}
      </motion.span>
    </AnimatePresence>
  );
};
