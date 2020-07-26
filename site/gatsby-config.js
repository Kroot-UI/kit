const path = require('path');

// eslint-disable-next-line import/no-unresolved
const pluginConfigFactory = require('@brainhubeu/gatsby-docs-kit/plugins');

module.exports = {
  siteMetadata: {
    title: 'Kroot UI Kit for SaaS Applications',
    description: 'A React UI Kit for SaaS Applications',
    image: '',
    url: 'https://github.com/Kroot-UI/react-kit',
    type: 'article',
    siteName: 'Kroot UI Kit',
    githubUrl: 'https://github.com/Kroot-UI',
  },

  // URL prefix on production environment. For more info see https://www.gatsbyjs.org/docs/path-prefix/
  pathPrefix: process.env.PATH_PREFIX || '',

  plugins: pluginConfigFactory({
    config: `${__dirname}/gatsby-docs-kit.yml`,
    resources: path.resolve(__dirname, './docs'),
  }),
};
