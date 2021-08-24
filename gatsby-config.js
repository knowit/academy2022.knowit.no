module.exports = {
  siteMetadata: {
    title: 'Knowit Academy Norway',
    siteUrl: 'https://academy.knowit.no/',
    email: 'academy@knowit.no',
    description: `Knowit Academy er Knowits kompetanseutviklingsprogram for 
      alle ansatte i Knowit Norge. Søknadsfristen for årets programmer er 
      12. september, 2021 og påmeldingen åpner 30. august.`,
    ogImage:
      'https://academy.knowit.no/assets/knowit_academy_banner_flamingo.png',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'markdown-pages',
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-69253249-4',
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ['material icons'],
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
