import path from 'node:path';
import { fileURLToPath } from 'node:url';
import nextra from 'nextra';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const withNextra = nextra({
  defaultShowCopyCode: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['web-haptics-toast'],
  webpack: (config) => {
    const focusVisible = require.resolve('focus-visible', { paths: [path.join(__dirname, 'node_modules')] });
    config.resolve.alias = { ...config.resolve.alias, 'focus-visible': focusVisible };
    return config;
  },
};

export default withNextra(nextConfig);
