import React from "react"
import css from "./Byline.module.scss"
import moment from "moment"
import "moment/locale/nb"

moment.locale("nb")

const Byline = ({ title, author, email, updated }) => {
  const mailto = ((email) =>
    email === null ? "mailto:academy@knowit.no" : `mailto:${email}`)(email)

  const oppdatert = moment(updated)
  return (
    <>
      <h1>{title}</h1>
      <div className={css.byline}>
        Sist oppdatert {oppdatert.format("LL")} av <a href={mailto}>{author}</a>
      </div>
    </>
  )
}

export default Byline
