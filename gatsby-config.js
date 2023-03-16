module.exports = {
  pathPrefix: "/designportfolio",
  siteMetadata: {
    title: `Jeff Stolz - Product Designer`,
    description: `Learn about my background, how I work, and my case studies`,
    author: `Jeff Stolz`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,

    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "jeffstolz.com.s3-website.us-east-2.amazonaws.com",
      },
    },
    {
      resolve: "@mkitio/gatsby-theme-password-protect",
      options: {
        password: "jeffstolzdesign",
        partialMatching: true,
        pagePaths: ["/ads", "/dragon", "/theskills", "/mobile-heartbeat"],
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Inter`,
            file: `https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800;900&display=swap`,
          },
          {
            name: `Roboto`,
            file: `https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
