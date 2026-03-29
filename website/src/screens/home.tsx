'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import { Toaster } from 'web-haptics-toast';
import { Header } from '@/src/components/layout/header';
import { Footer } from '@/src/components/layout/footer';
import { MainHero } from '@/src/components/landing/main-hero';
import { FeatureOverview } from '@/src/components/landing/feature-overview';
import { Highlight } from '@/src/components/landing/highlight';
// import { Compatibility } from '@/src/components/landing/compatibility';
import { Installation } from '@/src/components/landing/installation';
import { Usage } from '@/src/components/landing/usage';
import { Haptics } from '@/src/components/landing/haptics';
import { Types as Toasts } from '@/src/components/landing/toasts';
import { Position } from '@/src/components/landing/position';
import { ExpandModes } from '@/src/components/landing/expand-modes';
import { Other } from '@/src/components/landing/other';
// import { How } from '@/src/components/landing/how';
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

      <main id="main" role="main" aria-label="Main content" className='bg-background'>
        <MainHero haptics={haptics} hapticsDebug={hapticsDebug} />

        <FeatureOverview />

        <Highlight />

        <div className="flex flex-col gap-0 w-full">
          <Installation />
          <Usage />
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
          <Toasts />
          <Position position={position} setPosition={setPosition} />
          <ExpandModes expand={expand} setExpand={setExpand} />
          <Other setCloseButton={setCloseButton} setRichColors={setRichColors} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
