import React from 'react';
import { linkExternal, sectionLabel, sectionTitle } from '@/src/utils/site-ui';

export const How = () => {
  return (
    <div>
      <p className={sectionLabel} aria-hidden>
        Learn
      </p>
      <h2 id="how-heading" className={sectionTitle}>
        Want to learn how to make components like this one?
      </h2>
      <p className="m-0 max-w-[52ch] text-[0.9375rem] leading-[1.55] text-muted-foreground">
        Motion on the web, taught clearly:{' '}
        <a href="https://animations.dev/" target="_blank" rel="noopener noreferrer" className={linkExternal}>
          animations.dev
        </a>
      </p>
    </div>
  );
};
