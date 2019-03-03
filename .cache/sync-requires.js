const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/immbudden/Development/Buddeen/.cache/dev-404-page.js"))),
  "component---src-pages-faq-js": hot(preferDefault(require("/Users/immbudden/Development/Buddeen/src/pages/faq.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/immbudden/Development/Buddeen/src/pages/index.js"))),
  "component---src-pages-tabs-big-day-js": hot(preferDefault(require("/Users/immbudden/Development/Buddeen/src/pages/tabs/BigDay.js"))),
  "component---src-pages-tabs-getting-here-js": hot(preferDefault(require("/Users/immbudden/Development/Buddeen/src/pages/tabs/GettingHere.js"))),
  "component---src-pages-tabs-travel-tabs-js": hot(preferDefault(require("/Users/immbudden/Development/Buddeen/src/pages/tabs/travelTabs.js"))),
  "component---src-pages-travel-js": hot(preferDefault(require("/Users/immbudden/Development/Buddeen/src/pages/travel.js")))
}

