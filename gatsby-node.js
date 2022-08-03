import { resolve } from 'path'

export function createPages({ actions, graphql }) {
  const { createPage } = actions

  const programsTemplate = resolve(`src/templates/programsTemplate.js`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: programsTemplate,
        context: {}, // additional data can be passed via context
      })
    })
  })
}
