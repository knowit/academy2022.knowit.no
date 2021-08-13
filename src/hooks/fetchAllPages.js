import { useStaticQuery, graphql } from "gatsby"
const FetchAllPages = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            siteUrl
            description
            ogImage
          }
        }
        allMarkdownRemark {
          edges {
            node {
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

export default FetchAllPages
