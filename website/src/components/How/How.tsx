import React from 'react';

export const How = () => {
  return (
    <div>
      <p className="section-label" aria-hidden>Learn</p>
      <h2 id="how-heading">Want to learn how to make components like this one?</h2>
      <p className="m-0 max-w-[52ch] text-[0.9375rem] leading-[1.55] text-[var(--text-secondary)]">
        Motion on the web, taught clearly:{' '}
        <a href="https://animations.dev/" target="_blank" rel="noopener noreferrer" className="link-external">
          animations.dev
        </a>
      </p>
    </div>
  );
};
