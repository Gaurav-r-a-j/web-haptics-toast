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
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <HeroText shadowColor="#cfd9fc" className="text-4xl md:text-6xl lg:text-7xl mb-12 text-primary leading-none uppercase text-center w-full">
          POSITION
        </HeroText>
        <p className="m-0 mb-12 max-w-2xl text-center text-lg md:text-xl font-bold leading-relaxed text-muted-foreground">
          Swipe-to-dismiss follows the corner you choose. Watch the stack move across the screen as you trigger placement presets.
        </p>
        <div className={`${chipScrollRow} justify-center mb-12 flex-wrap gap-4`}>
          {positions.map((position) => (
            <button
              data-active={activePosition === position}
              className={`${positionChip} px-8 py-3 text-sm font-black uppercase transition-all hover:-translate-y-1 hover:-translate-x-1 border-2 border-black/5`}
              style={{
                boxShadow: activePosition === position 
                  ? Array.from({ length: 6 }, (_, i) => `${i + 1}px ${i + 1}px 0 #cfd9fc`).join(', ')
                  : Array.from({ length: 4 }, (_, i) => `${i + 1}px ${i + 1}px 0 rgba(0,0,0,0.05)`).join(', ')
              }}
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
        <div className="max-w-3xl w-full">
          <CodeBlock>{`<Toaster position="${activePosition}" />`}</CodeBlock>
        </div>
      </div>
    </div>
  );
};
