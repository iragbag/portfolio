module.exports = {
  siteMetadata: {
    siteUrl: "https://www.raghavsharma.ca",
    title: "Resume and Blog",
  },
  plugins: [
    {
      resolve: `gatsby-source-notion-api`,
      options: {
        token: `secret_LcuM9uj0tVejQSlj56ejDtRhAseFXLv4ZaWjigqmV7q`,
        databaseId: `122cd97ec5da430dbf34df91c8797100`,
        propsToFrontmatter: true,
        lowerTitleLevel: true,
      },
    },
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
