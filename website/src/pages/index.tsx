import React from 'react';
import { Toaster } from 'web-haptics-toast';
import { Installation } from '@/src/components/Installation';
import { Hero } from '@/src/components/Hero';
import { Types } from '@/src/components/Types/Types';
import { ExpandModes } from '@/src/components/ExpandModes';
import { Position, type Position as PositionType } from '@/src/components/Position';
import { Usage } from '@/src/components/Usage';
import { Haptics } from '@/src/components/Haptics';
import { Other } from '@/src/components/Other/Other';
import Head from '../components/Head';
import { How } from '../components/How/How';
import { Footer } from '../components/Footer';

export default function Home() {
  const [expand, setExpand] = React.useState(false);
  const [position, setPosition] = React.useState<PositionType>('bottom-right');
  const [richColors, setRichColors] = React.useState(false);
  const [closeButton, setCloseButton] = React.useState(false);
  const [haptics, setHaptics] = React.useState(true);
  const [hapticsDebug, setHapticsDebug] = React.useState(false);

  return (
    <div className="wrapper light">
      <Head />
      <Toaster
        theme="light"
        richColors={richColors}
        closeButton={closeButton}
        expand={expand}
        position={position}
        duration={Infinity}
        haptics={haptics}
        hapticsDebug={hapticsDebug}
      />
      <main className="container">
        <Hero />
        <div className="content">
          <Installation />
          <Usage />
          <Haptics
            haptics={haptics}
            hapticsDebug={hapticsDebug}
            setHaptics={setHaptics}
            setHapticsDebug={setHapticsDebug}
          />
          <Types />
          <Position position={position} setPosition={setPosition} />
          <ExpandModes expand={expand} setExpand={setExpand} />
          <Other setCloseButton={setCloseButton} setRichColors={setRichColors} />
          <How />
        </div>
      </main>
      <Footer />
    </div>
  );
}
