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
  'scroll-mt-[5.5rem] rounded-[2.5rem] md:rounded-[3rem] border border-border bg-card p-6 max-[480px]:scroll-mt-[4.75rem] max-[480px]:p-6 sm:px-10 sm:py-12 shadow-sm';

/** External links */
export const linkExternal = 'underline underline-offset-2';

/** Matches `--shadow-focus-ring` in tailwind-theme.css */
export const focusRing = 'focus:outline-none focus-visible:shadow-focus-ring';

/** Interactive controls: border/background/shadow + motion */
export const transitionSurface =
  'transition-[border-color,background,box-shadow] duration-200 motion-reduce:transition-none';

/** Base chip / pill control — uses theme surfaces (avoid secondary since it is bright green) */
export const interactiveChip =
  'cursor-pointer whitespace-nowrap rounded-full border border-border bg-muted px-[0.875rem] py-[0.5rem] text-[0.8125rem] font-medium font-sans text-foreground hover:bg-background hover:border-muted-foreground active:translate-x-px active:translate-y-px active:brightness-[0.97]';

/** Selected state for toggle chips (`data-active`) */
export const chipActiveStates =
  "data-[active='true']:bg-primary data-[active='true']:border-primary data-[active='true']:text-primary-foreground";

/** Toast style preview buttons — shadcn chart / destructive tints */
export const toastVariantSurfaces =
  "data-[variant='success']:bg-chart-2/20 data-[variant='error']:bg-destructive/15 data-[variant='warning']:bg-chart-4/20";

/** Horizontal chip row: bleeds to viewport edges using `spacing.side` */
export const chipScrollRow =
  'relative -mx-side flex flex-wrap gap-2.5 overflow-auto px-side py-1.5 max-[600px]:[mask-image:linear-gradient(to_right,transparent,black_16px,black_calc(100%_-_16px),transparent)]';

/** Composes a full haptic/demo chip (toggle or toast row) */
export const hapticChip = `${interactiveChip} ${transitionSurface} ${focusRing}`;

/**
 * Neobrutalist “pressed” affordance: translate by the hard-shadow depth and drop the shadow.
 * Use with matching shadow utilities (e.g. shadow-[4px_4px_0_black]).
 */
export const neoPressShadow4 =
  'active:translate-x-1 active:translate-y-1 active:shadow-none motion-reduce:active:translate-x-0 motion-reduce:active:translate-y-0';

export const neoPressShadow6 =
  'active:translate-x-1.5 active:translate-y-1.5 active:shadow-none motion-reduce:active:translate-x-0 motion-reduce:active:translate-y-0';

export const neoPressShadow3 =
  'active:translate-x-0.5 active:translate-y-0.5 active:shadow-none motion-reduce:active:translate-x-0 motion-reduce:active:translate-y-0';
