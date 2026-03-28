import { useMDXComponents as useThemeMDXComponents } from 'nextra-theme-docs';
import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...useThemeMDXComponents(components),
    ...components,
  };
}
