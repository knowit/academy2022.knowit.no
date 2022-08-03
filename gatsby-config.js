import { version, author } from './package.json'

export const siteMetadata = {
  title: 'Knowit Academy Norway',
  siteUrl: 'https://academy.knowit.no/',
  email: 'academy@knowit.no',
  version,
  author,
  description: `Knowit Academy er Knowits kompetanseutviklingsprogram for alle ansatte i Norge. Programmene blir gjennomført årlig og følger skoleåret. Søknadsfrist er normalt i månedsskiftet august/september og gjennomføring fra september til juni hvert år.`,
  ogImage:
    'https://academy.knowit.no/assets/knowit_academy_banner_flamingo.png',
  image: 'https://academy.knowit.no/assets/knowit_academy_banner_flamingo.png',
  logo: 'https://academy.knowit.no/assets/knowit_academy_banner_flamingo.png',
}
export const plugins = [
  'gatsby-plugin-resolve-src',
  'gatsby-theme-material-ui',
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
]
