import { useStaticQuery, graphql } from 'gatsby'

export const useAboutCourses = () => {
  const programs = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/pages/courses/.*about.md/i" } }
      ) {
        edges {
          node {
            frontmatter {
              path
              title
              description
              application
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
