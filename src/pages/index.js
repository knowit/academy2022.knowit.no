import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/FrontLayout"
import AboutAcademy from "../components/AboutAcademy/about"
import ThePrograms from "../components/ThePrograms"
import SignupSection from "../components/SignupSection"

const Page = ({ data, path }) => {
  console.log("page:", path)
  const { siteMetadata } = data.site

  // remove unneccessary complexity from the data.
  const programPages = data.allMarkdownRemark.edges
    .filter((i) => i.node.frontmatter.path.match(/^\/programs\/about/))
    .map((item) => item.node.frontmatter)

  const aboutPage = data.allMarkdownRemark.edges.find(
    (i) => i.node.frontmatter.path === "/about"
  ).node

  // <SignupSection />
  return (
    <Layout data={siteMetadata}>
      <AboutAcademy content={aboutPage} />
      <ThePrograms pages={programPages} />
      <SignupSection></SignupSection>
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
        email
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
