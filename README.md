# web-haptics-toast

Toast component for React with **haptic feedback by default**. API-compatible with [Sonner](https://sonner.emilkowal.ski/)—drop in as a replacement with **no code changes**. All web-haptics logic is **copied from [web-haptics-main](https://github.com/lochie/web-haptics)** (same `WebHaptics` class, patterns, types, debug/sound fallback, showSwitch). No extra dependencies.

By [**DesignByte**](https://studio.designbyte.dev) · [GitHub](https://github.com/designbyte-official/)

---

## Already using Sonner? (zero code change)

Replace your package and keep all existing imports. Your app keeps `import { Toaster, toast } from 'sonner'`:

```bash
# npm
npm uninstall sonner && npm install sonner@npm:web-haptics-toast

# pnpm
pnpm remove sonner && pnpm add sonner@npm:web-haptics-toast

# yarn
yarn remove sonner && yarn add sonner@npm:web-haptics-toast

# bun
bun remove sonner && bun add sonner@npm:web-haptics-toast
```

No import changes needed. Haptics are on by default; disable with `<Toaster haptics={false} />`.

On the docs site in this repo, see **[Migrate from Sonner](./website/src/pages/migration-from-sonner.mdx)** (route `/migration-from-sonner` when you run the website) for both migration paths, CSS notes, and a checklist.

---

## New install

```bash
npm install web-haptics-toast
```

```jsx
import { Toaster, toast } from 'web-haptics-toast';
import 'web-haptics-toast/dist/styles.css';

function App() {
  return (
    <div>
      <Toaster />
      <button onClick={() => toast('My first toast')}>Toast</button>
      <button onClick={() => toast.success('Done!')}>Success</button>
      <button onClick={() => toast.error('Failed')}>Error</button>
    </div>
  );
}
```

### Disable haptics

```jsx
<Toaster haptics={false} />
```

### Customize haptic pattern per toast type

```jsx
<Toaster
  hapticPatternMap={{
    info: 'selection',
    loading: 'light',
  }}
/>
```

Supported pattern names (same as web-haptics): `success`, `error`, `warning`, `light`, `medium`, `heavy`, `soft`, `rigid`, `selection`, `nudge`, `buzz`.

### Test haptics on desktop (play sound)

Same as web-haptics: when vibration isn’t available (e.g. desktop), you can still verify patterns by playing a short sound for each “click”:

```jsx
<Toaster hapticsDebug />
```

Use this during development to confirm which pattern runs for each toast type. On devices that support vibration, you still get real haptics; sound plays in addition when `hapticsDebug` is true.

### Show haptics toggle on screen (same as web-haptics)

```jsx
<Toaster hapticsShowSwitch />
```

Shows the web-haptics toggle switch so users can enable/disable haptics (e.g. when the device doesn’t support vibration but the fallback is used).

### Other API

- **`isHapticsSupported`** – `true` if `navigator.vibrate` is available.
- **`triggerHaptic(patternName, options?)`** – trigger a pattern. Options: `{ intensity?: number; debug?: boolean }`. Use `triggerHaptic('success', { debug: true })` to hear the pattern on desktop.
- **`WebHaptics`** – the same class as web-haptics (logic copied from web-haptics-main). Create instances with `new WebHaptics({ debug, showSwitch })`, call `.trigger(input)`, `.destroy()`.
- **`defaultPatterns`** – the same preset patterns as web-haptics (success, error, warning, light, etc.).

All original Sonner props and `toast()` API work the same (position, duration, theme, richColors, etc.).

---

## License

MIT © [DesignByte](https://studio.designbyte.dev)
