import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import AcademyLogoBanner from "../components/AcademyLogoBanner"
import AboutAcademy from "../components/AboutAcademy"

const IndexPage = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  margin: auto;
  & > * {
    margin: 0 auto;
    text-align: left;
    display: block;
  }
`

const Page = ({ data }) => (
  <Layout data={data}>
    <IndexPage>
      <AcademyLogoBanner />
      <AboutAcademy />
    </IndexPage>
  </Layout>
)

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
