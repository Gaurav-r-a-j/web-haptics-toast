'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import { Toaster } from 'web-haptics-toast';
import { Header } from '@/src/components/Layout/Header';
import { Footer } from '@/src/components/Layout/Footer';
import { Hero } from '@/src/components/Landing/Hero';
import { FeatureOverview } from '@/src/components/Landing/FeatureOverview';
import { MobileDemo } from '@/src/components/Landing/MobileDemo';
import { Highlight } from '@/src/components/Landing/Highlight';
import { Compatibility } from '@/src/components/Landing/Compatibility';
import { Installation } from '@/src/components/Landing/Installation';
import { Usage } from '@/src/components/Landing/Usage';
import { Haptics } from '@/src/components/Landing/Haptics';
import { Types as Toasts } from '@/src/components/Landing/Toasts';
import { Position } from '@/src/components/Landing/Position';
import { ExpandModes } from '@/src/components/Landing/ExpandModes';
import { Other } from '@/src/components/Landing/Other';
import { How } from '@/src/components/Landing/How';
import { sectionCard, siteContainer, siteContent, siteWrapper } from '@/src/utils/siteUi';
import { useToastState } from '@/src/hooks/useToastState';

/**
 * HomeScreen Component
 * 
 * The main landing page screen for the web-haptics-toast website.
 * Follows the "Poeru" aesthetic with clean, professional layouts.
 * Organized into categorized components: Layout and Landing.
 */
export function HomeScreen() {
  const {
    haptics, setHaptics,
    hapticsDebug, setHapticsDebug,
    richColors, setRichColors,
    closeButton, setCloseButton,
    expand, setExpand,
    position, setPosition,
    hapticsShowSwitch, setHapticsShowSwitch,
    customHapticMap, setCustomHapticMap,
    hapticPatternMap,
    toasterTheme
  } = useToastState();

  return (
    <div className={siteWrapper}>
      <Header 
        haptics={haptics} 
        setHaptics={setHaptics} 
        hapticsDebug={hapticsDebug} 
        setHapticsDebug={setHapticsDebug} 
      />
      
      <Toaster
        theme={toasterTheme}
        toastAppearance="themed"
        richColors={richColors}
        closeButton={closeButton}
        expand={expand}
        position={position}
        duration={3200}
        haptics={haptics}
        hapticsDebug={hapticsDebug}
        hapticsShowSwitch={hapticsShowSwitch}
        hapticPatternMap={hapticPatternMap}
      />

      <main id="main" className={siteContainer} role="main" aria-label="Main content">
        <Hero />
        
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
