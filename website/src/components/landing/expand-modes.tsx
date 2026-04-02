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
    <div className="border-b border-border bg-background px-3 py-10 text-foreground sm:px-4 md:p-16 lg:py-20">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <HeroText shadowColor="#cfd9fc" className="text-4xl md:text-6xl lg:text-7xl mb-12 text-primary leading-none uppercase text-center w-full">
          EXPAND
        </HeroText>
        <p className="m-0 mb-12 max-w-2xl text-center text-lg md:text-xl font-bold leading-relaxed text-muted-foreground">
          Force the stack to stay open to show more toasts at once. You can still cap the visibility with built-in controls.
        </p>
      <div className={`${chipScrollRow} justify-center mb-12 flex-wrap gap-4`}>
        <button
          data-active={expand}
          className={`${expandChip} px-10 py-3 text-sm font-black uppercase transition-all hover:-translate-y-1 hover:-translate-x-1 border-2 border-black/5`}
          style={{
            boxShadow: expand 
              ? Array.from({ length: 6 }, (_, i) => `${i + 1}px ${i + 1}px 0 #cfd9fc`).join(', ')
              : Array.from({ length: 4 }, (_, i) => `${i + 1}px ${i + 1}px 0 rgba(0,0,0,0.05)`).join(', ')
          }}
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
          className={`${expandChip} px-10 py-3 text-sm font-black uppercase transition-all hover:-translate-y-1 hover:-translate-x-1 border-2 border-black/5`}
          style={{
            boxShadow: !expand 
              ? Array.from({ length: 6 }, (_, i) => `${i + 1}px ${i + 1}px 0 #cfd9fc`).join(', ')
              : Array.from({ length: 4 }, (_, i) => `${i + 1}px ${i + 1}px 0 rgba(0,0,0,0.05)`).join(', ')
          }}
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
