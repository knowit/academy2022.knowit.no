import React from "react"
import styled from "styled-components"

const StyledLogo = styled.img`
  width: 90%;
  height: auto;
  max-width: 800px;
  display: flex;
  object-fit: contain;
  margin: 1.4em auto;
`
// flex-direction: column;
// align-items: center;
// justify-items: center;
class AcademyLogo extends React.Component {
  render() {
    return (
      <StyledLogo
        alt="Knowit Academy Logo"
        src="/assets/knowit_academy_logo.png"
      />
    )
  }
}

export default AcademyLogo
