import React from "React"
import styled from "styled-components"
import colors from "../utils/colors.js"

const AFooter = styled.footer`
  position: fixed;
  bottom: 0px;
  display: flex;
  background-color: ${colors.knowit.blue[3]};
  border-top: 2px solid ${colors.knowit.blue[2]};
  width: 100vw;
  // height: 48px;
  padding: 6px 1.4em 6px 1.4em;

  div {
    margin: 12px 12px 12px 1.4em;
    font-size: calc(0.2em + 0.6em);
    font-weight: 200;
    color: ${colors.knowit.blue[0]};
  }

  img {
    width: auto;
    height: 42px;
  }
`

const AcademyFooter = () => {
  return (
    <AFooter>
      <div>
        Har du spørsmål angående Knowit Academy? Ta kontakt på{" "}
        <a href="mailto:academy@knowit.no">academy@knowit.no</a>
      </div>
      <img
        src="/assets/knowit_academy_box_logo.png"
        alt="Knowit Academy Logo"
      />
    </AFooter>
  )
}

export default AcademyFooter
