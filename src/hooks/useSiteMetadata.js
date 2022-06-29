import { useStaticQuery, graphql } from 'gatsby'

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
          email
          ogImage
          image
          logo
          version
          author
        }
      }
    }
  `)

  return data.site.siteMetadata
}
