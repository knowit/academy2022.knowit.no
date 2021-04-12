import React from "react"
import Button from "../Button"
import colors from "../../utils/colors"
import css from "./ThePrograms.module.scss"

const ThePrograms = ({ pages }) => {
  const programPages = pages.map((item) => {
    const path = item.path.replace(/about-/, "")
    // <a href={path}></a>
    return (
      <li key={item.path}>
        <div>
          <h4>{item.title}</h4>
          <p>{item.description}</p>
          <Button
            link={path}
            alt="More information about the programs"
            style={{
              margin: "8px auto",
              color: "white",
              backgroundColor: colors.knowit.purple[1],
              width: "80%",
              maxWidth: "320px",
            }}
          >
            Les mer
          </Button>
        </div>
      </li>
    )
  })

  return (
    <section id="theprograms" className={css.thePrograms}>
      <h2>Programmer</h2>
      <nav>
        <ul>{programPages}</ul>
      </nav>
    </section>
  )
}

export default ThePrograms
