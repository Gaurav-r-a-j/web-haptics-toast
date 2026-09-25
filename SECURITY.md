# Security Policy

## Supported versions

| Version | Supported |
| ------- | --------- |
| 1.x     | ✅        |

## Reporting a vulnerability

Please **do not open a public GitHub issue** for security vulnerabilities.

Instead, report privately via [GitHub Security Advisories](https://github.com/Gaurav-r-a-j/web-haptics-toast/security/advisories/new) ("Report a vulnerability"), or email the maintainer listed in `package.json`.

Include:
- A description of the issue and its impact
- Steps / minimal reproduction
- Affected versions

You can expect an initial response within **7 days**. We will credit reporters in the fix release unless you prefer to remain anonymous.

## Security posture of this package

- **Zero runtime dependencies** — the npm tarball contains only built output (`dist/`) and a license. No install scripts.
- **No network access** — the library never sends data anywhere.
- **No persistent storage** — no cookies, localStorage, or IndexedDB usage.
- **No dynamic code execution** — no `eval`, `new Function`, or string-based scheduling.
- **Validated inputs** — all vibration durations/delays must be finite non-negative numbers; durations are clamped to a 1000 ms window; intensities are clamped to [0, 1]. Malformed input is rejected with a console warning, never executed.
- **No HTML injection surface** — toast content renders through React's normal escaping; the library never touches `innerHTML`.

This is verified continuously by unit tests in `test/unit/` — see `web-haptics.test.ts` for the exact contract.
