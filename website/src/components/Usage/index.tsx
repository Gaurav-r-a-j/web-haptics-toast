import { CodeBlock } from '../CodeBlock';

export const Usage = () => {
  return (
    <div>
      <p className="section-label" aria-hidden>Code</p>
      <h2 id="usage-heading">Usage</h2>
      <p>Render the toaster in the root of your app.</p>
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
