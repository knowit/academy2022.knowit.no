module.exports = {
  siteMetadata: {
    title: "Knowit Academy Norway",
    siteUrl: "https://academy.knowit.no/",
    description:
      "Knowit Academy Norway er Knowits kompetanseutviklingsprogram for ansatte i alle norske enheter. Planleggingen av programmet for 2021-2022 er i gang, og mer informasjon vil bli lagt ut så snart det er klart.",
    ogImage: "https://academy.knowit.no/assets/knowit_academy_banner_green.png",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "markdown-pages",
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-69253249-4",
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ["material icons"],
      },
    },
    // {
    //   resolve: `gatsby-transformer-remark`,
    //   options: {
    //     plugins: [`gatsby-remark-responsive-iframe`],
    //   },
    // },
  ],
}
