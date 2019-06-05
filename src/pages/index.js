import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/FrontLayout"
import AboutAcademy from "../components/AboutAcademy"
import ThePrograms from "../components/ThePrograms"
import styled from "styled-components"
import colors from "../utils/colors"

const SignUpTitle = styled.h2`
  color: ${colors.knowit.purple[0]};
`

const SignUpButton = styled.p`
  text-align: center;
  a {
    display: inline-block;
    text-decoration: none;
    background-color: ${colors.knowit.green[1]};
    height: 24px;
    padding: 16px 16px;
    color: white;
    border-radius: 4px;
    width: 320px;
    vertical-align: middle;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.24);
  }
`

const SignUp = () => {
  return (
    <section id="signup">
      <SignUpTitle>Påmelding</SignUpTitle>
      <p>
        Påmelding er planlagt å starte i midten av august, med{" "}
        <b>søknadsfrist 31. august, 2019</b>.
      </p>
      <p>Mer informasjon om dette vil bli sendt ut rett over sommeren.</p>
      <SignUpButton>
        <a href="how-to-apply" alt="Information about how to apply">
          Hvordan søke
        </a>
      </SignUpButton>
    </section>
  )
}

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
      <SignUp />
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
