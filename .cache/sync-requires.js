// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-index-js": preferDefault(require("/Users/immbudden/Development/Buddeen/src/pages/index.js"))
}

