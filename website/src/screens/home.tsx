'use client';

import React from 'react';
import { Toaster } from 'web-haptics-toast';
import { Header } from '@/src/components/layout/header';
import { Footer } from '@/src/components/layout/footer';
import { MainHero } from '@/src/components/landing/main-hero';
import { FeatureOverview } from '@/src/components/landing/feature-overview';
import { Highlight } from '@/src/components/landing/highlight';
import { Installation } from '@/src/components/landing/installation';
import { Playground } from '@/src/components/landing/playground';
import { AdvancedFeatures } from '@/src/components/landing/advanced';
import { siteWrapper } from '@/src/utils/site-ui';
import { useToastState } from '@/src/hooks/use-toast-state';

/**
 * HomeScreen Component
 */
export function HomeScreen() {
  const { config, state, actions } = useToastState();
  const { haptics, hapticsDebug, hapticsShowSwitch } = state;
  const { setHaptics, setHapticsDebug, setHapticsShowSwitch, setRichColors, setCloseButton, setExpand, setPosition } = actions;
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

      <main id="main" role="main" aria-label="Main content" className="bg-background">
        <MainHero haptics={haptics} hapticsDebug={hapticsDebug} />

        <FeatureOverview />

        <Highlight />

        <div className="flex flex-col gap-0 w-full">
          <section id="install">
            <Installation />
          </section>

          {/* Combined Tactical Playground replacing 6 separate sections */}
          <Playground
            richColors={richColors} setRichColors={setRichColors}
            closeButton={closeButton} setCloseButton={setCloseButton}
            expand={expand} setExpand={setExpand}
            position={position} setPosition={setPosition}
            haptics={haptics} setHaptics={setHaptics}
            hapticsDebug={hapticsDebug} setHapticsDebug={setHapticsDebug}
            hapticsShowSwitch={hapticsShowSwitch} setHapticsShowSwitch={setHapticsShowSwitch}
          />

          <AdvancedFeatures />
        </div>
      </main>

      <Footer />
    </div>
  );
}
