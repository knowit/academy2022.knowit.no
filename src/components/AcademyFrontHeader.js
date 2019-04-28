import React from "react"
import styled from "styled-components"
import colors from "../utils/colors"
import AcademyLogoBanner from "../components/AcademyLogoBanner"

const FrontHeader = styled.header`
  width: 100vw;
  background-color: ${colors.knowit.green[0]};
  margin: 0;
  padding: 0;
  display: block;
`

const AcademyFrontMenu = styled.nav`
  max-width: 800px;
  padding: 0 1.4rem;
  margin: auto;

  ul {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    overflow: hidden;
  }

  li {
    list-style: none;
    padding: 0.6rem 0.2rem;
    margin: 0 3rem 0 0rem;
    font-weight: 600;
    color: white;
    display: inline-block;
    white-space: nowrap;
    border-top: 0.4rem solid ${colors.knowit.green[0]};
    border-bottom: 0.4rem solid ${colors.knowit.green[0]};
  }

  li:hover {
    // background-color: ${colors.knowit.green[1]};
    border-bottom: 0.4rem solid ${colors.knowit.green[2]};
  }
`

const AcademyFrontHeader = () => {
  return (
    <FrontHeader>
      <AcademyLogoBanner />
      <AcademyFrontMenu>
        <ul>
          <li>Om Knowit Academy</li>
          <li>Programmene</li>
          <li>Påmelding</li>
        </ul>
      </AcademyFrontMenu>
    </FrontHeader>
  )
}

export default AcademyFrontHeader
