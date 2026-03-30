'use client';

import { Toaster } from 'web-haptics-toast';

/**
 * Docs routes use `app/(docs)/layout.tsx` and never mount the landing page’s `<Toaster />`.
 * Without this, `toast()` from MDX/examples has no subscriber — no UI and no automatic haptics.
 */
export function DocsToaster() {
  return (
    <Toaster
      theme="system"
      toastAppearance="themed"
      position="bottom-right"
      duration={3200}
      haptics
    />
  );
}
