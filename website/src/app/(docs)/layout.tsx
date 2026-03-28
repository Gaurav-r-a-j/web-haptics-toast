import DocLayout from '@/src/containers/DocLayout/DocLayout';

/**
 * App Router Documentation Layout
 * 
 * Server component that wraps documentation pages in the DocLayout container.
 * Simplified to use the centralized container for better maintainability.
 */
export default async function Layout({ children }: { children: any }) {
  return (
    <DocLayout>
      {children}
    </DocLayout>
  );
}
