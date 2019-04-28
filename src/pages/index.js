import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/FrontLayout"
import AboutAcademy from "../components/AboutAcademy"

const Page = ({ data }) => {
  const { siteMetadata } = data.site
  return (
    <Layout data={siteMetadata}>
      <AboutAcademy />
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
  }
`
