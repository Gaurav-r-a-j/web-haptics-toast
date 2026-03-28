import path from 'node:path';
import { fileURLToPath } from 'node:url';
import nextra from 'nextra';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const withNextra = nextra({
  defaultShowCopyCode: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    resolveAlias: {
      'next-mdx-import-source-file': [
        './mdx-components.tsx',
        './mdx-components.ts',
        './src/mdx-components.tsx',
        './src/mdx-components.ts',
      ],
    },
  },
  transpilePackages: ['web-haptics-toast'],
  typescript: {
    ignoreBuildErrors: true,
  },
  // eslint key removed because it is no longer supported in next.config.mjs for this Next.js version
  webpack: (config) => {
    const focusVisible = require.resolve('focus-visible', { paths: [path.join(__dirname, 'node_modules')] });
    config.resolve.alias = { ...config.resolve.alias, 'focus-visible': focusVisible };
    return config;
  },
};

export default withNextra(nextConfig);
