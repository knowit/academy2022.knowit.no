import React from "react"
import styled from "styled-components"
import colors from "../utils/colors"
import AcademyLogoBanner from "../components/AcademyLogoBanner"

const FrontHeader = styled.header`
  width: 100%;
  background-color: ${colors.knowit.green[0]};
  margin: 0;
  padding: 0;
  display: block;
`

const AcademyFrontMenu = styled.nav`
  max-width: 960px;
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

  li a {
      text-decoration: inherit;
      color: inherit;
  }
`

const AcademyFrontHeader = () => {
  return (
    <FrontHeader>
      <AcademyLogoBanner />
      <AcademyFrontMenu>
        <ul>
          <li>
            <a href="/#about">Om Knowit Academy</a>
          </li>
          <li>
            <a href="/#theprograms">Programmene</a>
          </li>
          <li>
            <a href="/how-to-apply">Påmelding</a>
          </li>
        </ul>
      </AcademyFrontMenu>
    </FrontHeader>
  )
}

export default AcademyFrontHeader
