import React from 'react';
import { Footer, Layout, Navbar } from 'nextra-theme-docs';
import { getPageMap } from 'nextra/page-map';
import { Search } from 'nextra/components';
import { Logo } from '@/src/components/ui/logo';
import { DocsToaster } from '@/src/components/shared/docs-toaster';
import 'nextra-theme-docs/style.css';

const docsRepositoryBase = 'https://github.com/Gaurav-r-a-j/web-haptics-toast/tree/main/website';

/**
 * DocLayout Container
 * 
 * Centralized Nextra documentation layout component.
 * Simplified Server Component that handles page fetching for Nextra 4.
 */
export default async function DocLayout({ children }: { children: React.ReactNode }) {
  let pageMap: any[];
  try {
    pageMap = await getPageMap('/(docs)');
  } catch (error) {
    console.warn('[DocLayout] Failed to read documentation page map:', error);
    pageMap = [];
  }

  return (
    <Layout
      navbar={
        <Navbar
          logo={<Logo />}
          projectLink="https://github.com/Gaurav-r-a-j/web-haptics-toast"
        >
          <Search />
        </Navbar>
      }
      pageMap={pageMap}
      docsRepositoryBase={docsRepositoryBase}
      footer={<Footer>MIT {new Date().getFullYear()} © web-haptics-toast</Footer>}
    >
      <DocsToaster />
      {children}
    </Layout>
  );
}
