import type { Dispatch, SetStateAction } from 'react';
import { toast } from 'web-haptics-toast';
import { CodeBlock } from '@/src/components/Shared/CodeBlock';
import { chipActiveStates, chipScrollRow, hapticChip, sectionLabel, sectionTitle } from '@/src/utils/siteUi';

const expandChip = `${hapticChip} ${chipActiveStates}`;

export const ExpandModes = ({
  expand,
  setExpand,
}: {
  expand: boolean;
  setExpand: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div>
      <p className={sectionLabel} aria-hidden>
        Behavior
      </p>
      <h2 id="expand-heading" className={sectionTitle}>
        Expand
      </h2>
      <p className="m-0 mb-1 max-w-[52ch] text-[0.9375rem] leading-[1.55] text-muted-foreground">
        With <code className="text-[0.8125rem]">expand</code>, the stack opens to show more toasts at once. You can still cap how many show with <code className="text-[0.8125rem]">visibleToasts</code>.
      </p>
      <div className={chipScrollRow}>
        <button
          data-active={expand}
          className={expandChip}
          onClick={() => {
            toast('Event has been created', {
              description: 'Monday, January 3rd at 6:00pm',
            });
            setExpand(true);
          }}
        >
          Expand
        </button>
        <button
          data-active={!expand}
          className={expandChip}
          onClick={() => {
            toast('Event has been created', {
              description: 'Monday, January 3rd at 6:00pm',
            });
            setExpand(false);
          }}
        >
          Default
        </button>
      </div>
      <CodeBlock>{`<Toaster expand={${expand}} />`}</CodeBlock>
    </div>
  );
};
