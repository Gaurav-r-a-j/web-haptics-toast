/**
 * Haptic Pattern Type Definitions
 */
export type HapticPattern = 'success' | 'warning' | 'error' | 'light' | 'medium' | 'heavy' | 'rigid' | 'soft';

export interface HapticSettings {
  enabled: boolean;
  debug: boolean;
  showSwitch: boolean;
}
