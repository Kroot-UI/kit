// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---node-modules-brainhubeu-gatsby-docs-kit-src-templates-default-js": () => import("./../node_modules/@brainhubeu/gatsby-docs-kit/src/templates/default.js" /* webpackChunkName: "component---node-modules-brainhubeu-gatsby-docs-kit-src-templates-default-js" */),
  "component---src-pages-404-js": () => import("./../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-landing-js": () => import("./../src/pages/landing.js" /* webpackChunkName: "component---src-pages-landing-js" */)
}

