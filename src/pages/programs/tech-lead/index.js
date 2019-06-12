import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../../../components/FrontLayout"

const CourseTable = styled.table`
  border-collapse: collapse;
  td {
    margin: 0;
    border: 1px solid black;
    padding: 6px;
    margin: 0;
  }

  thead td {
    font-weight: bold;
  }
`
const TechLeadProgram = ({ data }) => {
  return (
    <Layout data={data.site}>
      <h1>Tech Lead programmet 2019/2020</h1>
      <CourseTable>
        <thead>
          <tr>
            <td>Tema</td>
            <td>Foredragsholder</td>
            <td>Dato</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>foo</td>
          </tr>
        </tbody>
      </CourseTable>
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
          }
        }
      }
    }
  }
`
