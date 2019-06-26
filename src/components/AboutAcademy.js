import React from "react"
import styled from "styled-components"
import colors from "../utils/colors"

const AboutSection = styled.section`
  background-color: white; // ${colors.knowit.purple[3]};
  hyphens: auto;
  // width: 100%;
  // max-width: 960px;

   & > div {
     max-width: 960px;
   }

  h2, h1 {
    color: ${colors.knowit.green[0]};
    text-align: center;
  }

  p {
    line-height: 1.56em;
  }
  p:first-child {
    margin-top: 0;
  }
  p:last-child {
    margin-bottom: 24px;
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
