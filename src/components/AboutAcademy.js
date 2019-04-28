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

//class AboutAcademy extends React.Component {
//  render() {
//     return (
// <h2>Norges beste kompetanseutviklingsprogram</h2>
const AboutAcademy = () => (
  <AboutSection>
    <p>
      Knowit Academy Norway er Knowits norske kompetanseutviklingsprogram.
      Målgruppen for programmet er ansatte i alle Knowits selskaper i Norge. Vår
      ambisjon er å lage et kompetanseutviklingsprogram som er bedre enn noe
      annet du kan finne.
    </p>
    <p>
      For 2018-2019 bestod Knowit Academy av følgende program: Team Lead-skolen,
      Tech Lead-skolen og Prosjektleder-skolen.
    </p>
    <p>
      Planlegging av programmet for 2019-2020 er i gang, og mer informasjon vil
      bli lagt ut så snart det er klart.
    </p>
  </AboutSection>
)

export default AboutAcademy
