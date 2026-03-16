import React from 'react';
import { Toaster } from 'web-haptics-toast';
import { Header } from '@/src/components/Header';
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
      <Header />
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
          <section className="section block" id="install">
            <Installation />
          </section>
          <section className="section block" id="usage">
            <Usage />
          </section>
          <section className="section block" id="haptics">
            <Haptics
            haptics={haptics}
            hapticsDebug={hapticsDebug}
            setHaptics={setHaptics}
            setHapticsDebug={setHapticsDebug}
          />
          </section>
          <section className="section block" id="types">
            <Types />
          </section>
          <section className="section block" id="position">
            <Position position={position} setPosition={setPosition} />
          </section>
          <section className="section block" id="expand">
            <ExpandModes expand={expand} setExpand={setExpand} />
          </section>
          <section className="section block" id="other">
            <Other setCloseButton={setCloseButton} setRichColors={setRichColors} />
          </section>
          <section className="section block" id="how">
            <How />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
