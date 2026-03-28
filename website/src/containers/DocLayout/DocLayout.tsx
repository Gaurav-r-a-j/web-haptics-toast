import React, { ReactNode } from 'react';
import { Footer, Layout, Navbar } from 'nextra-theme-docs';
import { getPageMap } from 'nextra/page-map';
import { Search } from 'nextra/components';
import 'nextra-theme-docs/style.css';

const docsRepositoryBase = 'https://github.com/Gaurav-r-a-j/web-haptics-toast/tree/main/website';

/**
 * DocLayout Container
 * 
 * Centralized Nextra documentation layout component.
 * Moved to a separate container directory to follow project folder structure best practices.
 */
export default async function DocLayout({ children }: { children: any }) {
  let pageMap;
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
          logo={<strong>web-haptics-toast</strong>}
          projectLink="https://github.com/Gaurav-r-a-j/web-haptics-toast"
        >
          <Search />
        </Navbar>
      }
      pageMap={pageMap}
      docsRepositoryBase={docsRepositoryBase}
      footer={<Footer>MIT {new Date().getFullYear()} © web-haptics-toast</Footer>}
    >
      {children}
    </Layout>
  );
}
