import React from "react"
import styled from "styled-components"
import colors from "../utils/colors"

const Section = styled.section`
  background-color: white; // ${colors.knowit.red[3]};
  flex-grow: 1;

  h2 {
    margin: 0;
    padding: 0;
    color: ${colors.knowit.green[0]};
  }

  h4 {
    margin: 0;
  }

  nav > ul {
    display: flex;
    flex-wrap: wrap;
    margin: 1.4rem 0;
    padding: 0;
    justify-content: space-evenly;
  }

  nav > ul > li {
    list-style: none;
    display: block;
    padding: 0;
    margin: 12px;
    max-width: 320px;
    min-width: 240px;
    border-radius: 0.6rem;
  }

  nav > ul > li:nth-child(1) {
    background-color: ${colors.knowit.purple[0]};
  }

  nav > ul > li:nth-child(2) {
    background-color: ${colors.knowit.red[0]};
  }


  nav > ul > li div {
    padding: 1rem;
    text-align: center;
    // color: ${colors.knowit.red[3]};
    color: white;
  }

  nav > ul > li > a {
    text-decoration: inherit;
    color: inherit;
  }

  nav p {
    font-size: 0.9em;
    line-height: 1.4;
  }
  nav p:last-child {
      margin-bottom: 0;
  }
`

const ThePrograms = ({ pages }) => {
  console.log("The Programs:", pages)

  const programPages = pages.map(item => (
    <li key={item.path}>
      <a href={item.path}>
        <div>
          <h4>{item.title}</h4>
          <p>{item.description}</p>
        </div>
      </a>
    </li>
  ))

  return (
    <Section>
      <h2>Programmer for 2019/2020</h2>
      <nav>
        <ul>{programPages}</ul>
      </nav>
    </Section>
  )
}

export default ThePrograms
