/** @type {import('next').NextConfig} */
const nextConfig = {
};

const withNextra = require('nextra')({
  title: 'web-haptics-toast',
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  defaultShowCopyCode: true,
});

module.exports = withNextra(nextConfig);
