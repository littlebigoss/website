import createImportPlugin from 'vite-plugin-import';

const config = {
  plugins: [
    createImportPlugin([
      {
        libraryName: 'lucia',
      },
    ]),
  ],
};

export default config;