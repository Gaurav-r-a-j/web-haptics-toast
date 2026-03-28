import { toast, useSonner } from 'web-haptics-toast';
import { CodeBlock } from '../CodeBlock';
import { sectionLabel, sectionTitle } from '@/src/lib/siteUi';
import React from 'react';

const positions = ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'] as const;

export type Position = (typeof positions)[number];

export const Position = ({
  position: activePosition,
  setPosition,
}: {
  position: Position;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
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
      <div
        className="relative mx-[calc(-1*var(--side-padding))] flex flex-wrap gap-2.5 overflow-auto px-[var(--side-padding)] py-1.5 max-[600px]:[mask-image:linear-gradient(to_right,transparent,black_16px,black_calc(100%_-_16px),transparent)]"
      >
        {positions.map((position) => (
          <button
            data-active={activePosition === position}
            className="cursor-pointer whitespace-nowrap rounded border border-border bg-secondary px-[0.875rem] py-[0.5rem] text-[0.8125rem] font-medium text-foreground transition-[border-color,background,box-shadow] duration-200 [font-family:var(--font-sans)] hover:bg-background hover:border-muted-foreground data-[active='true']:bg-primary data-[active='true']:border-primary data-[active='true']:text-primary-foreground focus:outline-none focus-visible:shadow-focus-ring"
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
