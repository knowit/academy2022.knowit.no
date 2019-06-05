import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/FrontLayout"
import AboutAcademy from "../components/AboutAcademy"
import ThePrograms from "../components/ThePrograms"

const Page = ({ data }) => {
  const { siteMetadata } = data.site

  // remove unneccessary complexity from the data.
  const programPages = data.allMarkdownRemark.edges
    .filter(i => i.node.frontmatter.path.match(/^\/programs/))
    .map(item => item.node.frontmatter)

  const aboutPage = data.allMarkdownRemark.edges.find(
    i => i.node.frontmatter.path === "/about"
  ).node

  return (
    <Layout data={siteMetadata}>
      <AboutAcademy content={aboutPage} />
      <ThePrograms pages={programPages} />
    </Layout>
  )
}

export default Page

export const query = graphql`
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
            description
          }
        }
      }
    }
  }
`
