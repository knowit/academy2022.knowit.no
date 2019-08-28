import React from "react"
import css from "./about.module.scss"

const AboutAcademy = ({ content }) => {
  return (
    <section id="about" className={css.aboutSection}>
      <div className={css.gridContainer}>
        <div className={css.frontMedal}>
          <img src="/icons/medal.svg" alt="" />
        </div>
        <div
          className={css.frontContent}
          dangerouslySetInnerHTML={{ __html: content.html }}
        />
      </div>
    </section>
  )
}

export default AboutAcademy
