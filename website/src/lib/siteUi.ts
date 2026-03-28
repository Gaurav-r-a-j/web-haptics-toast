/**
 * Shared Tailwind utility strings. Colors follow shadcn-style tokens in `theme.css`
 * (`--background`, `--foreground`, `--primary`, …) mapped in `tailwind-theme.css`.
 */

/** Page shell: full height, theme background, stacking above decorative layers */
export const siteWrapper =
  'relative z-[1] flex min-h-screen flex-col overflow-x-clip bg-background font-sans text-foreground antialiased';

/** Max-width column + safe horizontal padding */
export const siteContainer =
  'mx-auto max-w-content pl-[max(theme(spacing.side),env(safe-area-inset-left))] pr-[max(theme(spacing.side),env(safe-area-inset-right))]';

/** Main stack under hero / demo / highlight */
export const siteContent =
  'mt-12 flex flex-col gap-10 pb-16 max-[640px]:mt-9 max-[640px]:gap-7 max-[640px]:pb-12';

/** Eyebrow label above a section title */
export const sectionLabel =
  'mb-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.06em] text-muted-foreground';

/** Default section `<h2>` (inside card sections) */
export const sectionTitle =
  'm-0 mb-2 text-xl font-semibold tracking-tight text-foreground';

/** Card section: scroll margin for sticky header, border, shadow */
export const sectionCard =
  'scroll-mt-[5.5rem] rounded-[10px] border border-border bg-secondary p-5 shadow-card max-[480px]:scroll-mt-[4.75rem] max-[480px]:rounded-lg max-[480px]:p-4 sm:px-7 sm:py-7';

/** External links */
export const linkExternal = 'underline underline-offset-2';

/** Matches `--shadow-focus-ring` in tailwind-theme.css */
export const focusRing = 'focus:outline-none focus-visible:shadow-focus-ring';

/** Interactive controls: border/background/shadow + motion */
export const transitionSurface =
  'transition-[border-color,background,box-shadow] duration-200 motion-reduce:transition-none';

/** Base chip / pill control — uses `theme.css` surfaces */
export const interactiveChip =
  'cursor-pointer whitespace-nowrap rounded border border-border bg-secondary px-[0.875rem] py-[0.5rem] text-[0.8125rem] font-medium font-sans text-foreground hover:bg-background hover:border-muted-foreground';

/** Selected state for toggle chips (`data-active`) */
export const chipActiveStates =
  "data-[active='true']:bg-primary data-[active='true']:border-primary data-[active='true']:text-primary-foreground";

/** Toast style preview buttons — semantic tints from `theme.css` */
export const toastVariantSurfaces =
  "data-[variant='success']:bg-state-success-soft data-[variant='error']:bg-state-error-soft data-[variant='warning']:bg-state-warning-soft";

/** Horizontal chip row: bleeds to viewport edges using `spacing.side` */
export const chipScrollRow =
  'relative -mx-side flex flex-wrap gap-2.5 overflow-auto px-side py-1.5 max-[600px]:[mask-image:linear-gradient(to_right,transparent,black_16px,black_calc(100%_-_16px),transparent)]';

/** Composes a full haptic/demo chip (toggle or toast row) */
export const hapticChip = `${interactiveChip} ${transitionSurface} ${focusRing}`;
