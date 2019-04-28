import React from "react"
import styled from "styled-components"
import colors from "../utils/colors.js"

const Wrapper = styled.div`
  // position: fixed;
  display: flex;
  justify-content: center;
  // bottom: 0px;
  width: 100%;
  padding: 0;
  margin: auto;
  background-color: ${colors.knowit.green[3]};
  border-top: 1px solid ${colors.knowit.green[1]};
`
const Footer = styled.footer`
  display: flex;
  padding: 12px 1.4rem;
  align-items: center;
  max-width: 960px;
  width: 960px;

  & > *:not(:first-child) {
    margin-left: 0.8rem;
  }

  div {
    display: inline-block;
    font-size: calc(0.2em + 0.6em);
    font-weight: 200;
    color: black;
    overflow: hidden;
  }

  img {
    width: auto;
    height: 56px;
  }

  a {
    color: ${colors.knowit.green[0]};
    font-weight: 600;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`

const AcademyFooter = () => {
  return (
    <Wrapper>
      <Footer>
        <a href="/">
          <img
            src="/assets/knowit_academy_box_logo.png"
            alt="Knowit Academy Logo"
          />
        </a>
        <div>
          Har du spørsmål om Knowit Academy? Send en epost til{" "}
          <a href="mailto:academy@knowit.no">academy@knowit.no</a> så svarer vi
          så snart vi rekker.
        </div>
      </Footer>
    </Wrapper>
  )
}

export default AcademyFooter
