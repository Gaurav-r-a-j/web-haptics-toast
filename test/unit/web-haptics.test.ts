/**
 * Security-critical unit tests for the haptics engine's input pipeline.
 * These lock in the validation/clamping contract: crafted patterns can never
 * produce infinite/oversized vibrations or NaN in the navigator.vibrate() call.
 */
import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest';
import { WebHaptics } from '../../src/lib/web-haptics';
import { defaultPatterns } from '../../src/lib/web-haptics/patterns';

const MAX_PHASE_MS = 1000;

// Capture what the code would hand to navigator.vibrate().
// toVibratePattern is private, so we observe through the public trigger() with
// a mocked navigator.vibrate.
let vibrateCalls: number[][] = [];

beforeEach(() => {
  vibrateCalls = [];
  Object.defineProperty(globalThis, 'navigator', {
    value: { vibrate: (pattern: number[] | number) => { vibrateCalls.push(Array.isArray(pattern) ? pattern : [pattern]); return true; } },
    configurable: true,
    writable: true,
  });
  Object.defineProperty(globalThis, 'window', { value: {}, configurable: true, writable: true });
  // Keep the DOM fallback path inert: ensureDOM checks document existence.
  Object.defineProperty(globalThis, 'document', { value: undefined, configurable: true, writable: true });
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('haptics input validation (security contract)', () => {
  it('rejects Infinity durations without calling vibrate', async () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const h = new WebHaptics();
    await h.trigger([{ duration: Infinity }]);
    expect(vibrateCalls).toEqual([]);
    expect(warn).toHaveBeenCalledOnce();
  });

  it('rejects NaN durations without calling vibrate', async () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const h = new WebHaptics();
    await h.trigger([{ duration: NaN }]);
    expect(vibrateCalls).toEqual([]);
  });

  it('rejects negative durations without calling vibrate', async () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const h = new WebHaptics();
    await h.trigger([{ duration: -50 }]);
    expect(vibrateCalls).toEqual([]);
  });

  it('rejects negative or non-finite delays without calling vibrate', async () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const h = new WebHaptics();
    await h.trigger([{ duration: 50, delay: -10 }]);
    await h.trigger([{ duration: 50, delay: Infinity }]);
    expect(vibrateCalls).toEqual([]);
  });

  it('clamps oversized durations to MAX_PHASE_MS (1000ms)', async () => {
    const h = new WebHaptics();
    await h.trigger([{ duration: 999_999, intensity: 1 }]);
    expect(vibrateCalls.length).toBe(1);
    for (const seg of vibrateCalls[0]!) {
      expect(seg).toBeLessThanOrEqual(MAX_PHASE_MS);
      expect(Number.isFinite(seg)).toBe(true);
    }
    // Full intensity => single unmodulated segment == the clamp value.
    expect(vibrateCalls[0]).toEqual([MAX_PHASE_MS]);
  });

  it('every emitted value is a finite non-negative number for hostile input', async () => {
    const h = new WebHaptics();
    const hostile: Parameters<typeof h.trigger>[0] = [
      { duration: 5000, intensity: 1, delay: 10 },
      { duration: 0.5, intensity: 0.001 },
      { duration: 1500, intensity: 0.5, delay: 0.5 },
    ];
    await h.trigger(hostile, { intensity: 2 }); // intensity > 1 must clamp to 1
    const all = vibrateCalls.flat();
    expect(all.length).toBeGreaterThan(0);
    for (const v of all) {
      expect(Number.isFinite(v)).toBe(true);
      expect(v).toBeGreaterThanOrEqual(0);
      expect(v).toBeLessThanOrEqual(MAX_PHASE_MS);
    }
  });

  it('clamps out-of-range intensities into [0,1]', async () => {
    const h = new WebHaptics();
    // intensity 5 => clamped to 1 => single unmodulated segment
    await h.trigger([{ duration: 100, intensity: 5 }]);
    expect(vibrateCalls[0]).toEqual([100]);

    vibrateCalls = [];
    // intensity -3 => clamped to 0 => silence only
    await h.trigger([{ duration: 100, intensity: -3 }]);
    // zero intensity yields a silence pattern (leading 0 + duration) or nothing
    for (const seg of vibrateCalls.flat()) expect(seg).toBeLessThanOrEqual(100);
  });

  it('unknown preset names are rejected with a warning', async () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const h = new WebHaptics();
    // @ts-expect-error intentionally invalid runtime input
    await h.trigger('explode-the-mainframe');
    expect(vibrateCalls).toEqual([]);
    expect(warn).toHaveBeenCalledOnce();
  });

  it('accepts the number[] shorthand and preserves on/off alternation', async () => {
    const h = new WebHaptics();
    await h.trigger([100, 50, 100], { intensity: 1 });
    // on, off, on — with intensity 1 no PWM split
    expect(vibrateCalls[0]).toEqual([100, 50, 100]);
  });

  it('negative shorthand gaps are safely dropped (never reach vibrate as negatives)', async () => {
    const h = new WebHaptics();
    // The shorthand builder omits non-positive gaps; output must stay valid.
    await h.trigger([100, -50, 100], { intensity: 1 });
    for (const v of vibrateCalls.flat()) {
      expect(Number.isFinite(v)).toBe(true);
      expect(v).toBeGreaterThanOrEqual(0);
    }
  });

  it('negative delays on Vibration objects are rejected with a warning', async () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const h = new WebHaptics();
    await h.trigger([{ duration: 50, delay: -10 }]);
    expect(vibrateCalls).toEqual([]);
    expect(warn).toHaveBeenCalledOnce();
  });
});

describe('haptics presets', () => {
  it('all presets are finite, non-negative, and within the phase window', () => {
    for (const [name, preset] of Object.entries(defaultPatterns)) {
      for (const seg of preset.pattern) {
        expect(Number.isFinite(seg.duration), `${name} duration`).toBe(true);
        expect(seg.duration).toBeGreaterThan(0);
        expect(seg.duration).toBeLessThanOrEqual(MAX_PHASE_MS);
        if (seg.delay !== undefined) {
          expect(seg.delay).toBeGreaterThanOrEqual(0);
        }
        if (seg.intensity !== undefined) {
          expect(seg.intensity).toBeGreaterThanOrEqual(0);
          expect(seg.intensity).toBeLessThanOrEqual(1);
        }
      }
    }
  });

  it('named presets produce a vibrate call with only finite values', async () => {
    const h = new WebHaptics();
    for (const name of ['success', 'error', 'warning', 'light', 'medium', 'heavy', 'soft', 'rigid', 'selection', 'nudge', 'buzz'] as const) {
      vibrateCalls = [];
      await h.trigger(name);
      const all = vibrateCalls.flat();
      expect(all.length, name).toBeGreaterThan(0);
      for (const v of all) expect(Number.isFinite(v)).toBe(true);
    }
  });
});

describe('WebHaptics.isSupported', () => {
  it('is false without navigator/window (SSR safe)', () => {
    Object.defineProperty(globalThis, 'navigator', { value: undefined, configurable: true });
    Object.defineProperty(globalThis, 'window', { value: undefined, configurable: true });
    expect(WebHaptics.isSupported).toBe(false);
  });

  it('is true when navigator.vibrate is a function', () => {
    expect(WebHaptics.isSupported).toBe(true);
  });
});

describe('lifecycle', () => {
  it('cancel() stops vibration with 0 and does not throw without DOM', () => {
    const h = new WebHaptics();
    expect(() => h.cancel()).not.toThrow();
    expect(vibrateCalls.at(-1)).toEqual([0]);
  });

  it('destroy() is idempotent and safe without DOM', () => {
    const h = new WebHaptics();
    expect(() => { h.destroy(); h.destroy(); }).not.toThrow();
  });
});
