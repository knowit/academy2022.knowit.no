import { useStaticQuery, graphql } from 'gatsby'
export const useFetchAllPages = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            version
            email
            siteUrl
            description
            ogImage
          }
        }
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/pages/programs/teknologi/i" } }
        ) {
          edges {
            node {
              fileAbsolutePath
              html
              frontmatter {
                title
                path
                date
                endDate
                description
                image
                teacher
                updated
                confirmed
                author
                email
                location
              }
            }
          }
        }
      }
    `
  )
  return data
}
