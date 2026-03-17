'use client';

import React from 'react';
import styles from './header.module.css';
import Link from 'next/link';

const navLinks = [
  { href: '/docs', label: 'Docs', internal: true },
  { href: '#install', label: 'Install', sectionId: 'install' },
  { href: '#usage', label: 'Usage', sectionId: 'usage' },
  { href: '#haptics', label: 'Haptics', sectionId: 'haptics' },
  { href: '#types', label: 'Types', sectionId: 'types' },
];

export const Header = ({
  haptics,
  setHaptics,
}: {
  haptics: boolean;
  setHaptics: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [activeSection, setActiveSection] = React.useState<string | null>(null);

  React.useEffect(() => {
    const sectionIds = navLinks
      .map((l) => l.sectionId)
      .filter((v): v is string => Boolean(v));

    if (!sectionIds.length) return;

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));
        if (visible[0]?.target?.id) setActiveSection(visible[0].target.id);
      },
      {
        // account for sticky header
        rootMargin: '-35% 0px -55% 0px',
        threshold: [0.1, 0.2, 0.3, 0.4, 0.6],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className={styles.header}>
      <a href="#main" className={styles.skipLink}>
        Skip to content
      </a>
      <div className={styles.inner}>
        <a href="#" className={styles.logo} aria-label="Home">
          web-haptics-toast
        </a>
        <div className={styles.right}>
          <button
            type="button"
            className={styles.toggle}
            aria-pressed={haptics}
            onClick={() => setHaptics((v) => !v)}
            title="Toggle haptics"
          >
            <span className={styles.toggleLabel}>Haptics</span>
            <span className={styles.pill} data-on={haptics ? 'true' : 'false'}>
              <span className={styles.knob} />
            </span>
          </button>
          <nav className={styles.nav} aria-label="Main">
            {navLinks.map(({ href, label, internal, sectionId }) =>
              internal ? (
                <Link key={href} href={href} className={styles.link}>
                  {label}
                </Link>
              ) : (
                <a
                  key={href}
                  href={href}
                  className={styles.link}
                  data-active={sectionId && activeSection === sectionId ? 'true' : 'false'}
                >
                  {label}
                </a>
              ),
            )}
            <a
              href="https://github.com/designbyte-official/web-haptics-toast"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
              aria-label="GitHub repository"
              title="GitHub"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.58 2 12.235c0 4.528 2.865 8.363 6.839 9.72.5.095.682-.222.682-.49 0-.242-.008-.884-.013-1.735-2.782.62-3.369-1.37-3.369-1.37-.454-1.18-1.11-1.494-1.11-1.494-.908-.637.069-.624.069-.624 1.003.073 1.531 1.057 1.531 1.057.892 1.563 2.341 1.112 2.91.85.091-.667.349-1.112.635-1.367-2.22-.26-4.555-1.14-4.555-5.07 0-1.12.389-2.034 1.029-2.751-.103-.26-.446-1.306.098-2.722 0 0 .84-.275 2.75 1.052A9.3 9.3 0 0 1 12 7.07c.85.004 1.705.119 2.504.349 1.909-1.327 2.748-1.052 2.748-1.052.545 1.416.202 2.462.1 2.722.64.717 1.028 1.631 1.028 2.751 0 3.94-2.338 4.807-4.566 5.062.359.316.678.94.678 1.895 0 1.367-.012 2.468-.012 2.804 0 .27.18.59.688.489C19.137 20.594 22 16.76 22 12.235 22 6.58 17.523 2 12 2z" />
              </svg>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};
