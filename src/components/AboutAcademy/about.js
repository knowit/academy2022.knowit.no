import React from "react"
import css from "./about.module.scss"

const AboutAcademy = ({ content }) => {
  return (
    <section id="about" className={css.aboutSection}>
      <div dangerouslySetInnerHTML={{ __html: content.html }} />
    </section>
  )
}

export default AboutAcademy
