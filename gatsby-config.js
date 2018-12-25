module.exports = {

    siteMetadata: {
        title: `Buddeen`,
        siteUrl: `http://buddeen.com`,
      description: `On 4th July 2019 - Buddeen (Michael and Shereen) get married`,
      },

  plugins: [
    {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images`,
        },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-emotion`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
        resolve: `gatsby-plugin-typography`,
        options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/images/favcon.png",
  
        // WebApp Manifest Configuration
        appName: null, // Inferred with your package.json
        appDescription: null,
        developerName: null,
        developerURL: null,
        dir: 'auto',
        lang: 'en-US',
        background: '#fff',
        theme_color: '#fff',
        display: 'standalone',
        orientation: 'any',
        start_url: '/?homescreen=1',
        version: '1.0',
  
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    },
  ],
}