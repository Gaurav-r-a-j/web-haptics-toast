const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    const focusVisible = require.resolve('focus-visible', { paths: [path.join(__dirname, 'node_modules')] });
    config.resolve.alias = { ...config.resolve.alias, 'focus-visible': focusVisible };
    return config;
  },
};

const withNextra = require('nextra')({
  title: 'web-haptics-toast',
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  defaultShowCopyCode: true,
});

module.exports = withNextra(nextConfig);
