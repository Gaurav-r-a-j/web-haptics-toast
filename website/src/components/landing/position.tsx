import { toast, useSonner } from 'web-haptics-toast';
import { CodeBlock } from '@/src/components/shared/code-block';
import { chipActiveStates, chipScrollRow, hapticChip } from '@/src/utils/site-ui';
import { HeroText } from '@/src/components/ui/hero-text';
import React from 'react';
import type { Position as PositionType } from '@/src/types';

const positionChip = `${hapticChip} ${chipActiveStates}`;
const positions: PositionType[] = ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'];

export const Position = ({
  position: activePosition,
  setPosition,
}: {
  position: PositionType;
  setPosition: React.Dispatch<React.SetStateAction<PositionType>>;
}) => {
  const { toasts } = useSonner();

  function removeAllToasts() {
    toasts.forEach((t) => toast.dismiss(t.id));
  }

  return (
    <div className="p-8 md:p-16 lg:py-20 border-b border-border text-foreground bg-background">
      <div className="max-w-7xl mx-auto">
        <HeroText shadowColor="#cfd9fc" className="text-4xl md:text-6xl lg:text-7xl mb-12 text-primary leading-none uppercase">
          POSITION
        </HeroText>
        <p className="m-0 mb-12 max-w-2xl text-lg md:text-xl font-bold leading-relaxed text-muted-foreground">
          Swipe-to-dismiss follows the corner you choose. Watch the stack move across the screen as you trigger different placement presets.
        </p>
        <div className={chipScrollRow}>
          {positions.map((position) => (
            <button
              data-active={activePosition === position}
              className={positionChip}
              onClick={() => {
                if (activePosition !== position) {
                  setPosition(position);
                  removeAllToasts();
                }

                toast('Event has been created', {
                  description: 'Monday, January 3rd at 6:00pm',
                });
              }}
              key={position}
            >
              {position}
            </button>
          ))}
        </div>
        <CodeBlock language="tsx">{`<Toaster position="${activePosition}" />`}</CodeBlock>
      </div>
    </div>
  );
};
