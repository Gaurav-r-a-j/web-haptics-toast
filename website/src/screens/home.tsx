'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import { Toaster } from 'web-haptics-toast';
import { Header } from '@/src/components/layout/header';
import { Footer } from '@/src/components/layout/footer';
import { MainHero } from '@/src/components/landing/main-hero';
import { FeatureOverview } from '@/src/components/landing/feature-overview';
import { MobileDemo } from '@/src/components/landing/mobile-demo';
import { Highlight } from '@/src/components/landing/highlight';
import { Compatibility } from '@/src/components/landing/compatibility';
import { Installation } from '@/src/components/landing/installation';
import { Usage } from '@/src/components/landing/usage';
import { Haptics } from '@/src/components/landing/haptics';
import { Types as Toasts } from '@/src/components/landing/toasts';
import { Position } from '@/src/components/landing/position';
import { ExpandModes } from '@/src/components/landing/expand-modes';
import { Other } from '@/src/components/landing/other';
import { How } from '@/src/components/landing/how';
import { sectionCard, siteContainer, siteContent, siteWrapper } from '@/src/utils/site-ui';
import { useToastState } from '@/src/hooks/use-toast-state';

/**
 * HomeScreen Component
 * 
 */
export function HomeScreen() {
  const { config, state, actions } = useToastState();
  const { haptics, hapticsDebug, hapticsShowSwitch, customHapticMap } = state;
  const { setHaptics, setHapticsDebug, setHapticsShowSwitch, setCustomHapticMap, setRichColors, setCloseButton, setExpand, setPosition } = actions;
  const { richColors, closeButton, expand, position } = state;

  return (
    <div className={siteWrapper}>
      <Header
        haptics={haptics}
        setHaptics={setHaptics}
        hapticsDebug={hapticsDebug}
        setHapticsDebug={setHapticsDebug}
      />

      <Toaster
        theme={config.theme}
        toastAppearance="themed"
        richColors={richColors}
        closeButton={closeButton}
        expand={expand}
        position={position}
        duration={3200}
        haptics={haptics}
        hapticsDebug={hapticsDebug}
        hapticsShowSwitch={hapticsShowSwitch}
        hapticPatternMap={config.hapticPatternMap}
      />

      <main id="main" role="main" aria-label="Main content">
        <MainHero />

        <div className="mt-10 max-[640px]:mt-8">
          <FeatureOverview />
        </div>

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
              hapticsShowSwitch={hapticsShowSwitch}
              customHapticMap={customHapticMap}
              setHaptics={setHaptics}
              setHapticsDebug={setHapticsDebug}
              setHapticsShowSwitch={setHapticsShowSwitch}
              setCustomHapticMap={setCustomHapticMap}
            />
          </section>

          <section className={sectionCard} id="types" aria-labelledby="types-heading">
            <Toasts />
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
