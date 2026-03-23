import React from 'react';
import { toast } from 'web-haptics-toast';
import { sectionLabel, sectionTitle } from '@/src/lib/siteUi';
import { CodeBlock } from '../CodeBlock';

const promiseCode = '`${data.name} toast has been added`';

export const Types = () => {
  const [activeType, setActiveType] = React.useState(allTypes[0]);

  return (
    <div>
      <p className={sectionLabel} aria-hidden>
        API
      </p>
      <h2 id="types-heading" className={sectionTitle}>
        Types
      </h2>
      <p className="m-0 mb-1 max-w-[52ch] text-[0.9375rem] leading-[1.55] text-text-secondary">
        Pick a variant below; the snippet updates. Pass an options object as the second argument when you need descriptions, actions, or promises.
      </p>
      <div
        className="relative mx-[calc(-1*var(--side-padding))] flex flex-wrap gap-2.5 overflow-auto px-[var(--side-padding)] py-1.5 max-[600px]:[mask-image:linear-gradient(to_right,transparent,black_16px,black_calc(100%_-_16px),transparent)]"
      >
        {allTypes.map((type) => (
          <button
            className="cursor-pointer whitespace-nowrap rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg-secondary)] px-[0.875rem] py-[0.5rem] text-[0.8125rem] font-medium text-[var(--text-primary)] transition-[border-color,background,box-shadow] duration-200 [font-family:var(--font-sans)] hover:bg-[var(--bg-primary)] hover:border-[var(--text-secondary)] data-[active='true']:bg-[var(--accent)] data-[active='true']:border-[var(--accent)] data-[active='true']:text-[var(--text-on-accent)] focus:outline-none focus-visible:shadow-[0_0_0_2px_var(--bg-primary),_0_0_0_4px_var(--accent)]"
            data-active={activeType.name === type.name}
            onClick={() => {
              type.action();
              setActiveType(type);
            }}
            key={type.name}
          >
            {type.name}
          </button>
        ))}
      </div>
      <CodeBlock>{`${activeType.snippet}`}</CodeBlock>
    </div>
  );
};

const allTypes = [
  {
    name: 'Default',
    snippet: `toast('Event has been created')`,
    action: () => toast('Event has been created'),
  },
  {
    name: 'Description',
    snippet: `toast.message('Event has been created', {
  description: 'Monday, January 3rd at 6:00pm',
})`,
    action: () =>
      toast('Event has been created', {
        description: 'Monday, January 3rd at 6:00pm',
      }),
  },
  {
    name: 'Success',
    snippet: `toast.success('Event has been created')`,
    action: () => toast.success('Event has been created'),
  },
  {
    name: 'Info',
    snippet: `toast.info('Be at the area 10 minutes before the event time')`,
    action: () => toast.info('Be at the area 10 minutes before the event time'),
  },
  {
    name: 'Warning',
    snippet: `toast.warning('Event start time cannot be earlier than 8am')`,
    action: () => toast.warning('Event start time cannot be earlier than 8am'),
  },
  {
    name: 'Error',
    snippet: `toast.error('Event has not been created')`,
    action: () => toast.error('Event has not been created'),
  },
  {
    name: 'Action',
    snippet: `toast('Event has been created', {
  action: {
    label: 'Undo',
    onClick: () => console.log('Undo')
  },
})`,
    action: () =>
      toast.message('Event has been created', {
        action: {
          label: 'Undo',
          onClick: () => console.log('Undo'),
        },
      }),
  },
  {
    name: 'Promise',
    snippet: `const promise = () => new Promise((resolve) => setTimeout(() => resolve({ name: 'My app' }), 2000));

toast.promise(promise, {
  loading: 'Loading...',
  success: (data) => {
    return ${promiseCode};
  },
  error: 'Error',
});`,
    action: () =>
      toast.promise<{ name: string }>(
        () =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve({ name: 'My app' });
            }, 2000);
          }),
        {
          loading: 'Loading...',
          success: (data) => {
            return `${data.name} toast has been added`;
          },
          error: 'Error',
        },
      ),
  },
  {
    name: 'Custom',
    snippet: `toast(<div>A custom toast with default styling</div>)`,
    action: () => toast(<div>A custom toast with default styling</div>, { duration: 1000000 }),
  },
];
