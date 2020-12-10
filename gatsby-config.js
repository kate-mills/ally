require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Ally Digital Solutions`,
    author: `Ally Digital Solutions`,
    description: `Beautiful and innovative web solutions for spas & salons.`,
    twitterUsername: `@katie_napa`,
    image: `/background/Napa.jpeg`,
    siteUrl: `https://allydigital.netlify.app`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://allydigital.netlify.app',
        sitemap: 'https://allydigital.netlify.app/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.GATSBY_AIRTABLE_API_KEY, 
        concurrency: 5,
        tables: [
          {
            baseId: process.env.GATSBY_AIRTABLE_SERVICES_BASE_ID,
            tableName: `Services`,
            mapping: {images: `fileNode`}
          }
        ]
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-transition-link`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
  ],
}
