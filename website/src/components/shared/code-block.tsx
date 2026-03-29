import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import useMeasure from 'react-use-measure';
import copy from 'copy-to-clipboard';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';

const variants = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0.5 },
};

const theme = {
  plain: {
    color: '#e4e4e7', // zinc-200
    fontSize: 13,
    fontFamily: 'var(--font-mono)',
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: '#71717a', // zinc-500
        fontStyle: 'italic',
      },
    },
    {
      types: ['atrule', 'keyword', 'attr-name', 'selector'],
      style: {
        color: '#818cf8', // indigo-400
      },
    },
    {
      types: ['attr-value', 'string', 'char'],
      style: {
        color: '#34d399', // emerald-400
      },
    },
    {
      types: ['punctuation', 'operator'],
      style: {
        color: '#a1a1aa', // zinc-400
      },
    },
    {
      types: ['function', 'deleted', 'tag'],
      style: {
        color: '#fbbf24', // amber-400
      },
    },
    {
      types: ['class-name', 'constant', 'symbol'],
      style: {
        color: '#fb7185', // rose-400
      },
    },
    {
      types: ['boolean', 'number'],
      style: {
        color: '#f472b6', // pink-400
      },
    },
  ],
};

export const CodeBlock = ({ children, initialHeight = 0 }: { children: string; initialHeight?: number }) => {
  const [ref, bounds] = useMeasure();
  const [copying, setCopying] = React.useState<number>(0);

  const onCopy = React.useCallback(() => {
    copy(children);
    setCopying((c) => c + 1);
    setTimeout(() => {
      setCopying((c) => c - 1);
    }, 2000);
  }, [children]);

  return (
    <div className="relative group">
      <button
        type="button"
        onClick={onCopy}
        aria-label="Copy code"
        className="absolute right-[0.75rem] top-[0.75rem] z-[1] flex h-[28px] w-[28px] items-center justify-center rounded-sm border border-border bg-background text-foreground opacity-0 transition-[background,box-shadow,opacity] duration-200 hover:bg-secondary group-hover:opacity-100 focus-visible:opacity-100 focus-visible:shadow-focus-accent"
      >
        <MotionConfig transition={{ duration: 0.15 }}>
          <AnimatePresence initial={false} mode="wait">
            {copying ? (
              <motion.div animate="visible" exit="hidden" initial="hidden" key="check" variants={variants}>
                <svg
                  viewBox="0 0 24 24"
                  width="14"
                  height="14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  shapeRendering="geometricPrecision"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </motion.div>
            ) : (
              <motion.div animate="visible" exit="hidden" initial="hidden" key="copy" variants={variants}>
                <svg
                  viewBox="0 0 24 24"
                  width="14"
                  height="14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  shapeRendering="geometricPrecision"
                >
                  <path d="M8 17.929H6c-1.105 0-2-.912-2-2.036V5.036C4 3.91 4.895 3 6 3h8c1.105 0 2 .911 2 2.036v1.866m-6 .17h8c1.105 0 2 .91 2 2.035v10.857C20 21.09 19.105 22 18 22h-8c-1.105 0-2-.911-2-2.036V9.107c0-1.124.895-2.036 2-2.036z"></path>
                </svg>
              </motion.div>
            )}
          </AnimatePresence>
        </MotionConfig>
      </button>
      {/* @ts-ignore */}
      <Highlight {...defaultProps} theme={theme} code={children} language="jsx">
        {({ className, tokens, getLineProps, getTokenProps }) => (
          <motion.pre
            className="relative mt-[1rem] overflow-hidden rounded border border-border !p-0"
            animate={{ height: bounds.height || initialHeight }}
            transition={{ type: 'easeOut', duration: 0.2 }}
          >
            <div
              className={`${className} relative m-0 overflow-x-auto rounded-sm bg-[#09090b] p-6 leading-[1.6] whitespace-pre [-webkit-overflow-scrolling:touch]`}
              ref={ref}
            >
              <div />
              {tokens.map((line, i) => {
                const { key: lineKey, ...rest } = getLineProps({ line, key: i });
                return (
                  <div key={lineKey} {...rest}>
                    {line.map((token, key) => {
                      const { key: tokenKey, ...rest } = getTokenProps({ token, key });
                      return <span key={tokenKey} {...rest} />;
                    })}
                  </div>
                );
              })}
            </div>
          </motion.pre>
        )}
      </Highlight>
    </div>
  );
};
