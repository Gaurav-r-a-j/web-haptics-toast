'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import type { Position } from '@/src/types';

/**
 * useToastState Hook
 * 
 * Centralized state management for the web-haptics-toast documentation site.
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

  // Sync mounting state for SSR-safe theme detection and desktop debug default
  React.useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      const isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);
      if (!isMobile) {
        setHapticsDebug(true);
      }
    }
  }, []);

  const toasterTheme = React.useMemo(() => {
    if (!mounted) return 'light';
    return (resolvedTheme === 'dark' ? 'dark' : 'light') as 'light' | 'dark' | 'system';
  }, [mounted, resolvedTheme]);

  // Virtual pattern map logic
  const hapticPatternMap = React.useMemo(() => {
    if (!customHapticMap) return undefined;
    return { info: 'selection', loading: 'light' } as const;
  }, [customHapticMap]);

  // Derived values for the Toaster
  const config = React.useMemo(() => ({
    theme: toasterTheme,
    haptics,
    hapticsDebug,
    hapticsShowSwitch,
    hapticPatternMap,
    richColors,
    closeButton,
    expand,
    position,
    mounted
  }), [
    toasterTheme, haptics, hapticsDebug, hapticsShowSwitch, hapticPatternMap,
    richColors, closeButton, expand, position, mounted
  ]);

  return {
    // Current site/toast configuration
    config,
    
    // Detailed state (for individual controls)
    state: {
      expand,
      position,
      richColors,
      closeButton,
      haptics,
      hapticsDebug,
      hapticsShowSwitch,
      customHapticMap,
    },

    // UI actions
    actions: {
      setExpand,
      setPosition,
      setRichColors,
      setCloseButton,
      setHaptics,
      setHapticsDebug,
      setHapticsShowSwitch,
      setCustomHapticMap,
    }
  };
}
