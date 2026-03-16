# Website theme — semantic color tokens

All colors use **generic token names** so you can retheme the whole site by editing a single file.

## Where to change colors

**File:** `src/theme.css`

- **Light theme** is under `:root, .light { ... }`.
- **Dark theme** is under `.dark { ... }` (e.g. if you add a theme toggle later).

Only the **values** (hex/hsl) live there. The **names** are fixed and used everywhere.

## Token names (do not rename)

| Token | Purpose |
|-------|--------|
| `--bg-primary` | Page background |
| `--bg-secondary` | Cards, footer, code blocks, elevated surfaces |
| `--text-primary` | Headings, body text |
| `--text-secondary` | Muted text, descriptions |
| `--text-on-accent` | Text on accent buttons (e.g. white) |
| `--accent` | Primary buttons, links hover, active state |
| `--accent-hover` | Hover state for accent buttons |
| `--border` | Borders (cards, inputs, code) |
| `--border-subtle` | Lighter borders |
| `--success` | Success state (e.g. checkmarks) |
| `--bg-inverse` | Optional dark strip background |
| `--text-inverse` | Text on dark strip |
| `--neutral-0` … `--neutral-12` | Code blocks, syntax; theme-independent grayscale |

## How to switch to another palette (e.g. purple)

1. Open `src/theme.css`.
2. Change only the values inside `:root, .light { ... }`, for example:

```css
:root,
.light {
  --bg-primary: #faf5ff;
  --bg-secondary: #f3e8ff;
  --text-primary: #3b0764;
  --text-secondary: #6b21a8;
  --text-on-accent: #fff;
  --accent: #7c3aed;
  --accent-hover: #6d28d9;
  --border: #e9d5ff;
  --border-subtle: #e9d5ff;
  --success: #10b981;
  /* ... */
}
```

3. Save. The entire website (hero, buttons, footer, docs, code blocks) will use the new palette.

Do **not** use specific color names (e.g. `--cream`, `--brown`) in components. Always use the token names above so one place controls the look.
