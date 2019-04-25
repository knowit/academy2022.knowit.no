import React from "react"
import styled from "styled-components"
import AcademyLogo from "./AcademyLogo"

// background-color: rgb(158, 181, 203);
// background-color: rgb(0, 150, 130);
const LogoBanner = styled.div`
  width: 100vw;
  // padding: 5vh;
  background-color: rgb(87, 114, 139);
  max-height: 50vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  margin: auto;
`

class AcademyLogoBanner extends React.Component {
  render() {
    return (
      <LogoBanner>
        <AcademyLogo />
      </LogoBanner>
    )
  }
}

export default AcademyLogoBanner
