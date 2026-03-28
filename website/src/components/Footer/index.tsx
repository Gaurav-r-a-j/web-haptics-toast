import Link from 'next/link';
import { linkExternal, sectionLabel, siteContainer } from '@/src/lib/siteUi';

const GITHUB = 'https://github.com/Gaurav-r-a-j/web-haptics-toast';
const NPM = 'https://www.npmjs.com/package/web-haptics-toast';

const footerLinkClass =
  'inline-flex min-h-[44px] items-center rounded-md py-2 text-sm font-medium text-foreground no-underline transition-colors hover:text-primary focus:outline-none focus-visible:text-primary focus-visible:shadow-[0_0_0_2px_var(--background),0_0_0_4px_var(--primary)]';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-secondary">
      <div
        className={`${siteContainer} py-8 pb-[max(2rem,env(safe-area-inset-bottom))] max-[640px]:py-6`}
      >
        <div className="grid gap-10 max-[719px]:gap-8 min-[720px]:grid-cols-[minmax(0,1fr)_minmax(12rem,16rem)] min-[720px]:items-start">
          <div className="min-w-0">
            <div className="flex flex-wrap items-start gap-4">
              <span
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-[0.8125rem] font-bold tracking-tight text-primary-foreground"
                aria-hidden
              >
                db
              </span>
              <div className="min-w-0 flex-1">
                <p className="m-0 text-base font-semibold tracking-tight text-foreground">web-haptics-toast</p>
                <p className="m-0 mt-1 max-w-[40ch] text-sm leading-snug text-muted-foreground">
                  Sonner-compatible React toasts with vibration presets built in—one dependency for UI and haptics.
                </p>
              </div>
            </div>
          </div>

          <nav className="min-w-0" aria-label="Site footer">
            <p className={`${sectionLabel} m-0 !mb-2`}>Explore</p>
            <ul className="m-0 grid list-none gap-0 p-0 sm:grid-cols-2 sm:gap-x-6">
              <li>
                <Link href="/docs" className={footerLinkClass}>
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/getting-started" className={footerLinkClass}>
                  Getting started
                </Link>
              </li>
              <li>
                <Link href="/haptics" className={footerLinkClass}>
                  Haptics
                </Link>
              </li>
              <li>
                <Link href="/migration-from-sonner" className={footerLinkClass}>
                  Migrate from Sonner
                </Link>
              </li>
              <li>
                <a
                  href={GITHUB}
                  className={`${footerLinkClass} ${linkExternal}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={NPM}
                  className={`${footerLinkClass} ${linkExternal}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  npm package
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 max-[640px]:mt-8 max-[640px]:pt-5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-6">
          <p className="m-0 text-[0.8125rem] leading-normal text-muted-foreground">
            MIT {year} ©{' '}
            <a
              href="https://studio.designbyte.dev"
              target="_blank"
              rel="noopener noreferrer"
              className={linkExternal}
            >
              DesignByte
            </a>
          </p>

          <p className="m-0 text-[0.8125rem] text-muted-foreground">
            <a
              href="https://github.com/Gaurav-r-a-j"
              target="_blank"
              rel="noopener noreferrer"
              className={linkExternal}
            >
              DesignByte
            </a>{' '}
            open source
          </p>
        </div>
      </div>
    </footer>
  );
};
