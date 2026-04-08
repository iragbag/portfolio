module.exports = {
  siteMetadata: {
    siteUrl: "https://www.raghavsharma.ca",
    title: "Raghav Sharma | Digital Analytics Professional",
    description: "Professional resume showcasing digital analytics expertise, skills, and experience",
    author: "Raghav Sharma",
  },
  plugins: [
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
