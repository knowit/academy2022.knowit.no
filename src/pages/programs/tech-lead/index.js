import React from "react"
import { graphql } from "gatsby"
// import styled from "styled-components"
import Layout from "../../../components/FrontLayout"
import Byline from "../../../components/Byline"
import css from "../../../styles/tech-lead-index.module.scss"

const TechLeadProgram = ({ data }) => {
  const courseInfo = data.allMarkdownRemark.edges
    .filter(i => i.node.frontmatter.path.match(/^\/courses\/tech-lead/))
    .map(i => {
      i.node.frontmatter.date = new Date(i.node.frontmatter.date)
      return i
    })
    .map(i => {
      return (
        <tr>
          <td>{i.node.frontmatter.title}</td>
          <td>{i.node.frontmatter.teacher}</td>
          <td>{i.node.frontmatter.date.toLocaleDateString("no")}</td>
          <td>
            <a href={i.node.frontmatter.path}>Mer informasjon</a>
          </td>
        </tr>
      )
    })

  console.log("courses", courseInfo)
  return (
    <Layout data={data.site}>
      <section id="main">
        <Byline
          title="Tech-Lead programmet 2019/2020"
          updated="2019-06-19"
          author="Thomas Malt"
          email="academy.knowit.no"
        ></Byline>
        <table>
          <thead>
            <tr>
              <td>Tema</td>
              <td>Foredragsholder</td>
              <td>Dato</td>
              <td>Om kurset</td>
            </tr>
          </thead>
          <tbody>{courseInfo}</tbody>
        </table>
      </section>
    </Layout>
  )
}

export default TechLeadProgram

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
            image
            teacher
          }
        }
      }
    }
  }
`
