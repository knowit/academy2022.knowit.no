import React from "react"
import css from "./ThePrograms.module.scss"

const ThePrograms = ({ pages }) => {
  console.log("The Programs:", pages)

  const programPages = pages.map((item) => (
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
    <section id="theprograms">
      <h2>Programmer for 2019/2020</h2>
      <nav>
        <ul>{programPages}</ul>
      </nav>
    </section>
  )
}

export default ThePrograms
