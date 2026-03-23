/**
 * Haptics engine bundled in web-haptics-toast (no extra npm dependency).
 * `<Toaster />` uses its own WebHaptics instance; `triggerHaptic` uses a lazy singleton for standalone use.
 */

import { WebHaptics } from "./lib/web-haptics";
import type { TriggerOptions } from "./lib/web-haptics/types";

export { WebHaptics } from "./lib/web-haptics";
export { defaultPatterns } from "./lib/web-haptics/patterns";
export type {
  Vibration,
  HapticPattern,
  HapticPreset,
  HapticInput,
  TriggerOptions,
  WebHapticsOptions,
} from "./lib/web-haptics/types";

export const isHapticsSupported = WebHaptics.isSupported;

let defaultInstance: WebHaptics | null = null;

// Lazy singleton for triggerHaptic() when used outside Toaster.
function getDefaultInstance(debug?: boolean): WebHaptics {
  if (!defaultInstance) {
    defaultInstance = new WebHaptics({ debug: debug ?? false, showSwitch: false });
  } else if (debug !== undefined) {
    defaultInstance.setDebug(debug);
  }
  return defaultInstance;
}

export interface TriggerHapticOptions extends TriggerOptions {
  /** When true, play pattern as sound on desktop (same as web-haptics debug). */
  debug?: boolean;
}

/** Trigger a haptic pattern by name. For standalone use; Toaster uses its own WebHaptics instance. */
export function triggerHaptic(input: string, options?: TriggerHapticOptions): void {
  const instance = getDefaultInstance(options?.debug);
  const { debug: _d, ...triggerOpts } = options ?? {};
  instance.trigger(input, triggerOpts);
}
