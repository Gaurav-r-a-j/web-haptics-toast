import Link from 'next/link';
import React from 'react';
import { HeroText } from '@/src/components/ui/hero-text';

const LINKS = {
  GITHUB: 'https://github.com/Gaurav-r-a-j/web-haptics-toast',
  NPM: 'https://www.npmjs.com/package/web-haptics-toast',
  STUDIO: 'https://studio.designbyte.dev',
  THEPORTFOLYO: "https://theportfolyo.com/",
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
    { label: 'ThePortfolyo', href: LINKS.THEPORTFOLYO },
  ]
};

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t-8 border-black bg-primary pt-24 pb-0 overflow-hidden text-white relative">
      <div className="container mx-auto px-8 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-4 flex flex-col justify-start">
            <div className="flex flex-col gap-1">
              <HeroText className="text-4xl md:text-5xl lg:text-6xl mb-0 text-secondary leading-[0.85] uppercase tracking-tighter">
                WEB HAPTICS
              </HeroText>
              <HeroText className="text-4xl md:text-5xl lg:text-6xl mb-0 text-white leading-[0.85] uppercase tracking-tighter">
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
                © DesignByte Studio
              </a>
              <p className="m-0 mt-4 max-w-sm text-sm font-bold leading-relaxed italic">
                The opinionated toast library with native vibration support for the modern web. Built for the tactical developer.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12 text-left items-start">
            <div className="flex flex-col gap-4">
              <HeroText className="text-lg md:text-xl lg:text-2xl mb-4 text-white md:mb-6 leading-[0.85] uppercase tracking-tighter">
                Docs
              </HeroText>
              {SITE_LINKS.CORE.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm font-black uppercase hover:text-secondary transition-colors no-underline text-white tracking-tight">
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <HeroText className="text-lg md:text-xl lg:text-2xl mb-4 text-white md:mb-6 leading-[0.85] uppercase tracking-tighter">
                Reference
              </HeroText>
              {SITE_LINKS.REFERENCE.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm font-black uppercase hover:text-secondary transition-colors no-underline text-white tracking-tight">
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <HeroText className="text-lg md:text-xl lg:text-2xl mb-4 text-white md:mb-6 leading-[0.85] uppercase tracking-tighter">
                Explore More
              </HeroText>
              {SITE_LINKS.ECOSYSTEM.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm font-black uppercase hover:text-secondary transition-colors no-underline text-white tracking-tight">
                  {link.label}
                </Link>
              ))}
              <div className="pt-4">
                <a href={LINKS.STUDIO} target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 border-2 border-white rounded-xl text-[10px] font-black uppercase hover:bg-white hover:text-black transition-all">
                  @DESIGNBYTE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-8 border-t-2 border-white/10 bg-black/20">
        <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="m-0 text-[10px] md:text-sm font-black uppercase tracking-wide text-left text-white ">
            © {year} DESIGNBYTE STUDIO | ALL RIGHTS RESERVED
          </p>
          <div className="flex items-center gap-4">
            <SocialLink href={LINKS.GITHUB} title="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
            </SocialLink>
            <SocialLink href={LINKS.X} title="X / Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </SocialLink>
            <SocialLink href={LINKS.NPM} title="NPM">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 4h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z" /><path d="M12 4v16" /><path d="M4 12h8" /><path d="M16 4v8" /><path d="M20 12h-4" /></svg>
            </SocialLink>
          </div>
        </div>
      </div>

      <div className="relative select-none pointer-events-none pb-12 bg-primary">
        <div className="flex animate-marquee whitespace-nowrap py-8">
          {[1, 2].map((group) => (
            <div key={group} className="flex items-center">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center gap-6 md:gap-12 px-6 md:px-12">
                  <HeroText shadowColor="#000000" className="text-[120px] md:text-[200px] uppercase tracking-tighter leading-[0.85] text-secondary">
                    WEB
                  </HeroText>
                  <HeroText shadowColor="#000000" className="text-[120px] md:text-[200px] uppercase tracking-tighter leading-[0.85] text-white">
                    HAPTICS
                  </HeroText>
                  <HeroText shadowColor="#000000" className="text-[120px] md:text-[200px] uppercase tracking-tighter leading-[0.85] text-white">
                    TOAST
                  </HeroText>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, children, title }: { href: string; children: React.ReactNode; title: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    title={title}
    className="size-11 flex items-center justify-center bg-black border-2 border-white rounded-xl shadow-[4px_4px_0_white] transition-all hover:-translate-y-1 hover:-translate-x-1 active:translate-y-0 active:translate-x-0 active:shadow-none"
  >
    {children}
  </a>
);
