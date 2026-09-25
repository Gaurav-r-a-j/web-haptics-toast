import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'web-haptics-toast — toasts people can feel';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0a0c12 0%, #10131b 100%)',
          color: '#fafafa',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Lime glow top-right, blue glow bottom-left — same recipe as the site */}
        <div
          style={{
            position: 'absolute',
            top: -200,
            right: -150,
            width: 700,
            height: 500,
            borderRadius: 9999,
            background: 'radial-gradient(closest-side, rgba(204,255,0,0.18), transparent)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -220,
            left: -150,
            width: 700,
            height: 500,
            borderRadius: 9999,
            background: 'radial-gradient(closest-side, rgba(0,56,255,0.45), transparent)',
          }}
        />

        <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 28 }}>
          <div
            style={{
              width: 84,
              height: 84,
              borderRadius: 24,
              background: '#CCFF00',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 44,
              fontWeight: 900,
              color: '#000',
            }}
          >
            ≋
          </div>
          <div style={{ fontSize: 64, fontWeight: 700, letterSpacing: -2 }}>web-haptics-toast</div>
        </div>

        <div style={{ fontSize: 40, color: '#a1a1aa' }}>Toasts people can feel</div>

        <div style={{ display: 'flex', gap: 16, marginTop: 44 }}>
          <div
            style={{
              padding: '14px 28px',
              borderRadius: 14,
              background: '#0038FF',
              color: '#fff',
              fontSize: 24,
              fontWeight: 600,
            }}
          >
            npm i web-haptics-toast
          </div>
          <div
            style={{
              padding: '14px 28px',
              borderRadius: 14,
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              fontSize: 24,
            }}
          >
            Sonner-compatible
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
