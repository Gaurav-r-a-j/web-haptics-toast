export const Footer = () => {
  return (
    <footer className="mt-12 border-t border-[var(--border)] bg-[var(--bg-secondary)] px-0 py-6 max-[600px]:mt-10 max-[600px]:py-5">
      <div className="container">
        <p className="m-0 flex flex-wrap items-center gap-x-2 gap-y-1.5 text-[0.8125rem] leading-[1.5] text-[var(--text-secondary)]">
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
