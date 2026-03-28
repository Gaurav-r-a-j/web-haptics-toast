'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import type { Position } from '@/src/types';

/**
 * useToastState Hook
 * 
 * Centralized state management for the web-haptics-toast documentation site.
 * Used for controlling the <Toaster /> props and debugging settings.
 * Adheres to "Poeru" principles with clean, type-safe logic.
 * Consumes centralized types from @/src/types.
 */
export function useToastState() {
  const [expand, setExpand] = React.useState(false);
  const [position, setPosition] = React.useState<Position>('bottom-right');
  const [richColors, setRichColors] = React.useState(false);
  const [closeButton, setCloseButton] = React.useState(false);
  const [haptics, setHaptics] = React.useState(true);
  const [hapticsDebug, setHapticsDebug] = React.useState(false);
  const [hapticsShowSwitch, setHapticsShowSwitch] = React.useState(false);
  const [customHapticMap, setCustomHapticMap] = React.useState(false);

  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Sync mounting state for SSR-safe theme detection
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toasterTheme = React.useMemo(() => {
    if (!mounted) return 'light';
    return resolvedTheme === 'dark' ? 'dark' : 'light';
  }, [mounted, resolvedTheme]);

  // Virtual pattern map logic
  const hapticPatternMap = React.useMemo(() => {
    if (!customHapticMap) return undefined;
    return { info: 'selection', loading: 'light' } as const;
  }, [customHapticMap]);

  return {
    // State values
    expand,
    position,
    richColors,
    closeButton,
    haptics,
    hapticsDebug,
    hapticsShowSwitch,
    customHapticMap,
    toasterTheme,
    hapticPatternMap,
    mounted,

    // Actions
    setExpand,
    setPosition,
    setRichColors,
    setCloseButton,
    setHaptics,
    setHapticsDebug,
    setHapticsShowSwitch,
    setCustomHapticMap,
  };
}
