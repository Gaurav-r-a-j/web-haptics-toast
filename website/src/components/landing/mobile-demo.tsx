'use client';

import React from 'react';
import { toast, triggerHaptic } from 'web-haptics-toast';
import QRCode from 'qrcode';
import Image from 'next/image';
import { ParticlesProvider, useParticles, type EmojiOption } from '@/src/components/shared/emoji-particles';
import { sectionLabel, sectionTitle } from '@/src/utils/site-ui';

export const MobileDemo = ({ haptics, hapticsDebug }: { haptics: boolean; hapticsDebug: boolean }) => {
  const [qr, setQr] = React.useState<string | null>(null);
  const [isDesktop, setIsDesktop] = React.useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(min-width: 860px)').matches;
  });
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });
  const [shaking, setShaking] = React.useState(false);

  React.useEffect(() => {
    // Desktop is our "emoji burst" mode (matches `web-haptics-main` feel).
    const mq = window.matchMedia('(min-width: 860px)');
    const sync = () => setIsDesktop(mq.matches);
    sync();
    mq.addEventListener?.('change', sync);
    return () => mq.removeEventListener?.('change', sync);
  }, []);

  React.useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setPrefersReducedMotion(mq.matches);
    sync();
    mq.addEventListener?.('change', sync);
    return () => mq.removeEventListener?.('change', sync);
  }, []);

  React.useEffect(() => {
    const url = new URL(window.location.href);
    url.hash = '';
    url.searchParams.set('from', 'qr');

    QRCode.toDataURL(url.toString(), {
      margin: 1,
      width: 176,
      color: { dark: '#000000', light: '#00000000' },
    })
      .then((dataUrl) => setQr(dataUrl))
      .catch(() => setQr(null));
  }, []);

  return (
    <ParticlesProvider>
      <section
        className="mt-[2rem] flex flex-col items-center gap-[1.5rem] rounded-[12px] border border-border bg-secondary p-[1.25rem] min-[860px]:flex-row min-[860px]:flex-nowrap min-[860px]:items-center min-[860px]:justify-center min-[860px]:gap-8 min-[860px]:px-6 min-[860px]:py-7"
        aria-label="Try it on mobile"
      >
        <div className="order-2 flex w-full shrink-0 justify-center min-[860px]:order-1 min-[860px]:w-auto min-[860px]:max-w-[min(280px,42vw)]">
          <div
            className={`relative aspect-[1/2] w-[min(260px,70vw)] overflow-hidden rounded-[28px] border-[8px] border-phone-bezel bg-background shadow-strong -rotate-[3deg] max-[520px]:rotate-0 ${
              shaking && isDesktop && !prefersReducedMotion ? 'animate-haptics-shake' : ''
            }`}
          >
            <div
              className="absolute -inset-[2px] flex min-h-0 flex-col rounded-[24px] border border-rim-softer bg-[radial-gradient(600px_280px_at_50%_-40%,theme(colors.rim-soft),transparent_60%),theme(colors.background)] px-4 pb-4 pt-[10px]"
            >
              <div className="shrink-0 text-center text-[15px] font-bold tracking-[-0.02em]">web-haptics-toast</div>
              <div className="flex min-h-0 flex-1 flex-col justify-center py-3">
                <DemoTiles
                  isDesktop={isDesktop}
                  prefersReducedMotion={prefersReducedMotion}
                  setShaking={setShaking}
                  haptics={haptics}
                  hapticsDebug={hapticsDebug}
                />
                <div className="mt-3 text-center text-[13px] font-medium text-foreground opacity-80">
                  Tap tiles for toast + haptics
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 w-full shrink-0 min-[860px]:order-2 min-[860px]:w-auto min-[860px]:max-w-[min(22rem,100%)] min-[860px]:flex-col">
          <div className="mx-auto w-full min-[860px]:mx-0">
            <p className={sectionLabel} aria-hidden>
              Demo
            </p>
            <h2 className={sectionTitle}>Try it out on mobile</h2>
            <p className="m-0 mb-[1.125rem] max-w-[42ch] text-[0.9375rem] leading-[1.55] text-muted-foreground">
              Scan the QR code to open this page on your phone, then tap the tiles to trigger toast + haptics.
            </p>

            <div
              className="flex flex-wrap items-center justify-start gap-4 rounded-xl border-2 border-primary/10 bg-background p-4 min-[860px]:rotate-[2deg] max-[420px]:flex-col max-[420px]:items-center max-[420px]:justify-center transition-all hover:rotate-0"
              style={{
                boxShadow: Array.from({ length: 10 }, (_, i) => {
                  const val = i + 1;
                  return `${val}px ${val}px 0 rgba(0,0,0,0.1)`;
                }).join(', ')
              }}
              aria-label="QR code"
            >
              <div className="relative grid h-[160px] w-[160px] shrink-0 place-items-center overflow-hidden rounded-xl border border-border bg-card max-[520px]:aspect-square min-[860px]:h-[168px] min-[860px]:w-[168px]">
                {qr ? (
                  <div className="absolute inset-0">
                    <Image
                      src={qr}
                      alt="QR code to open this page on mobile"
                      fill
                      sizes="168px"
                      style={{ objectFit: 'cover' }}
                      priority={false}
                    />
                  </div>
                ) : (
                  <div className="h-full w-full rounded-[12px] bg-[linear-gradient(45deg,theme(colors.rim-soft),transparent),linear-gradient(135deg,theme(colors.rim-soft),transparent)]" />
                )}
              </div>
              <div className="flex min-w-0 flex-1 items-center gap-3 sm:items-start sm:min-w-[12rem]">
                <div
                  className="relative mt-0.5 h-7 w-7 shrink-0 rounded-full bg-primary after:absolute after:left-1/2 after:top-1/2 after:h-[10px] after:w-[10px] after:-translate-x-[55%] after:-translate-y-[55%] after:rotate-[-45deg] after:border-b-2 after:border-r-2 after:border-primary-foreground after:border-l-0 after:border-t-0 after:content-['']"
                  aria-hidden
                />
                <div className="min-w-0">
                  <div className="text-[0.9375rem] font-semibold leading-tight text-foreground">Scan with your phone</div>
                  <div className="mt-1 text-[0.8125rem] leading-snug text-muted-foreground">Best on iOS / Android.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ParticlesProvider>
  );
};

type EmojiEntry = [emoji: string, weight: number, canFlip?: boolean];

const emojis: Record<'success' | 'nudge' | 'error' | 'buzz', EmojiEntry[]> = {
  success: [
    ['✅', 3],
    ['🎉', 2, true],
    ['🤝', 1],
    ['💚', 2],
    ['👍', 3, true],
  ],
  nudge: [
    ['🫨', 2, true],
    ['🙉', 3],
    ['👉', 2, true],
    ['😳', 1],
  ],
  error: [
    ['⛔️', 3],
    ['🚨', 1],
    ['🚫', 3],
    ['🙅‍♀️', 1, true],
  ],
  buzz: [
    ['🐝', 12, true],
    ['🍯', 8],
    ['🌼', 3],
  ],
};

function expandWeighted(entries: EmojiEntry[]): EmojiOption[] {
  return entries.flatMap(([emoji, weight, canFlip]) =>
    Array.from({ length: weight }, () => ({ emoji, canFlip: canFlip ?? false })),
  );
}

const DemoTiles = ({
  isDesktop,
  prefersReducedMotion,
  setShaking,
  haptics,
  hapticsDebug,
}: {
  isDesktop: boolean;
  prefersReducedMotion: boolean;
  setShaking: React.Dispatch<React.SetStateAction<boolean>>;
  haptics: boolean;
  hapticsDebug: boolean;
}) => {
  const { create } = useParticles();

  const handleTrigger = (
    name: 'success' | 'nudge' | 'error' | 'buzz',
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX ?? rect.left + rect.width / 2;
    const y = e.clientY ?? rect.top + rect.height / 2;

    if (isDesktop && haptics && !prefersReducedMotion) {
      create(x, y, expandWeighted(emojis[name]), name === 'buzz' ? 1000 : undefined);
      if (name === 'buzz') {
        setShaking(true);
        window.setTimeout(() => setShaking(false), 1000);
      }
    }

    // Show normal styled toast UI, but keep haptics manual for this demo
    // (so each tile always maps to its explicit triggerHaptic preset).
    const title =
      name === 'success' ? 'Success' : name === 'nudge' ? 'Nudge' : name === 'error' ? 'Error' : 'Buzz';
    const description =
      name === 'success'
        ? 'Haptic: success'
        : name === 'nudge'
          ? 'Haptic: nudge'
          : name === 'error'
            ? 'Haptic: error'
            : 'Haptic: buzz';

    // Haptic first (same event turn as the tap), then toast — avoids losing iOS activation before switch clicks.
    triggerHaptic(name, { debug: hapticsDebug });
    toast(title, { description, haptics: false });
  };

  const tileBase =
    'cursor-pointer rounded-[14px] border border-border bg-clip-padding px-[10px] py-[14px] text-[13px] font-semibold text-foreground shadow-card active:scale-[0.99] motion-safe:transition-[transform,box-shadow] motion-safe:duration-120 motion-safe:hover:-translate-y-px motion-safe:hover:shadow-float focus-visible:outline-none focus-visible:shadow-focus-ring motion-reduce:transition-none';

  return (
    <div className="grid grid-cols-2 gap-[10px]" role="group" aria-label="Haptic demo presets">
      {[
        { id: 'success', label: 'Success', bg: 'bg-chart-2/30', shadow: '#cfd9fc' },
        { id: 'nudge', label: 'Nudge', bg: 'bg-chart-3/25', shadow: '#cfd9fc' },
        { id: 'error', label: 'Error', bg: 'bg-destructive/20', shadow: '#cfd9fc' },
        { id: 'buzz', label: 'Buzz', bg: 'bg-chart-4/28', shadow: '#cfd9fc' },
      ].map((tile) => (
        <button
          key={tile.id}
          type="button"
          aria-label={`${tile.label} preset`}
          className={`${tileBase} ${tile.bg} border-2 border-black/5 transition-all hover:-translate-y-1 hover:-translate-x-1`}
          style={{
            boxShadow: Array.from({ length: 6 }, (_, i) => {
              const val = i + 1;
              return `${val}px ${val}px 0 rgba(0,0,0,0.05)`;
            }).join(', ')
          }}
          onClick={(e) => handleTrigger(tile.id as any, e)}
        >
          {tile.label}
        </button>
      ))}
    </div>
  );
};

