'use client';

import React from 'react';
import styles from './header.module.css';

const navLinks = [
  { href: '#install', label: 'Install' },
  { href: '#usage', label: 'Usage' },
  { href: '#haptics', label: 'Haptics' },
  { href: '#types', label: 'Types' },
  { href: 'https://github.com/designbyte-official/web-haptics-toast', label: 'GitHub', external: true },
];

export const Header = () => {
  return (
    <header className={styles.header}>
      <a href="#main" className={styles.skipLink}>
        Skip to content
      </a>
      <div className={styles.inner}>
        <a href="#" className={styles.logo} aria-label="Home">
          web-haptics-toast
        </a>
        <nav className={styles.nav} aria-label="Main">
          {navLinks.map(({ href, label, external }) => (
            <a
              key={href}
              href={href}
              className={styles.link}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};
