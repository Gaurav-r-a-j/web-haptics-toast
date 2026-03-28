import type { ReactNode } from 'react';
import { Footer, Layout, Navbar } from 'nextra-theme-docs';
import { Head, Search } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import 'nextra-theme-docs/style.css';

const docsRepositoryBase = 'https://github.com/Gaurav-r-a-j/web-haptics-toast/tree/main/website';

export default async function DocsLayout({ children }: { children: ReactNode }) {
  let pageMap;
  try {
    pageMap = await getPageMap('/(docs)');
  } catch {
    pageMap = await getPageMap();
  }

  return (
    <>
      <Head
        backgroundColor={{
          dark: '#141210',
          light: '#faf8f2',
        }}
      />
      <Layout
        nextThemes={{
          defaultTheme: 'system',
          storageKey: 'theme',
        }}
        pageMap={pageMap}
        docsRepositoryBase={docsRepositoryBase}
        navbar={
          <Navbar
            logo={<span className="font-semibold">web-haptics-toast</span>}
            projectLink="https://github.com/Gaurav-r-a-j/web-haptics-toast"
          />
        }
        search={<Search />}
        footer={
          <Footer>
            <span>
              MIT {new Date().getFullYear()} ©{' '}
              <a href="https://studio.designbyte.dev" target="_blank" rel="noopener noreferrer">
                DesignByte
              </a>
              .
            </span>
          </Footer>
        }
      >
        {children}
      </Layout>
    </>
  );
}
