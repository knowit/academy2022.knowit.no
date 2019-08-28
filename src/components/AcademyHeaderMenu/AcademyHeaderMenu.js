import React from "react"
import css from "./AcademyHeaderMenu.module.scss"

const AcademyHeaderMenu = ({ data }) => {
  console.log("header menu:", data)
  return (
    <header className={css.academyFrontHeader}>
      <div className={css.innerContainer}>
        <div className={css.title}>Knowit Academy</div>
        <div className={css.grower}></div>
        <nav className={css.academyHeaderMenu}>
          <ul>
            <li>
              <a href="/">Hjem</a>
            </li>
            <li>
              <a href="/#theprograms">Programmene</a>
            </li>
            <li>
              <a href="/application-form">Påmelding</a>
            </li>
            <li>
              <a href="/#about">Om Knowit Academy</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default AcademyHeaderMenu
