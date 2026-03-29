import { CodeBlock } from '@/src/components/shared/code-block';
import { HeroText } from '@/src/components/ui/hero-text';

export const Usage = () => {
  return (
    <div className="p-8 md:p-16 lg:py-20 border-b border-border text-foreground bg-background">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <HeroText shadowColor="#cfd9fc" className="text-4xl md:text-6xl lg:text-7xl mb-12 text-primary leading-none uppercase text-center w-full">
          USAGE
        </HeroText>
        <p className="m-0 mb-12 max-w-2xl text-center text-lg md:text-xl font-bold leading-relaxed text-muted-foreground">
          Mount <code className="text-secondary">Toaster</code> once at your app root, and trigger premium tactile toasts from any component in your tree.
        </p>
        <div className="max-w-3xl w-full">
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
      </div>
    </div>
  );
};
