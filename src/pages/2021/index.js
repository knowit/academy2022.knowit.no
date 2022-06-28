import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/FrontLayout'
import AboutAcademy from 'components/AboutAcademy/about'
import ThePrograms from 'components/ThePrograms'
// import SignupSection from 'components/SignupSection'

const Page = ({ data, path }) => {
  // remove unneccessary complexity from the data.
  const programPages = data.allMarkdownRemark.edges
    .filter((i) => i.node.frontmatter.path.match(/^\/programs\/about/))
    .map((item) => item.node.frontmatter)
    .sort()

  const aboutPage = data.allMarkdownRemark.edges.find(
    (i) => i.node.frontmatter.path === '/about'
  ).node

  // front page index console.log('programs ya:', programPages)
  // <SignupSection />
  return (
    <Layout data={data} sitemeta={data.site.siteMetadata}>
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
        email
        ogImage
      }
    }
    allMarkdownRemark {
      edges {
        node {
          fileAbsolutePath
          html
          frontmatter {
            title
            author
            path
            date
            image
            ogImage
            description
          }
        }
      }
    }
  }
`
