
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/the-homebaked-haven/',
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
    'index.csr.html': {size: 23591, hash: '50efe425adba7ddfd408d6c0b1dcc97deba4e8afc247afe1a682b40d1082ab89', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17165, hash: 'a1a3392485e40211d89fb744e70da3cc84f9e69e8ac79353183196bc5d2f6a22', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'business/index.html': {size: 56769, hash: '9a1d893b57ce5db33f155c3029ef6617d01dd731257848633370ce8e3294dbe0', text: () => import('./assets-chunks/business_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 27172, hash: '7882db0e4cbe4d06868faa73afc40fedec159e7fa93ee56a0681d21cb6f39b45', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'navigation/index.html': {size: 56732, hash: '318eba1eb9b4c7d5aa31841263f1fe41f405c910ee9321252311d03bce4580a0', text: () => import('./assets-chunks/navigation_index_html.mjs').then(m => m.default)},
    'business/payment/index.html': {size: 56850, hash: '2555f63325b14a35c8e29fdbd976e7772499f3ea6c930966b52e0b9655b3a153', text: () => import('./assets-chunks/business_payment_index_html.mjs').then(m => m.default)},
    'business/strategy/index.html': {size: 56852, hash: '26a82bc1c88af1a0a35b251ca7e292db02d38508aee63257da4302f2c909debc', text: () => import('./assets-chunks/business_strategy_index_html.mjs').then(m => m.default)},
    'business/order/index.html': {size: 86451, hash: '4a3de758a574d2f9b25b95bc472f177cc11682912b291acdc0134a7760e453ee', text: () => import('./assets-chunks/business_order_index_html.mjs').then(m => m.default)},
    'styles-36AW6TKX.css': {size: 6979, hash: 'vY6tjD/ce7M', text: () => import('./assets-chunks/styles-36AW6TKX_css.mjs').then(m => m.default)}
  },
};
