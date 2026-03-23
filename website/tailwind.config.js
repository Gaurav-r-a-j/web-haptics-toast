const plugin = require('tailwindcss/plugin');

/** Tokens live in src/theme.css; utilities reference CSS variables. */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
          elevated: 'var(--bg-elevated)',
        },
        rim: {
          soft: 'var(--rim-soft)',
          softer: 'var(--rim-softer)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          'on-accent': 'var(--text-on-accent)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          hover: 'var(--accent-hover)',
        },
        border: {
          DEFAULT: 'var(--border)',
        },
        'phone-bezel': 'var(--phone-bezel)',
      },
      maxWidth: {
        content: '1120px',
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
        sm: 'var(--radius-sm)',
      },
      boxShadow: {
        card: 'var(--shadow-card)',
        float: 'var(--shadow-float)',
        strong: 'var(--shadow-strong)',
        stacked: 'var(--shadow-stacked)',
        'focus-ring': '0 0 0 2px var(--bg-primary), 0 0 0 4px var(--accent)',
        'focus-accent': '0 0 0 2px var(--accent)',
      },
      fontFamily: {
        sans: 'var(--font-sans)',
        mono: 'var(--font-mono)',
      },
      keyframes: {
        'haptics-shake': {
          '0%': { transform: 'rotate(-3deg) translateX(0)' },
          '15%': { transform: 'rotate(-3deg) translateX(-6px)' },
          '30%': { transform: 'rotate(-3deg) translateX(6px)' },
          '45%': { transform: 'rotate(-3deg) translateX(-4px)' },
          '60%': { transform: 'rotate(-3deg) translateX(4px)' },
          '75%': { transform: 'rotate(-3deg) translateX(-2px)' },
          '100%': { transform: 'rotate(-3deg) translateX(0)' },
        },
      },
      animation: {
        'haptics-shake': 'haptics-shake 1s ease-in-out',
      },
      zIndex: {
        particles: '214748365',
      },
    },
  },
  plugins: [
    plugin(({ addBase }) => {
      addBase({
        html: {
          backgroundColor: 'var(--bg-primary)',
          color: 'var(--text-primary)',
          scrollBehavior: 'smooth',
        },
        body: {
          backgroundColor: 'var(--bg-primary)',
          color: 'var(--text-primary)',
          paddingTop: '0',
        },
        '::selection': {
          backgroundColor: 'var(--accent)',
          color: 'var(--text-on-accent)',
        },
        '*': {
          touchAction: 'manipulation',
        },
        '@media (prefers-reduced-motion: reduce)': {
          html: { scrollBehavior: 'auto' },
          '*, *::before, *::after': {
            animationDuration: '0.001ms !important',
            animationIterationCount: '1 !important',
            transitionDuration: '0.001ms !important',
            scrollBehavior: 'auto !important',
          },
        },
      });
    }),
  ],
};
