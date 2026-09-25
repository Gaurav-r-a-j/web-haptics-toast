import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import nextra from 'nextra';

const require = createRequire(import.meta.url);

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const withNextra = nextra({
  defaultShowCopyCode: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Workspace package must be transpiled so the client bundle gets one consistent copy (state + haptics).
  transpilePackages: ['web-haptics-toast'],
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Clickjacking, MIME sniffing and referrer-leak defenses on every route.
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          // CSP tuned for Next.js + Nextra + Pagefind:
          // - 'unsafe-inline' scripts: Next.js inline bootstrap (no nonce without middleware)
          // - 'wasm-unsafe-eval': Pagefind client-side search (WASM)
          // - va.vercel-scripts.com: Vercel Analytics
          // - 'unsafe-eval' + ws: are DEV-ONLY (React Refresh / HMR); prod stays strict.
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              `script-src 'self' 'unsafe-inline' 'wasm-unsafe-eval'${
                process.env.NODE_ENV === 'development' ? " 'unsafe-eval'" : ''
              } https://va.vercel-scripts.com`,
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob:",
              "font-src 'self' data:",
              `connect-src 'self' https://va.vercel-scripts.com https://vitals.vercel-insights.com${
                process.env.NODE_ENV === 'development' ? ' ws: wss:' : ''
              }`,
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'none'",
            ].join('; '),
          },
        ],
      },
    ];
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'focus-visible': require.resolve('focus-visible'),
    };
    return config;
  },
};

export default withNextra(nextConfig);
