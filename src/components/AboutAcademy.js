import React from "react"
import styled from "styled-components"
import colors from "../utils/colors"

const AboutSection = styled.section`
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
  background-color: white; // ${colors.knowit.purple[3]};
  hyphens: auto;

  h2 {
    color: ${colors.knowit.green[0]};
  }

  p {
    line-height: 1.4;
  }
  p:first-child {
    margin-top: 0;
  }
  p:last-child {
    margin-bottom: 0;
  }
`

const AboutAcademy = ({ content }) => {
  return (
    <AboutSection id="about">
      <div dangerouslySetInnerHTML={{ __html: content.html }} />
    </AboutSection>
  )
}

export default AboutAcademy
