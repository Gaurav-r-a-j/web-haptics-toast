'use client';

import React from 'react';
import type { ReactElement } from 'react';
import { siteWrapper, siteContainer } from '@/src/utils/site-ui';

/**
 * Internal design-system reference. Documents the tokens every section must
 * use so the system can't drift. Not linked from nav — visit /design directly.
 */

function Row({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-wrap items-center gap-3">{children}</div>;
}

function Swatch({ name, className, style }: { name: string; className?: string; style?: React.CSSProperties }) {
  return (
    <div className="flex flex-col items-start gap-1.5">
      <div
        className={`h-16 w-24 rounded-xl shadow-card ${className ?? ''}`}
        style={style}
      />
      <code className="text-[10px] text-muted-foreground">{name}</code>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="scroll-mt-24 rounded-3xl bg-card p-6 shadow-card sm:rounded-[2rem] sm:p-8">
      <h2 className="m-0 mb-5 text-lg font-semibold tracking-tight text-foreground">{title}</h2>
      {children}
    </section>
  );
}

export default function DesignPage(): ReactElement {
  return (
    <div className={`${siteWrapper} bg-background`}>
      <main className={siteContainer}>
        <div className="mx-auto w-full max-w-4xl py-16 md:py-24">
          <p className="m-0 mb-4 bg-linear-to-r from-primary to-indigo-500 bg-clip-text text-[11px] font-semibold uppercase tracking-[0.22em] text-transparent">
            Internal reference
          </p>
          <h1 className="m-0 mb-3 text-4xl font-semibold tracking-tight text-foreground">Design system</h1>
          <p className="m-0 mb-12 text-lg font-normal leading-relaxed text-muted-foreground">
            Every token, rule, and value the site is built from. If a new section needs
            something that isn&apos;t on this page, extend the system first — don&apos;t ad-hoc it.
          </p>

          <div className="flex flex-col gap-6">
            <Section title="Surfaces — light">
              <p className="m-0 mb-4 text-sm font-normal text-muted-foreground">
                Elevation ladder: muted band &lt; card &lt; white page. Cards must float.
              </p>
              <Row>
                <Swatch name="--background #fafafa" style={{ background: '#fafafa' }} />
                <Swatch name="--muted #f5f6f8 (bands, insets)" style={{ background: '#f5f6f8' }} />
                <Swatch name="--card #ffffff" className="bg-card" />
                <Swatch name="black band #0a0c12 (the ONE dark band)" style={{ background: '#0a0c12' }} />
                <Swatch name="--primary #0038FF" style={{ background: '#0038FF' }} />
                <Swatch name="--secondary #CCFF00 (dark bands only)" style={{ background: '#CCFF00' }} />
              </Row>
            </Section>

            <Section title="Surfaces — dark">
              <p className="m-0 mb-4 text-sm font-normal text-muted-foreground">
                One continuous canvas; translucent flat cards; bands are deeper than the canvas.
              </p>
              <Row>
                <Swatch name="canvas #0d0f15" style={{ background: '#0d0f15' }} />
                <Swatch name="band #0a0c12" style={{ background: '#0a0c12' }} />
                <Swatch name="--card white/5 (flat, no shadow)" className="bg-white/5" />
                <Swatch name="card hover white/[0.08]" className="bg-white/[0.08]" />
                <Swatch name="hairline white/10" className="border border-white/10 bg-transparent" />
              </Row>
            </Section>

            <Section title="Accent rules">
              <ul className="m-0 list-none space-y-2 p-0 text-sm font-normal text-muted-foreground">
                <li>• <b className="text-foreground">Flat #0038FF</b> — all small accents: chips, icons, numbers, links, CTAs</li>
                <li>• <b className="text-foreground">Blue→indigo gradient</b> — display-size headline words + eyebrows in light sections only</li>
                <li>• <b className="text-foreground">Lime</b> — dark bands only ($ prompts, badges, tags)</li>
                <li>• <b className="text-foreground">Lime→white gradient</b> — dark-band headline words only</li>
                <li>• Never put lime text on light surfaces; never put white/5 tiles on light bands</li>
              </ul>
            </Section>

            <Section title="Type scale (weights are strict)">
              <div className="space-y-3">
                <p className="m-0 text-4xl font-semibold tracking-tight text-foreground">Section title · 600</p>
                <p className="m-0 text-sm font-semibold uppercase tracking-[0.22em] text-primary">Eyebrow · 600 · 11px · 0.22em</p>
                <p className="m-0 text-base font-normal leading-relaxed text-muted-foreground">Body copy · 400 · relaxed leading</p>
                <p className="m-0 text-sm font-medium text-foreground">Row/list title · 500</p>
                <p className="m-0 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">MICRO LABEL · 600 · 10–11px</p>
              </div>
            </Section>

            <Section title="Radius scale (no rounded-full on controls)">
              <Row>
                <div className="h-12 w-20 rounded-md bg-muted" />
                <div className="h-12 w-20 rounded-lg bg-muted" />
                <div className="h-12 w-20 rounded-xl bg-muted" />
                <div className="h-12 w-20 rounded-2xl bg-muted" />
                <div className="h-12 w-24 rounded-3xl bg-muted" />
                <div className="h-12 w-12 rounded-full bg-muted" />
              </Row>
              <p className="m-0 mt-3 text-xs text-muted-foreground">
                md badges · lg icons · <b className="text-foreground">xl buttons/inputs</b> · 2xl inner cards · 3xl/[2rem] section cards.
                <br />rounded-full ONLY for physically-round things: switch knobs/tracks, decorative dots.
              </p>
            </Section>

            <Section title="Shadows">
              <Row>
                <Swatch name="shadow-card (light: neu duo / dark: none)" className="bg-card shadow-card" />
                <Swatch name="shadow-float (hover lift)" className="bg-card shadow-float" />
                <Swatch name="shadow-pressed (input wells)" className="bg-muted shadow-pressed" />
              </Row>
              <p className="m-0 mt-3 text-xs text-muted-foreground">
                Dark mode: cards are flat; hover lifts tone (white/5 → white/[0.08]), not shadow.
              </p>
            </Section>

            <Section title="Section rhythm (page order)">
              <ol className="m-0 list-none space-y-1.5 p-0 text-sm font-normal text-muted-foreground">
                <li>1. Hero — brand blue (untouchable neobrutalist identity)</li>
                <li>2. What you get — light: muted band / dark: transparent</li>
                <li>3. Why — <b className="text-foreground">THE one black band in light mode</b> (both modes)</li>
                <li>4. Install — light: muted band / dark: black band</li>
                <li>5. Playground — light: muted band / dark: transparent</li>
                <li>6. Advanced — light: background / dark: transparent</li>
                <li>7. Footer — brand blue</li>
              </ol>
            </Section>
          </div>
        </div>
      </main>
    </div>
  );
}
