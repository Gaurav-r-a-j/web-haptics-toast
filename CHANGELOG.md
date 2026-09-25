# web-haptics-toast

## 1.0.3

- `sideEffects: false` for tree-shaking
- New: `useHapticsSupported()` hook (SSR-safe feature detection)
- New: `hapticPatternMap` accepts raw ms arrays (`[50, 30, 50]`), not just preset names
- New: per-toast `hapticPattern` and `hapticIntensity` overrides
- New: internal rate-limiting (30 ms) so rapid toast churn can't spam the vibration motor
- Unit tests locking in the haptics validation/clamping security contract (vitest)

## 1.0.2

- Packaging and metadata fixes

## 1.0.1

- Initial public release: Sonner-compatible toasts with built-in haptics, zero runtime dependencies
