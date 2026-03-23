import { toast } from 'web-haptics-toast';
import { CodeBlock } from '../CodeBlock';
import { sectionLabel, sectionTitle } from '@/src/lib/siteUi';

export const ExpandModes = ({
  expand,
  setExpand,
}: {
  expand: boolean;
  setExpand: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div>
      <p className={sectionLabel} aria-hidden>
        Behavior
      </p>
      <h2 id="expand-heading" className={sectionTitle}>
        Expand
      </h2>
      <p className="m-0 mb-1 max-w-[52ch] text-[0.9375rem] leading-[1.55] text-text-secondary">
        With <code className="text-[0.8125rem]">expand</code>, the stack opens to show more toasts at once. You can still cap how many show with <code className="text-[0.8125rem]">visibleToasts</code>.
      </p>
      <div
        className="relative mx-[calc(-1*var(--side-padding))] flex flex-wrap gap-2.5 overflow-auto px-[var(--side-padding)] py-1.5 max-[600px]:[mask-image:linear-gradient(to_right,transparent,black_16px,black_calc(100%_-_16px),transparent)]"
      >
        <button
          data-active={expand}
          className="cursor-pointer whitespace-nowrap rounded-[var(--radius)] border border-border bg-bg-secondary px-[0.875rem] py-[0.5rem] text-[0.8125rem] font-medium text-text-primary transition-[border-color,background,box-shadow] duration-200 [font-family:var(--font-sans)] hover:bg-bg-primary hover:border-text-secondary data-[active='true']:bg-accent data-[active='true']:border-accent data-[active='true']:text-text-on-accent focus:outline-none focus-visible:shadow-[0_0_0_2px_var(--bg-primary),_0_0_0_4px_var(--accent)]"
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
          className="cursor-pointer whitespace-nowrap rounded-[var(--radius)] border border-border bg-bg-secondary px-[0.875rem] py-[0.5rem] text-[0.8125rem] font-medium text-text-primary transition-[border-color,background,box-shadow] duration-200 [font-family:var(--font-sans)] hover:bg-bg-primary hover:border-text-secondary data-[active='true']:bg-accent data-[active='true']:border-accent data-[active='true']:text-text-on-accent focus:outline-none focus-visible:shadow-[0_0_0_2px_var(--bg-primary),_0_0_0_4px_var(--accent)]"
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
