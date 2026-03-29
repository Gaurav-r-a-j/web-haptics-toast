import Link from 'next/link';
import { linkExternal, transitionSurface, focusRing } from '@/src/utils/site-ui';
import { HeroText } from '@/src/components/ui/hero-text';

const LINKS = {
  GITHUB: 'https://github.com/Gaurav-r-a-j/web-haptics-toast',
  NPM: 'https://www.npmjs.com/package/web-haptics-toast',
  STUDIO: 'https://studio.designbyte.dev',
  X: 'https://x.com/designbyte'
};

const SITE_LINKS = {
  CORE: [
    { label: 'Documentation', href: '/docs' },
    { label: 'Getting Started', href: '/getting-started' },
    { label: 'Installation', href: '/installation' },
    { label: 'Haptics API', href: '/haptics' }
  ],
  REFERENCE: [
    { label: 'Positioning', href: '/docs/positioning' },
    { label: 'Expand / Stack', href: '/docs/expand-stack' },
    { label: 'Custom Styling', href: '/docs/styling' },
    { label: 'Migration', href: '/migration-from-sonner' }
  ],
  ECOSYSTEM: [
    { label: 'DesignByte Studio', href: LINKS.STUDIO },
    { label: 'Brand Assets', href: '/brand' },
    { label: 'Community', href: '/community' },
    { label: 'Changelog', href: '/changelog' }
  ]
};

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-primary pt-24 pb-0 overflow-hidden text-primary-foreground relative">
      <div className="container mx-auto px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-4 flex flex-col justify-start">
            <div className="flex flex-col gap-1">
              <HeroText shadowColor="#000000" className="text-4xl md:text-5xl lg:text-6xl mb-0 text-white leading-[0.85] uppercase tracking-tighter">
                WEB HAPTICS
              </HeroText>
              <HeroText shadowColor="#000000" className="text-4xl md:text-5xl lg:text-6xl mb-0 text-white leading-[0.85] uppercase tracking-tighter">
                TOAST
              </HeroText>
            </div>
            <div className="pt-8">
              <a
                href={LINKS.STUDIO}
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl font-black tracking-tight text-white hover:text-secondary transition-colors no-underline"
              >
                DesignByte.
              </a>
              <p className="m-0 mt-4 max-w-sm text-sm font-bold opacity-30 leading-relaxed italic">
                The opinionated toast library with native vibration support for the modern web. Built for the modern developer.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col justify-start">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-left items-start">
              <div className="flex flex-col gap-4">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-20">Core Docs</p>
                {SITE_LINKS.CORE.map((link) => (
                  <Link key={link.href} href={link.href} className="text-base font-bold hover:text-secondary transition-colors no-underline text-white whitespace-nowrap">
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-20">Reference</p>
                {SITE_LINKS.REFERENCE.map((link) => (
                  <Link key={link.href} href={link.href} className="text-base font-bold hover:text-secondary transition-colors no-underline text-white whitespace-nowrap">
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-20">Ecosystem</p>
                {SITE_LINKS.ECOSYSTEM.map((link) => (
                  <Link key={link.href} href={link.href} className="text-base font-bold hover:text-secondary transition-colors no-underline text-white whitespace-nowrap">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-primary-foreground/10 py-10">
        <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="m-0 text-[10px] font-black uppercase tracking-[0.3em] opacity-40 text-left text-white">
            © {year} DESIGNBYTE STUDIO. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-6">
            <a href={LINKS.GITHUB} target="_blank" rel="noopener noreferrer" className="text-white opacity-40 hover:opacity-100 transition-opacity" title="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
            </a>
            <a href={LINKS.X} target="_blank" rel="noopener noreferrer" className="text-white opacity-40 hover:opacity-100 transition-opacity" title="Twitter / X">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </a>
            <a href={LINKS.NPM} target="_blank" rel="noopener noreferrer" className="text-white opacity-40 hover:opacity-100 transition-opacity" title="NPM">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 4h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z" /><path d="M12 4v16" /><path d="M4 12h8" /><path d="M16 4v8" /><path d="M20 12h-4" /></svg>
            </a>
            <a href={LINKS.STUDIO} target="_blank" rel="noopener noreferrer" className="text-white opacity-40 hover:opacity-100 transition-opacity" title="Website">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Marquee Anchor */}
      <div className="w-full bg-primary py-32 border-t border-primary-foreground/10 flex items-center justify-center relative overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center gap-6 md:gap-12 px-6 ">
              <HeroText className="text-[120px] md:text-[200px] uppercase tracking-tighter leading-[0.85] text-secondary">
                WEB
              </HeroText>
              <HeroText className="text-[120px] md:text-[200px] uppercase tracking-tighter leading-[0.85] text-white">
                HAPTICS
              </HeroText>
              <HeroText className="text-[120px] md:text-[200px] uppercase tracking-tighter leading-[0.85] text-white">
                TOAST
              </HeroText>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};
