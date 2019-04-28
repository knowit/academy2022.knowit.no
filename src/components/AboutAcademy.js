import React from "react"
import styled from "styled-components"
import colors from "../utils/colors"

const AboutSection = styled.section`
  margin: auto;
  background-color: white;
  max-width: 800px;
  padding: 1vw 1.4em;
  hyphens: auto;

  h2 {
    font-weight: 600;
    color: ${colors.knowit.blue[1]};
  }
`

//class AboutAcademy extends React.Component {
//  render() {
//     return (
const AboutAcademy = () => (
  <AboutSection>
    <h2>Norges beste kompetanseutviklingsprogram</h2>
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
