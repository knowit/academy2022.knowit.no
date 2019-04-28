import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/FrontLayout"
import Helmet from "react-helmet"
import colors from "../utils/colors"

const ContentDiv = styled.div`
  margin: 20px;

  h1,
  h2 {
    font-weight: 400;
    color: ${colors.knowit.red[0]};
  }

  h1 {
    font-size: calc(1.4em + 0.6vw);
  }

  h2 {
    font-size: calc(1em + 0.6vw);
  }
`

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
      <ContentDiv>
        <b>{frontmatter.title}</b>
        <div>{frontmatter.date}</div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </ContentDiv>
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
