import { CodeBlock } from '../CodeBlock';

export const Usage = () => {
  return (
    <div>
      <p className="section-label" aria-hidden>Code</p>
      <h2 id="usage-heading">Usage</h2>
      <p className="m-0 mb-1 max-w-[52ch] text-[0.9375rem] leading-[1.55] text-[var(--text-secondary)]">
        Render <code className="text-[0.8125rem]">Toaster</code> once at the root, then call <code className="text-[0.8125rem]">toast()</code> from anywhere in the tree.
      </p>
      <CodeBlock initialHeight={270}>{`import { Toaster, toast } from 'web-haptics-toast'
import 'web-haptics-toast/dist/styles.css'

function App() {
  return (
    <div>
      <Toaster />
      <button onClick={() => toast('My first toast')}>
        Give me a toast
      </button>
    </div>
  )
}`}</CodeBlock>
    </div>
  );
};
