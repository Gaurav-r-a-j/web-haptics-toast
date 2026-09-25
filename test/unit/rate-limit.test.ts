/**
 * Rate-limiter contract: rapid-fire triggers coalesce; the first call always
 * fires and calls inside the gap window are dropped.
 */
import { describe, expect, it, vi, beforeEach } from 'vitest';

// Mock the browser globals before importing the module under test.
Object.defineProperty(globalThis, 'navigator', {
  value: { vibrate: () => true },
  configurable: true,
});
Object.defineProperty(globalThis, 'window', { value: {}, configurable: true });

const vibrateSpy = vi.fn(() => true);
Object.defineProperty(globalThis.navigator, 'vibrate', { value: vibrateSpy, configurable: true });

// Import after mocks are in place.
const { triggerHaptic } = await import('../../src/haptics');

describe('triggerHaptic rate limiting', () => {
  beforeEach(() => {
    vibrateSpy.mockClear();
    // Isolate module state (lastTriggerAt) per test.
    vi.resetModules();
  });

  it('fires immediately on the first call', async () => {
    const mod = await import('../../src/haptics');
    mod.triggerHaptic(50);
    expect(vibrateSpy).toHaveBeenCalledTimes(1);
  });

  it('drops calls inside the gap window', async () => {
    const mod = await import('../../src/haptics');
    mod.triggerHaptic(50);
    mod.triggerHaptic(50);
    mod.triggerHaptic(50);
    mod.triggerHaptic(50);
    expect(vibrateSpy).toHaveBeenCalledTimes(1);
  });

  it('lets a call through once the gap has elapsed', async () => {
    vi.useFakeTimers();
    try {
      const mod = await import('../../src/haptics');
      mod.triggerHaptic(50);
      vi.advanceTimersByTime(60);
      mod.triggerHaptic(50);
      expect(vibrateSpy).toHaveBeenCalledTimes(2);
    } finally {
      vi.useRealTimers();
    }
  });
});
