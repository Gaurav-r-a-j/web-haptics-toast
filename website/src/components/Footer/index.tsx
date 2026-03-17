import styles from './footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className="container">
        <p className={styles.p}>
          <span className={styles.mark} aria-hidden>
            db
          </span>
          <span>
            Built by{' '}
            <a href="https://github.com/designbyte-official" target="_blank" rel="noopener noreferrer">
              DesignByte
            </a>
            .
          </span>
        </p>
      </div>
    </footer>
  );
};
