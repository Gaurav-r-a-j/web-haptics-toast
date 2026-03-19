import { toast } from 'web-haptics-toast';
import { CodeBlock } from '../CodeBlock';

export const ExpandModes = ({
  expand,
  setExpand,
}: {
  expand: boolean;
  setExpand: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div>
      <p className="section-label" aria-hidden>Behavior</p>
      <h2 id="expand-heading">Expand</h2>
      <p>
        You can change the amount of toasts visible through the <code>visibleToasts</code> prop.
      </p>
      <div
        className="relative flex flex-wrap gap-2 overflow-auto py-[4px] mx-[calc(-1*var(--side-padding))] px-[var(--side-padding)] max-[600px]:[mask-image:linear-gradient(to_right,transparent,black_16px,black_calc(100%_-_16px),transparent)]"
      >
        <button
          data-active={expand}
          className="cursor-pointer whitespace-nowrap rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg-secondary)] px-[0.875rem] py-[0.5rem] text-[0.8125rem] font-medium text-[var(--text-primary)] transition-[border-color,background,box-shadow] duration-200 [font-family:var(--font-sans)] hover:bg-[var(--bg-primary)] hover:border-[var(--text-secondary)] data-[active='true']:bg-[var(--accent)] data-[active='true']:border-[var(--accent)] data-[active='true']:text-[var(--text-on-accent)] focus:outline-none focus-visible:shadow-[0_0_0_2px_var(--bg-primary),_0_0_0_4px_var(--accent)]"
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
          className="cursor-pointer whitespace-nowrap rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg-secondary)] px-[0.875rem] py-[0.5rem] text-[0.8125rem] font-medium text-[var(--text-primary)] transition-[border-color,background,box-shadow] duration-200 [font-family:var(--font-sans)] hover:bg-[var(--bg-primary)] hover:border-[var(--text-secondary)] data-[active='true']:bg-[var(--accent)] data-[active='true']:border-[var(--accent)] data-[active='true']:text-[var(--text-on-accent)] focus:outline-none focus-visible:shadow-[0_0_0_2px_var(--bg-primary),_0_0_0_4px_var(--accent)]"
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
