import { useStaticQuery, graphql } from 'gatsby'

export const useAboutPrograms = () => {
  const programs = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/pages/programs/.*about.md/i" } }
      ) {
        edges {
          node {
            frontmatter {
              path
              title
              description
            }
            fileAbsolutePath
            id
          }
        }
      }
    }
  `)

  return programs.allMarkdownRemark.edges.map((item) =>
    Object.assign(item.node, item.node.frontmatter)
  )
}
