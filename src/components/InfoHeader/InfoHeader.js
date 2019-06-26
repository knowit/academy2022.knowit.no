import React from "react"
import css from "./InfoHeader.module.scss"

const InfoHeader = ({ data }) => {
  console.log("data infoheader", data)
  const { frontmatter, html } = data
  return (
    <div className={css.infoHeader}>
      <div>
        <b>Dato: </b>
        {frontmatter.date}
        <br />
        <b>Foredragsholder: </b>
        {frontmatter.teacher}
      </div>
    </div>
  )
}

export default InfoHeader
