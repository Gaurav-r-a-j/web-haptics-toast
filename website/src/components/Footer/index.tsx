export const Footer = () => {
  return (
    <footer className="mt-[3rem] border-t border-[var(--border)] bg-[var(--bg-secondary)] px-0 py-[1.5rem] max-[600px]:mt-[2.5rem] max-[600px]:py-[1.25rem]">
      <div className="container">
        <p className="m-0 flex items-center gap-2 text-[0.8125rem] text-[var(--text-secondary)]">
          <span className="inline-flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[var(--accent)] px-0 text-[0.75rem] font-bold tracking-[-0.02em] text-[var(--text-on-accent)]" aria-hidden>
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
