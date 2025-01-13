module.exports = {
  siteMetadata: {
    siteUrl: "https://www.raghavsharma.ca",
    title: "Raghav Sharma's Past Experience",
  },
  plugins: [
    /*{
      resolve: `gatsby-source-notion-api`,
      options: {
        token: `secret_l2ZV5iruS1kYT7Twv5X2wGSx63XgQJi81ybmx4pbEAZ`,
        databaseId: `e1521520d14248c6822c02018efede6e`,
        propsToFrontmatter: true,
        lowerTitleLevel: true,
      },
    },*/
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-TPVQR76",
        includeInDevelopment: true,
        enableWebVitalsTracking: true,
      },
    },
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/custom_favicon.png",
      },
    },
  ],
};
