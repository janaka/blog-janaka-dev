require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `janaka.dev`,
    author: {
      name: `Janaka Abeywardhana`,
      summary: `Personal notes and thoughts on web technology, software development, and technical product management`,
    },
    description: `Personal notes and thoughts on web technology, software development, and technical product management`,
    siteUrl: `https://janaka.dev/`,
    social: {
      twitter: `janaka_a`,
      github: `janaka`,
      instagram: `janaka_a`
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-s3`,
      options: {
          bucketName: `janaka.dev`,
          protocol: `https`,
          hostname: `janaka.dev`,
          mergeCachingParams: true,
          removeNonexistentObjects: true,
          acl: `BucketCannedACL`,
          enableS3StaticWebsiteHosting: true,
          parallelLimit: 20
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-plugin-dark-mode`,
    `gatsby-transformer-sharp`,
    {resolve: `gatsby-plugin-sharp`,
     options: {
      defaultQuality: 91
     }  
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-7526648-3`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `janaka.dev`,
        short_name: `janaka.dev`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#00ffff`,
        display: `minimal-ui`,
        icon: `content/assets/icon-512x512.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://janaka.dev`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}