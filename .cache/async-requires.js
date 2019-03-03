// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("/Users/immbudden/Development/Buddeen/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-index-js": () => import("/Users/immbudden/Development/Buddeen/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-tabs-getting-here-js": () => import("/Users/immbudden/Development/Buddeen/src/pages/tabs/GettingHere.js" /* webpackChunkName: "component---src-pages-tabs-getting-here-js" */),
  "component---src-pages-tabs-travel-tabs-js": () => import("/Users/immbudden/Development/Buddeen/src/pages/tabs/travelTabs.js" /* webpackChunkName: "component---src-pages-tabs-travel-tabs-js" */),
  "component---src-pages-travel-js": () => import("/Users/immbudden/Development/Buddeen/src/pages/travel.js" /* webpackChunkName: "component---src-pages-travel-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/immbudden/Development/Buddeen/.cache/data.json")

