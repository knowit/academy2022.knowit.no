import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/FrontLayout'
import AboutAcademy from 'components/AboutAcademy'
import ThePrograms from 'components/ThePrograms'
import SignupSection from 'components/SignupSection'

const FrontPage = ({ data, path }) => {
  // remove unneccessary complexity from the data.
  const aboutPage = data.allMarkdownRemark.edges.find(
    (i) => i.node.frontmatter.path === '/about'
  ).node

  return (
    <Layout data={data} sitemeta={data.site.siteMetadata}>
      <AboutAcademy content={aboutPage} />
      <SignupSection />
      <ThePrograms />
    </Layout>
  )
}

export default FrontPage

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
