import type { Dispatch, SetStateAction } from 'react';
import { toast } from 'web-haptics-toast';
import { CodeBlock } from '@/src/components/shared/code-block';
import { chipActiveStates, chipScrollRow, hapticChip } from '@/src/utils/site-ui';
import { HeroText } from '@/src/components/ui/hero-text';

const expandChip = `${hapticChip} ${chipActiveStates}`;

export const ExpandModes = ({
  expand,
  setExpand,
}: {
  expand: boolean;
  setExpand: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="p-8 md:p-16 lg:py-20 border-b border-border text-foreground bg-background">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <HeroText shadowColor="#cfd9fc" className="text-4xl md:text-6xl lg:text-7xl mb-12 text-primary leading-none uppercase text-center w-full">
          EXPAND
        </HeroText>
        <p className="m-0 mb-12 max-w-2xl text-center text-lg md:text-xl font-bold leading-relaxed text-muted-foreground">
          Force the stack to stay open to show more toasts at once. You can still cap the visibility with built-in controls.
        </p>
      <div className={`${chipScrollRow} justify-center mb-12`}>
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
        <div className="max-w-3xl w-full">
          <CodeBlock>{`<Toaster expand={${expand}} />`}</CodeBlock>
        </div>
      </div>
    </div>
  );
};
