import { toast, useSonner } from 'web-haptics-toast';
import { CodeBlock } from '@/src/components/shared/code-block';
import { chipActiveStates, chipScrollRow, hapticChip, sectionLabel, sectionTitle } from '@/src/utils/site-ui';
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
    <div>
      <p className={sectionLabel} aria-hidden>
        Layout
      </p>
      <h2 id="position-heading" className={sectionTitle}>
        Position
      </h2>
      <p className="m-0 mb-1 max-w-[52ch] text-[0.9375rem] leading-[1.55] text-muted-foreground">
        Swipe-to-dismiss follows the corner you choose. Try a position and watch the stack move.
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
      <CodeBlock>{`<Toaster position="${activePosition}" />`}</CodeBlock>
    </div>
  );
};
