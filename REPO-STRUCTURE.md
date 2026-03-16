# Repo structure: what is what

This repo is a **pnpm workspace** with three “packages”:

1. **The package** (root) – the library you publish
2. **website** – docs/demo site
3. **test** – test app for Playwright

---

## 1. The package (root = `web-haptics-toast`)

- **What it is:** The actual **npm library** people install (`npm install web-haptics-toast`).
- **Where:** Root of the repo (the `package.json` with `"name": "web-haptics-toast"`).
- **Source code:** `src/` at the root:
  - `src/index.tsx` – main toast + Toaster
  - `src/state.ts`, `src/types.ts`, `src/hooks.tsx`, etc.
  - `src/styles.css` – toast styles
  - `src/haptics.ts` – haptics wrapper
  - `src/lib/web-haptics/` – copied web-haptics logic (patterns, WebHaptics class)
- **Build:** `pnpm run build` runs **bunchee**, which:
  - Bundles `src/` into `dist/index.js`, `dist/index.mjs`, `dist/index.d.ts`
  - Copies `src/styles.css` → `dist/styles.css`
- **What gets published to npm:** Only the `dist/` folder (and `LICENSE`). No `src/`, no `website/`, no `test/`.
- **Scripts:**
  - `pnpm run dev` – watch and rebuild the **package** on file changes (no server).
  - `pnpm run build` – one-off build of the package.

So: **package = the library. Source = `src/`. Output = `dist/`. This is what users depend on.**

---

## 2. Website (`website/`)

- **What it is:** The **documentation / marketing site** for the library (like the site you’d host at `studio.designbyte.dev` or similar).
- **Where:** `website/` folder. Its own `package.json` with `"name": "website"`.
- **Tech:** Next.js + Nextra (docs theme). Has pages, components, MDX docs.
- **Dependency on the package:** It uses `"web-haptics-toast": "workspace:*"`, so it uses the **local** built package (the root), not npm.
- **What it does:** Shows how to use the library, demos (e.g. Haptics toggles, Types, Position), install instructions, code examples.
- **Script:**
  - `pnpm run dev:website` – runs **Turbo**, which runs `website`’s `dev` script → starts the Next.js dev server for the docs site (e.g. `http://localhost:3000`).

So: **website = the docs/demo app that showcases and documents the package.**

---

## 3. Test (`test/`)

- **What it is:** A small **Next.js app** used to **run Playwright tests** against the library in a real app.
- **Where:** `test/` folder. Its own `package.json` with `"name": "test"`.
- **Dependency on the package:** Same as website: `"web-haptics-toast": "workspace:*"` so it uses the local package.
- **What it does:** Lots of buttons that trigger different toasts (success, error, promise, custom, etc.). Playwright opens this app in a browser and checks that toasts appear, dismiss, etc.
- **Scripts:**
  - `pnpm run dev:test` – runs **Turbo**, which runs `test`’s `dev` script → starts the test app (e.g. another port).
  - `pnpm run test` (from root) – runs **Playwright**: it can start the test app, open a browser, and run the tests in `test/tests/`.

So: **test = the app that exists so we can automatically test the package in a browser.**

---

## How they relate

```
sonner-main/                    ← repo root
├── package.json                ← the PACKAGE (web-haptics-toast), build → dist/
├── src/                        ← PACKAGE SOURCE (the library code)
│   ├── index.tsx
│   ├── styles.css
│   ├── haptics.ts
│   └── lib/web-haptics/
├── dist/                       ← PACKAGE OUTPUT (created by build), published to npm
├── website/                    ← WEBSITE (docs/demo app)
│   ├── package.json           ← depends on workspace web-haptics-toast
│   └── src/
└── test/                       ← TEST APP (for Playwright)
    ├── package.json            ← depends on workspace web-haptics-toast
    └── src/
```

- **Workspace:** `pnpm-workspace.yaml` lists `'.'`, `'website'`, `'test'`. So the root, `website`, and `test` are three “workspace packages.”
- **`workspace:*`:** In `website` and `test`, `"web-haptics-toast": "workspace:*"` means “use the root package from this repo,” not the version from npm. So when you run the website or test app, they use your local `dist/` (or source, depending on tooling).

---

## Commands summary

| Command | What it does |
|--------|------------------|
| `pnpm run build` | Build the **package** only → `dist/`. |
| `pnpm run dev` | Watch **package** source and rebuild on change. |
| `pnpm run dev:website` | Start the **docs/demo** site (Turbo runs `website` dev). |
| `pnpm run dev:test` | Start the **test** app (Turbo runs `test` dev). |
| `pnpm run test` | Run **Playwright** tests (uses the test app). |

---

## Short answers

- **What is the package source?** The root `src/` folder. That’s the library code; `pnpm run build` turns it into `dist/`.
- **What is the website?** The app in `website/`: docs and demos for the library. It imports the local package via `workspace:*`.
- **What is the test?** The app in `test/`: used by Playwright to test the library in a real Next.js app. Also uses the local package via `workspace:*`.
- **Difference between website and test?** **Website** = for humans (docs, examples, haptics toggles). **Test** = for machines (automated Playwright tests). Both are separate Next.js apps that depend on the same root package.
