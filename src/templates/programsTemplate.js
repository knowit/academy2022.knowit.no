import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/FrontLayout"
import Helmet from "react-helmet"
import colors from "../utils/colors"
import css from "../styles/programTemplate.module.scss"

// export default function Template({
//   data, // this prop will be injected by the GraphQL query below.
// }) {
const Template = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout data={data}>
      <Helmet>
        <title>{frontmatter.title}</title>
        <meta name="description" content={frontmatter.description} />
        <meta property="og:title" content={frontmatter.title} />
        <meta property="og:description" content={frontmatter.description} />
      </Helmet>
      <div className={css.content}>
        <b>{frontmatter.title}</b>
        <div>{frontmatter.date}</div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}
export default Template

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        path
        title
        description
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
