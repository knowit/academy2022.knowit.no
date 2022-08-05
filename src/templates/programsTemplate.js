import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/FrontLayout'
import BlogHeader from 'components/BlogHeader'
import InfoHeader from 'components/InfoHeader'
import { Helmet } from 'react-helmet'
import * as css from 'styles/programTemplate.module.scss'
import { Box, Container } from '@mui/material'

// export default function Template({
//   data, // this prop will be injected by the GraphQL query below.
// }) {

const Template = ({ data }) => {
  const { markdownRemark, site } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark

  const showInfoHeader = () => {
    if (frontmatter.path.match(/\/courses/)) {
      return <InfoHeader data={markdownRemark} />
    } else {
      return <BlogHeader data={markdownRemark} />
    }
  }

  console.log('should show info header:', frontmatter.path, showInfoHeader)
  return (
    <Layout data={data} sitemeta={site.siteMetadata}>
      <Helmet>
        <title>{frontmatter.title}</title>
        <meta name="description" content={frontmatter.description} />
        <meta property="og:title" content={frontmatter.title} />
        <meta property="og:description" content={frontmatter.description} />
      </Helmet>
      <Container maxWidth="tablet">
        {showInfoHeader()}
        <Box
          pb={12}
          className={css.articleContent}
          dangerouslySetInnerHTML={{ __html: html }}
        ></Box>
      </Container>
    </Layout>
  )
}
export default Template

export const pageQuery = graphql`
  query ($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        location
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
        email
        siteUrl
        description
        ogImage
      }
    }
  }
`
