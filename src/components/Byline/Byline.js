import React from "react"
import css from "./Byline.module.scss"

const Byline = ({ title, author, email, updated }) => {
  const mailto = (email =>
    email === null ? "mailto:academy@knowit.no" : `mailto:${email}`)(email)

  return (
    <>
      <h1>{title}</h1>
      <div className={css.byline}>
        Sist oppdatert {updated} av <a href={mailto}>{author}</a>
      </div>
    </>
  )
}

export default Byline
