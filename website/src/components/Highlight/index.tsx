'use client';

import React from 'react';
import styles from './highlight.module.css';

export const Highlight = () => {
  return (
    <section className={styles.wrap} aria-label="Why haptics">
      <div className={styles.inner}>
        <p className={styles.kicker}>Why it works</p>
        <h2 className={styles.title}>Haptics make micro-feedback feel real.</h2>
        <p className={styles.body}>
          Tiny vibrations turn a toast into an interaction. Users notice it more, and it feels more “native” on mobile.
          It’s on by default—and still one prop to disable.
        </p>
        <ul className={styles.points}>
          <li>
            <span className={styles.dot} aria-hidden />
            Works on supported devices (iOS / Android).
          </li>
          <li>
            <span className={styles.dot} aria-hidden />
            Debug mode plays the pattern as sound on desktop.
          </li>
          <li>
            <span className={styles.dot} aria-hidden />
            Maps patterns per toast type (success/error/warning).
          </li>
        </ul>
      </div>
    </section>
  );
};

