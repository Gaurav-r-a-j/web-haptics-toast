import React from 'react';
import { useMemo } from 'react';
import { toast } from 'web-haptics-toast';
import { CodeBlock } from '@/src/components/shared/code-block';
import { chipScrollRow, focusRing, interactiveChip, transitionSurface } from '@/src/utils/site-ui';
import { HeroText } from '@/src/components/ui/hero-text';

const otherChip = `${interactiveChip} ${transitionSurface} ${focusRing}`;

export const Other = ({
  setRichColors,
  setCloseButton,
}: {
  setRichColors: React.Dispatch<React.SetStateAction<boolean>>;
  setCloseButton: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isRTL, setIsRTL] = React.useState(false);
  React.useEffect(() => {
    if (typeof document === 'undefined') return;
    setIsRTL(document.documentElement.dir === 'rtl');
  }, []);

  const headlessCloseStyle = useMemo<React.CSSProperties>(() => {
    return isRTL ? { left: '6px', right: 'auto' } : { left: 'auto', right: '6px' };
  }, [isRTL]);

  const allTypes = useMemo(
    () => [
      {
        name: 'Warm Success',
        snippet: `toast.success('Event has been created')`,
        action: () => {
          toast.success('Event has been created');
          setRichColors(true);
        },
      },
      {
        name: 'Critical Error',
        snippet: `toast.error('Event has not been created')`,
        action: () => {
          toast.error('Event has not been created');
          setRichColors(true);
        },
      },
      {
        name: 'Subtle Info',
        snippet: `toast.info('Be at the area 10 minutes before the event time')`,
        action: () => {
          toast.info('Be at the area 10 minutes before the event time');
          setRichColors(true);
        },
      },
      {
        name: 'Soft Warning',
        snippet: `toast.warning('Event start time cannot be earlier than 8am')`,
        action: () => {
          toast.warning('Event start time cannot be earlier than 8am');
          setRichColors(true);
        },
      },
      {
        name: 'Add Close Button',
        snippet: `toast('Event has been created', {
  description: 'Monday, January 3rd at 6:00pm',
})`,
        action: () => {
          toast('Event has been created', {
            description: 'Monday, January 3rd at 6:00pm',
          });
          setCloseButton((t) => !t);
        },
      },
      {
        name: 'Headless / Custom',
        snippet: `toast.custom((t) => (
  <div>
    <h1>Custom toast</h1>
     <button onClick={() => toast.dismiss(t)}>Dismiss</button>
  </div>
));`,
        action: () => {
          toast.custom(
            (t) => (
              <div className="relative box-border w-[356px] rounded border border-border bg-secondary p-4">
                <p className="m-0 mb-[0.5rem] text-[0.875rem] font-medium leading-[1.3] text-foreground">Event Created</p>
                <p className="m-0 text-[0.875rem] leading-[1.4] text-muted-foreground">Today at 4:00pm - &quot;Louvre Museum&quot;</p>
                <button
                  style={headlessCloseStyle}
                  className="absolute top-[0.5rem] flex h-[24px] w-[24px] cursor-pointer items-center justify-center border-0 bg-transparent p-0 text-muted-foreground transition-colors hover:text-foreground"
                  onClick={() => toast.dismiss(t)}
                >
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M2.96967 2.96967C3.26256 2.67678 3.73744 2.67678 4.03033 2.96967L8 6.939L11.9697 2.96967C12.2626 2.67678 12.7374 2.67678 13.0303 2.96967C13.3232 3.26256 13.3232 3.73744 13.0303 4.03033L9.061 8L13.0303 11.9697C13.2966 12.2359 13.3208 12.6526 13.1029 12.9462L13.0303 13.0303C12.7374 13.3232 12.2626 13.3232 11.9697 13.0303L8 9.061L4.03033 13.0303C3.73744 13.3232 3.26256 13.3232 2.96967 13.0303C2.67678 12.7374 2.67678 12.2626 2.96967 11.9697L6.939 8L2.96967 4.03033C2.7034 3.76406 2.6792 3.3474 2.89705 3.05379L2.96967 2.96967Z"></path>
                  </svg>
                </button>
              </div>
            ),
            { duration: 999999 },
          );
          setCloseButton((t) => !t);
        },
      },
    ],
    [setRichColors, setCloseButton, headlessCloseStyle],
  );

  const [activeType, setActiveType] = React.useState(allTypes[0]);

  return (
    <div className="border-b border-border bg-background px-3 py-10 text-foreground sm:px-4 md:p-16 lg:py-20">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <HeroText shadowColor="#cfd9fc" className="text-4xl md:text-6xl lg:text-7xl mb-12 text-primary leading-none uppercase text-center w-full">
          RICH COLORS
        </HeroText>
        <p className="m-0 mb-12 max-w-2xl text-center text-lg md:text-xl font-bold leading-relaxed text-muted-foreground">
          Expressive tones that signal intent instantly. From critical failures to smooth successes, these rich presets align physical vibration with high-impact visual color.
        </p>
        <div className={`${chipScrollRow} justify-center mb-12 flex-wrap gap-4`}>
          {allTypes.map((type) => (
            <button
              className={`${otherChip} px-8 py-3 text-sm font-black uppercase transition-all hover:-translate-y-1 hover:-translate-x-1 border-2 border-black/5`}
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
