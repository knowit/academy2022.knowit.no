import React from "react"
import styled from "styled-components"
import AcademyLogoBanner from "../components/AcademyLogoBanner"
import AboutAcademy from "../components/AboutAcademy"

const IndexPage = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  margin: auto;
  & > * {
    margin: 0 auto;
    text-align: left;
    display: block;
  }
`

const Page = () => (
  <IndexPage>
    <AcademyLogoBanner />
    <AboutAcademy />
  </IndexPage>
)

export default Page
