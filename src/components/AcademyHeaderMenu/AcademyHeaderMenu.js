import React from 'react'
import * as css from './AcademyHeaderMenu.module.scss'

const AcademyHeaderMenu = ({ data }) => {
  // console.log("header menu:", data)
  //
  // <div className={css.grower}></div>
  return (
    <header className={css.academyFrontHeader}>
      <div className={css.gridContainer}>
        <div className={css.menuContainer}>
          <div className={css.title}>Knowit Academy</div>
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
      </div>
    </header>
  )
}

export default AcademyHeaderMenu
