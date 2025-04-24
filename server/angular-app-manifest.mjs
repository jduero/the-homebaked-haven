
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://jduero.github.io/the-homebaked-haven/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/the-homebaked-haven/home",
    "route": "/the-homebaked-haven"
  },
  {
    "renderMode": 2,
    "route": "/the-homebaked-haven/home"
  },
  {
    "renderMode": 2,
    "route": "/the-homebaked-haven/navigation"
  },
  {
    "renderMode": 2,
    "route": "/the-homebaked-haven/business"
  },
  {
    "renderMode": 2,
    "route": "/the-homebaked-haven/business/order"
  },
  {
    "renderMode": 2,
    "route": "/the-homebaked-haven/business/payment"
  },
  {
    "renderMode": 2,
    "route": "/the-homebaked-haven/business/strategy"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23615, hash: 'bac1024433c44f75fffcf4dc35ae9f2d4b71e3ebefede24becfbf702bc422ddd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17189, hash: 'c08d97de4698b36f4b45847ca0c0760d769188ad609dd0f9be3e734930e15eb8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 27220, hash: '43d3350e540c74112f37268f68863b1b81f2d5bf37948ffe2eb4ec31ff68c003', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'navigation/index.html': {size: 56852, hash: '543bd4f49864428a9c420e27fdaac01bac44ee88477f6545460c933b1f1a3778', text: () => import('./assets-chunks/navigation_index_html.mjs').then(m => m.default)},
    'business/payment/index.html': {size: 56970, hash: '05c1eb382d2417ad39a2ff9d0267c6eb54bc9cbacd5304c9d7c36f6ccd4ebcdd', text: () => import('./assets-chunks/business_payment_index_html.mjs').then(m => m.default)},
    'business/index.html': {size: 56889, hash: 'b9596f47aa1ebdc0df7a09af11bcb73ebab5dd2e0cd0c64aa29a710c00e15537', text: () => import('./assets-chunks/business_index_html.mjs').then(m => m.default)},
    'business/strategy/index.html': {size: 56972, hash: 'aa6b50962287d9ab1e2342b38cdb4c7945b1663b129073dc98b21ab8a62a896c', text: () => import('./assets-chunks/business_strategy_index_html.mjs').then(m => m.default)},
    'business/order/index.html': {size: 86571, hash: '6c0db2fb28298a32be173dc325f0b956b4a9d8a6c9e8f54eb4457c579db31873', text: () => import('./assets-chunks/business_order_index_html.mjs').then(m => m.default)},
    'styles-36AW6TKX.css': {size: 6979, hash: 'vY6tjD/ce7M', text: () => import('./assets-chunks/styles-36AW6TKX_css.mjs').then(m => m.default)}
  },
};
