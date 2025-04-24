
export default {
  basePath: 'https://jduero.github.io/the-homebaked-haven',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
