import React from "react"
import styled from "styled-components"
import MainHelmet from "./MainHelmet"
import AcademyFrontHeader from "../components/AcademyFrontHeader"
import AcademyFooter from "../components/AcademyFooter"
// import colors from "../utils/colors"

const FrontPage = styled.div`
  height: 100%;
  // width: 100vw;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  margin: auto;

  main {
    flex-grow: 1;
    display: flex;
    // height: 100%;
    justify-content: flex-start;
    flex-direction: column;
    margin: 0;
  }
`

const FrontLayout = ({ children, data }) => {
  return (
    <FrontPage>
      <MainHelmet metadata={data} />
      <AcademyFrontHeader data={data} />
      <main>{children}</main>
      <AcademyFooter />
    </FrontPage>
  )
}

export default FrontLayout
