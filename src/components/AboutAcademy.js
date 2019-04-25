import React from "react"
import styled from "styled-components"

const AboutDiv = styled.div`
  display: flex;
  margin: auto;
  background-color: white;
  max-width: 800px;
  padding: 1vw 1.4em;
  hyphens: auto;
`

class AboutAcademy extends React.Component {
  render() {
    return (
      <AboutDiv>
        <p>
          Knowit Academy Norway er Knowits norske kompetanseutviklingsprogram.
          Målgruppen for programmet er ansatte i alle Knowits selskaper i Norge.
        </p>
        <p>
          For 2018-2019 bestod Knowit Academy av følgende program: Team
          Lead-skolen, Tech Lead-skolen og Prosjektleder-skolen.
        </p>
        <p>
          Planlegging av programmet for 2019-2020 er i gang, og mer informasjon
          vil bli lagt ut så snart det er klart.
        </p>
      </AboutDiv>
    )
  }
}

export default AboutAcademy
