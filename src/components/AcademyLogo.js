import React from "react"
import styled from "styled-components"

const StyledLogo = styled.img`
  width: 90%;
  height: auto;
  max-width: 800px;
  display: flex;
  object-fit: scale-down;
  margin: 1.4em auto;

  @media (max-height: 480px) {
    height: auto;
    width: calc(60 * 2.8px);
    margin: 4px 20px 4px auto;
  }
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
