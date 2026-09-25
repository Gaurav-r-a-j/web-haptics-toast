# Contributing to web-haptics-toast

Thanks for helping! This repo is a pnpm workspace:

```
sonner-main/
├── src/            # the npm package (web-haptics-toast)
├── website/        # Next.js docs + landing site
└── test/           # Playwright e2e app + specs
```

The `sonner/` and `web-haptics-main/` folders at the workspace root are upstream reference snapshots — **never modify them**.

## Setup

```bash
pnpm install
npx playwright install chromium webkit   # one-time, browser binaries
```

## Everyday commands

```bash
pnpm run type-check     # tsc --noEmit
pnpm run build          # build the package (bunchee -> dist/)
pnpm run test:unit      # vitest unit tests (fast)
pnpm run test           # unit + Playwright e2e (starts test app on :3000)
pnpm run dev:website    # website dev server
```

> ⚠️ The test app uses port 3000. If anything else is on :3000, Playwright will
> silently reuse it and every test times out. Free the port first.

## Pull requests

1. Branch from `dev-main`.
2. Keep the package source free of: new runtime dependencies, `eval`/dynamic
   code, network calls, storage APIs, and unvalidated numeric input (see
   `SECURITY.md` — the unit tests in `test/unit/` enforce the contract).
3. Run `pnpm run type-check && pnpm run test:unit` before pushing.
4. For user-facing changes, add a changeset: `pnpm changeset` and follow the
   prompts (patch for fixes, minor for new features).

## Publishing (maintainers)

Version bumps go through changesets. On merge to `main`, the release workflow
consumes changesets, bumps versions, and pushes a `vX.Y.Z` tag; the `Publish`
workflow publishes to npm with provenance. Never run `npm version` /
`npm publish` by hand unless doing an out-of-band hotfix.

## Reporting bugs & security issues

- Bugs: open a GitHub issue with a minimal reproduction.
- Security: **do not** open a public issue — see `SECURITY.md`.
