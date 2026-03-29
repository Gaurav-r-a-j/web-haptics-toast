import React from 'react';
import { toast } from 'web-haptics-toast';
import { chipActiveStates, chipScrollRow, hapticChip } from '@/src/utils/site-ui';
import { CodeBlock } from '@/src/components/shared/code-block';
import { HeroText } from '@/src/components/ui/hero-text';

const typeChip = `${hapticChip} ${chipActiveStates}`;

const promiseCode = '`${data.name} toast has been added`';

export const Types = () => {
  const [activeType, setActiveType] = React.useState(allTypes[0]);

  return (
    <div className="p-8 md:p-16 lg:py-20 border-b border-border text-foreground bg-background">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <HeroText shadowColor="#cfd9fc" className="text-4xl md:text-6xl lg:text-7xl mb-12 text-primary leading-none uppercase text-center w-full">
          API
        </HeroText>
        <p className="m-0 mb-12 max-w-2xl text-center text-lg md:text-xl font-bold leading-relaxed text-muted-foreground">
          Trigger different toast types with a single function call. Pass an options object for descriptions, actions, or promises.
        </p>
        <div className={`${chipScrollRow} justify-center mb-12 flex-wrap gap-4`}>
          {allTypes.map((type) => (
            <button
              className={`${typeChip} px-8 py-3 text-sm font-black uppercase transition-all hover:-translate-y-1 hover:-translate-x-1 border-2 border-black/5`}
              data-active={activeType.name === type.name}
              style={{
                boxShadow: activeType.name === type.name 
                  ? Array.from({ length: 6 }, (_, i) => `${i + 1}px ${i + 1}px 0 #cfd9fc`).join(', ')
                  : Array.from({ length: 4 }, (_, i) => `${i + 1}px ${i + 1}px 0 rgba(0,0,0,0.05)`).join(', ')
              }}
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

        <div className="max-w-3xl w-full">
          <CodeBlock>{`${activeType.snippet}`}</CodeBlock>
        </div>
      </div>
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
    action: () => toast(<div>A custom toast with default styling</div>),
  },
];
