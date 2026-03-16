import NextHead from 'next/head';

const Head = () => (
  <NextHead>
    {/* Title */}
    <title>web-haptics-toast</title>
    <meta name="og:title" content="web-haptics-toast" />

    {/* Description */}
    <meta name="description" content="Toast component for React with haptic feedback by default. Drop-in Sonner replacement." />
    <meta name="og:description" content="Toast component for React with haptic feedback by default. Drop-in Sonner replacement." />

    {/* URL */}
    <meta name="og:url" content="https://studio.designbyte.dev" />

    {/* General */}
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta httpEquiv="Content-Language" content="en" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="author" content="DesignByte" />

    {/* Favicons */}
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="theme-color" content="#ffffff" />
    <link rel="shortcut icon" href="favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
  </NextHead>
);

export default Head;
