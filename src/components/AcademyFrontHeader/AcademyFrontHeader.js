import React from "react"
import AcademyLogo from "../AcademyLogo"
import css from "./AcademyFrontHeader.module.scss"

const AcademyFrontHeader = () => {
  return (
    <header className={css.academyFrontHeader}>
      <AcademyLogo />
      <nav className={css.academyHeaderMenu}>
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
      </nav>
    </header>
  )
}

export default AcademyFrontHeader
