import React from "react"
import css from "./Byline.module.scss"

const Byline = ({ title, author, email, updated }) => {
  return (
    <>
      <h1>{title}</h1>
      <div className={css.byline}>
        Sist oppdatert {updated} av <a href={`mailto:${email}`}>{author}</a>
      </div>
    </>
  )
}

export default Byline
