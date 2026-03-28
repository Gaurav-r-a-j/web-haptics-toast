import NextHead from 'next/head';

const Head = () => (
  <NextHead>
    {/* Title */}
    <title>web-haptics-toast</title>
    <meta name="og:title" content="web-haptics-toast" />

    {/* Description */}
    <meta name="description" content="Standalone React toasts with built-in haptics. Sonner-compatible API—one package, no extra haptics dependency." />
    <meta name="og:description" content="Standalone React toasts with built-in haptics. Sonner-compatible API—one package, no extra haptics dependency." />

    {/* URL */}
    <meta name="og:url" content="https://web-haptics-toast.designbyte.dev" />
    <link rel="canonical" href="https://web-haptics-toast.designbyte.dev" />

    {/* General */}
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta httpEquiv="Content-Language" content="en" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="author" content="DesignByte" />

    {/* Favicons — match theme.css `--background` when changing palette */}
    <meta name="msapplication-TileColor" content="#faf8f2" />
    <meta name="theme-color" content="#faf8f2" />
    <link rel="shortcut icon" href="favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
  </NextHead>
);

export default Head;
