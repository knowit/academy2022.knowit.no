import React from "react"
import styled from "styled-components"
import colors from "../utils/colors"
import AcademyLogo from "./AcademyLogo"

// gray
// background-color: rgb(158, 181, 203);
// green
// background-color: rgb(0, 150, 130);
// red
// background-color: rgb(234, 167, 148);
const LogoBanner = styled.a`
  width: 100%;
  background-color: ${colors.knowit.green[1]};
  max-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  margin: auto;

  @media (max-height: 480px) {
    background-color: ${colors.knowit.green[1]};
    height: 72px;
    min-height: 72px;
    width: 100%;
    margin: 0px;
    flex-direction: row;
    justify-content: flex-end;
  }
`

class AcademyLogoBanner extends React.Component {
  render() {
    return (
      <LogoBanner href="/">
        <AcademyLogo />
      </LogoBanner>
    )
  }
}

export default AcademyLogoBanner
