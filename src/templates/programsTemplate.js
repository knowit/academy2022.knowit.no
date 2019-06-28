import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/FrontLayout"
import InfoHeader from "../components/InfoHeader"
import BlogHeader from "../components/BlogHeader"
import Helmet from "react-helmet"
import css from "../styles/programTemplate.module.scss"

// export default function Template({
//   data, // this prop will be injected by the GraphQL query below.
// }) {

const Template = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark

  const showInfoHeader = () => {
    if (frontmatter.path.match(/\/courses/)) {
      return <InfoHeader data={markdownRemark} />
    } else {
      return <BlogHeader data={markdownRemark} />
    }
  }
  console.log("should show info header:", frontmatter.path, showInfoHeader)
  return (
    <Layout data={data}>
      <Helmet>
        <title>{frontmatter.title}</title>
        <meta name="description" content={frontmatter.description} />
        <meta property="og:title" content={frontmatter.title} />
        <meta property="og:description" content={frontmatter.description} />
      </Helmet>
      <section>
        <div className={css.content}>
          {showInfoHeader()}
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </section>
    </Layout>
  )
}
export default Template

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        endDate
        path
        title
        description
        image
        updated
        email
        author
        teacher
        confirmed
      }
    }
    site {
      siteMetadata {
        title
        siteUrl
        description
        ogImage
      }
    }
  }
`
