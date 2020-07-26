const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-brainhubeu-gatsby-docs-kit-src-templates-default-js": hot(preferDefault(require("/Users/bogdanmartinescu/Desktop/Kroot-UI/site/node_modules/@brainhubeu/gatsby-docs-kit/src/templates/default.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/bogdanmartinescu/Desktop/Kroot-UI/site/src/pages/404.js"))),
  "component---src-pages-landing-js": hot(preferDefault(require("/Users/bogdanmartinescu/Desktop/Kroot-UI/site/src/pages/landing.js")))
}

