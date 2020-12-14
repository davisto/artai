module.exports = {
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    //{
    //  resolve: `gatsby-plugin-manifest`,
    //  options: {
    //    name: `Fallfish Tenkara`,
    //    start_url: `/`,
    //    icon: `content/assets/FfT_Logo_Thumbnail.png`
    //  }
    //},
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
