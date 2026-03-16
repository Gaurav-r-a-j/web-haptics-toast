# Website improvements

## Theme system (done)

- **Semantic color tokens** in `src/theme.css`: generic names only (`--bg-primary`, `--text-primary`, `--accent`, etc.). Change the values in that file to retheme the entire site (e.g. switch to purple or dark).
- **Tailwind** uses the same tokens via `tailwind.config.js` (e.g. `bg-bg-primary`, `text-text-primary`).
- See **THEME.md** for the full token list and how to switch palettes.

## Possible next steps

1. **Haptics demo prominence** — Add a small “Haptics on/off” control in the header or hero so users can try it without scrolling.
2. **Clear CTA** — Keep one primary CTA (e.g. “Get started”) in the hero using the accent color.
3. **Live toast demos** — The Haptics section already has toast buttons; optionally add a short “Try it” block with a note about Debug on desktop.
4. **Optional dark section** — One section with `--bg-inverse` and `--text-inverse` for contrast (e.g. “Why haptics”).
5. **Accessibility** — Check contrast for `--text-primary` and `--text-secondary` on `--bg-primary` (WCAG AA); keep focus rings visible (`--accent`).
6. **Theme toggle** — Add a switch to apply `.dark` to the root and use the dark values from `theme.css`.
7. **Responsiveness** — Verify spacing and tap targets on small viewports.
