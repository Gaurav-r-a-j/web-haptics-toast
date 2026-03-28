const GRAIN_SVG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E";

/** Fixed noise + top accent wash (replaces body::before / .wrapper::before CSS). */
export function SiteAtmosphere() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.06] mix-blend-multiply dark:opacity-[0.045] dark:mix-blend-overlay"
        style={{ backgroundImage: `url("${GRAIN_SVG}")` }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed left-0 right-0 top-0 z-0 h-40 bg-[linear-gradient(90deg,transparent_0%,var(--primary)_35%,transparent_70%)] opacity-[0.12] [mask-image:linear-gradient(180deg,#000,transparent)] dark:opacity-[0.14]"
      />
    </>
  );
}
