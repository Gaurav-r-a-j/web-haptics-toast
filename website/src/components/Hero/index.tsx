'use client';

import { toast } from 'web-haptics-toast';
import styles from './hero.module.css';

export const Hero = () => {
  return (
    <section className={styles.hero} aria-label="Introduction">
      <span className={styles.badge}>React · Haptics</span>
      <h1 className={styles.title}>
        web-haptics-toast
      </h1>
      <p className={styles.subtitle}>
        Toasts with haptic feedback by default. Drop-in replacement for Sonner.
      </p>
      <div className={styles.actions}>
        <button
          type="button"
          onClick={() =>
            toast('Hello', {
              description: 'Haptics on supported devices.',
            })
          }
          className={styles.cta}
        >
          Try a toast
        </button>
        <a href="#install" className={styles.secondary}>
          Get started
        </a>
        <a
          href="https://github.com/designbyte-official/web-haptics-toast"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.gh}
        >
          GitHub
        </a>
      </div>
      <div className={styles.preview} aria-hidden>
        <div className={styles.toast} />
      </div>
    </section>
  );
};
