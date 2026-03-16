import { toast } from 'web-haptics-toast';

import styles from './hero.module.css';
import Link from 'next/link';

export const Hero = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.toastWrapper}>
        <div className={styles.toast} />
        <div className={styles.toast} />
        <div className={styles.toast} />
      </div>
      <h1 className={styles.heading}>web-haptics-toast</h1>
      <p style={{ marginTop: 0, fontSize: 18, textAlign: 'center' }}>
        Toast component for React with haptic feedback by default.
      </p>
      <div className={styles.buttons}>
        <button
          data-primary=""
          onClick={() => {
            toast('web-haptics-toast', {
              description: 'Toast with haptics by default.',
            });
          }}
          className={styles.button}
        >
          Render a toast
        </button>
        <a className={styles.button} href="https://github.com/designbyte-official/web-haptics-toast" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
      <Link href="/getting-started" className={styles.link}>
        Documentation
      </Link>
    </div>
  );
};
