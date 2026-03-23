export default {
  darkMode: true,
  nextThemes: {
    defaultTheme: 'system',
    storageKey: 'theme',
  },
  logo: <span style={{ fontWeight: 600 }}>web-haptics-toast</span>,
  project: {
    link: 'https://github.com/Gaurav-r-a-j/web-haptics-toast',
  },
  docsRepositoryBase: 'https://github.com/Gaurav-r-a-j/web-haptics-toast/tree/main/website',
  useNextSeoProps() {
    return {
      titleTemplate: '%s – web-haptics-toast',
    };
  },
  feedback: {
    content: null,
  },
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{' '}
        <a href="https://studio.designbyte.dev" target="_blank" rel="noopener noreferrer">
          DesignByte
        </a>
        .
      </span>
    ),
  },
};
