'use client';

import React from 'react';
import { toast, triggerHaptic } from 'web-haptics-toast';
import { Button } from '@/src/components/ui/button';
import { useParticles, type EmojiOption } from '@/src/components/shared/emoji-particles';

type EmojiEntry = [emoji: string, weight: number, canFlip?: boolean];

const emojis: Record<'success' | 'nudge' | 'error' | 'buzz', EmojiEntry[]> = {
  success: [
    ['✅', 3],
    ['🎉', 2, true],
    ['🤝', 1],
    ['💚', 2],
    ['👍', 3, true],
  ],
  nudge: [
    ['🫨', 2, true],
    ['🙉', 3],
    ['👉', 2, true],
    ['😳', 1],
  ],
  error: [
    ['⛔️', 3],
    ['🚨', 1],
    ['🚫', 3],
    ['🙅‍♀️', 1, true],
  ],
  buzz: [
    ['🐝', 12, true],
    ['🍯', 8],
    ['🌼', 3],
  ],
};

function expandWeighted(entries: EmojiEntry[]): EmojiOption[] {
  return entries.flatMap(([emoji, weight, canFlip]) =>
    Array.from({ length: weight }, () => ({ emoji, canFlip: canFlip ?? false })),
  );
}

export const HeroActionTray = ({
  onBuzz,
  haptics = true,
  hapticsDebug = false
}: {
  onBuzz: () => void;
  haptics?: boolean;
  hapticsDebug?: boolean;
}) => {
  const { create } = useParticles();
  const [isDesktop, setIsDesktop] = React.useState(true);

  React.useEffect(() => {
    const mq = window.matchMedia('(min-width: 860px)');
    const sync = () => setIsDesktop(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  const handleTrigger = (
    name: 'success' | 'nudge' | 'error' | 'buzz',
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX ?? rect.left + rect.width / 2;
    const y = e.clientY ?? rect.top + rect.height / 2;

    // Trigger Particle Burst only on desktop (like MobileDemo)
    if (isDesktop && haptics) {
      create(x, y, expandWeighted(emojis[name]), name === 'buzz' ? 1000 : undefined);
    }

    // Trigger vibration/shake callback for Buzz
    if (name === 'buzz') {
      onBuzz();
    }

    // Trigger Toast
    const title = name.charAt(0).toUpperCase() + name.slice(1);
    toast(title, {
      description: `Haptic: ${name}`,
      haptics: false
    });

    // Trigger Native Haptic + Debug
    if (haptics) {
      triggerHaptic(name, { debug: hapticsDebug });
    }
  };

  return (
    <div className="relative z-10 flex flex-wrap justify-center gap-3 md:gap-5 max-w-4xl mx-auto px-4">
      <Button
        variant="outline"
        size="lg"
        className="rounded-full text-base md:text-xl font-black h-auto px-6 py-3 min-w-[140px] md:min-w-[180px]"
        onClick={(e) => handleTrigger('success', e)}
      >
        <span className="text-xl md:text-2xl leading-none">✅</span> Success
      </Button>
      <Button
        variant="secondary"
        size="lg"
        className="rounded-full text-base md:text-xl font-black h-auto px-6 py-3 min-w-[140px] md:min-w-[180px]"
        onClick={(e) => handleTrigger('nudge', e)}
      >
        <span className="text-xl md:text-2xl leading-none">👉</span> Nudge
      </Button>
      <Button
        variant="secondary"
        size="lg"
        className="rounded-full text-base md:text-xl font-black h-auto px-6 py-3 min-w-[140px] md:min-w-[180px]"
        onClick={(e) => handleTrigger('error', e)}
      >
        <span className="text-xl md:text-2xl leading-none">🚨</span> Error
      </Button>
      <Button
        variant="outline"
        size="lg"
        className="rounded-full text-base md:text-xl font-black h-auto px-6 py-3 min-w-[140px] md:min-w-[180px]"
        onClick={(e) => handleTrigger('buzz', e)}
      >
        <span className="text-xl md:text-2xl leading-none">🐝</span> Buzz
      </Button>
    </div>
  );
};
