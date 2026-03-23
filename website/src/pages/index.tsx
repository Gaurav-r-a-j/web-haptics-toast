import React from 'react';
import { ThemeProvider, useTheme } from 'next-themes';
import { Toaster } from 'web-haptics-toast';
import { Header } from '@/src/components/Header';
import { Installation } from '@/src/components/Installation';
import { Hero } from '@/src/components/Hero';
import { Highlight } from '@/src/components/Highlight';
import { MobileDemo } from '@/src/components/MobileDemo';
import { Compatibility } from '@/src/components/Compatibility';
import { Types } from '@/src/components/Types/Types';
import { ExpandModes } from '@/src/components/ExpandModes';
import { Position, type Position as PositionType } from '@/src/components/Position';
import { Usage } from '@/src/components/Usage';
import { Haptics } from '@/src/components/Haptics';
import { Other } from '@/src/components/Other/Other';
import Head from '../components/Head';
import { How } from '../components/How/How';
import { Footer } from '../components/Footer';
import { SiteAtmosphere } from '../components/SiteAtmosphere';
import { sectionCard, siteContainer, siteContent, siteWrapper } from '../lib/siteUi';

function HomeInner() {
  const [expand, setExpand] = React.useState(false);
  const [position, setPosition] = React.useState<PositionType>('bottom-right');
  const [richColors, setRichColors] = React.useState(false);
  const [closeButton, setCloseButton] = React.useState(false);
  const [haptics, setHaptics] = React.useState(true);
  const [hapticsDebug, setHapticsDebug] = React.useState(false);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  const toasterTheme = mounted && resolvedTheme === 'dark' ? 'dark' : 'light';

  return (
    <div className={siteWrapper}>
      <SiteAtmosphere />
      <Head />
      <Header haptics={haptics} setHaptics={setHaptics} hapticsDebug={hapticsDebug} setHapticsDebug={setHapticsDebug} />
      <Toaster
        theme={toasterTheme}
        richColors={richColors}
        closeButton={closeButton}
        expand={expand}
        position={position}
        duration={3200}
        haptics={haptics}
        hapticsDebug={hapticsDebug}
      />
      <main id="main" className={siteContainer} role="main" aria-label="Main content">
        <Hero />
        <MobileDemo haptics={haptics} hapticsDebug={hapticsDebug} />
        <Highlight />
        <div className={siteContent}>
          <Compatibility />
          <section className={sectionCard} id="install" aria-labelledby="install-heading">
            <Installation />
          </section>
          <section className={sectionCard} id="usage" aria-labelledby="usage-heading">
            <Usage />
          </section>
          <section className={sectionCard} id="haptics" aria-labelledby="haptics-heading">
            <Haptics
              haptics={haptics}
              hapticsDebug={hapticsDebug}
              setHaptics={setHaptics}
              setHapticsDebug={setHapticsDebug}
            />
          </section>
          <section className={sectionCard} id="types" aria-labelledby="types-heading">
            <Types />
          </section>
          <section className={sectionCard} id="position" aria-labelledby="position-heading">
            <Position position={position} setPosition={setPosition} />
          </section>
          <section className={sectionCard} id="expand" aria-labelledby="expand-heading">
            <ExpandModes expand={expand} setExpand={setExpand} />
          </section>
          <section className={sectionCard} id="other" aria-labelledby="other-heading">
            <Other setCloseButton={setCloseButton} setRichColors={setRichColors} />
          </section>
          <section className={sectionCard} id="how" aria-labelledby="how-heading">
            <How />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem storageKey="theme" disableTransitionOnChange>
      <HomeInner />
    </ThemeProvider>
  );
}
