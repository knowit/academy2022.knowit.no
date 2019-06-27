import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/FrontLayout"
import AboutAcademy from "../components/AboutAcademy"
import ThePrograms from "../components/ThePrograms"
import styled from "styled-components"
import colors from "../utils/colors"

const SignUpTitle = styled.h2`
  color: ${colors.knowit.purple[0]};
  max-width: 960px;
  margin-bottom: 24px;
`

const SignUpButton = styled.a`
  text-align: center;
  width: 78vw;
  max-width: 320px;
  display: block;
  background-color: ${colors.knowit.green[1]};
  padding: 16px 16px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.24);
  margin: 24px auto;
  text-decoration: none;
  color: white;
  border-radius: 4px;

  &:active {
    background-color: pink;
  }
`

const SignupSection = styled.section`
  margin: auto;
  padding: 48px 20px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 1.56em;
  text-align: center;
  background-color: ${colors.knowit.red[3]};

  & > p {
    max-width: 960px;
    margin: auto;
    width: 100%;
  }
`

const SignUp = () => {
  return (
    <SignupSection id="signup">
      <SignUpTitle>Påmelding</SignUpTitle>
      <p>
        Påmelding er planlagt å starte i midten av august, med{" "}
        <b>søknadsfrist 31. august, 2019</b>. Mer informasjon om
        søknadsprosessen vil bli sendt ut rett over sommeren.
      </p>
      <SignUpButton href="how-to-apply" alt="Information about how to apply">
        Hvordan søke
      </SignUpButton>
    </SignupSection>
  )
}

const Page = ({ data }) => {
  const { siteMetadata } = data.site

  // remove unneccessary complexity from the data.
  const programPages = data.allMarkdownRemark.edges
    .filter((i) => i.node.frontmatter.path.match(/^\/programs/))
    .map((item) => item.node.frontmatter)

  const aboutPage = data.allMarkdownRemark.edges.find(
    (i) => i.node.frontmatter.path === "/about"
  ).node

  return (
    <Layout data={siteMetadata}>
      <ThePrograms pages={programPages} />
      <SignUp />
      <AboutAcademy content={aboutPage} />
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
