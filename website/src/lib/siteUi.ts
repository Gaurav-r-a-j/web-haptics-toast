/**
 * Shared Tailwind utility strings (tokens via theme.css + tailwind.config).
 * Prefer these over custom CSS classes for the marketing site.
 */

/** Page shell: full height, theme background, stacking above decorative layers */
export const siteWrapper =
  'relative z-[1] flex min-h-screen flex-col overflow-x-clip bg-bg-primary font-sans text-text-primary antialiased';

/** Max-width column + safe horizontal padding */
export const siteContainer =
  'mx-auto max-w-content pl-[max(var(--side-padding),env(safe-area-inset-left))] pr-[max(var(--side-padding),env(safe-area-inset-right))]';

/** Main stack under hero / demo / highlight */
export const siteContent =
  'mt-12 flex flex-col gap-10 pb-16 max-[640px]:mt-9 max-[640px]:gap-7 max-[640px]:pb-12';

/** Eyebrow label above a section title */
export const sectionLabel =
  'mb-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.06em] text-text-secondary';

/** Default section `<h2>` (inside card sections) */
export const sectionTitle =
  'm-0 mb-2 text-xl font-semibold tracking-tight text-text-primary';

/** Card section: scroll margin for sticky header, border, shadow */
export const sectionCard =
  'scroll-mt-[5.5rem] rounded-[10px] border border-border bg-bg-secondary p-5 shadow-card max-[480px]:scroll-mt-[4.75rem] max-[480px]:rounded-lg max-[480px]:p-4 sm:px-7 sm:py-7';

/** External links */
export const linkExternal = 'underline underline-offset-2';
