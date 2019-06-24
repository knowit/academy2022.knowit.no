import React, { Component } from "react"
import css from "./AcademyLogo.module.scss"

class AcademyLogo extends Component {
  render() {
    return (
      <a className={css.logoWrapper} href="/">
        <img
          className={css.logoStyle}
          alt="Knowit Academy Logo"
          src="/assets/knowit_academy_logo.png"
        />
      </a>
    )
  }
}

export default AcademyLogo
