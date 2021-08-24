import React from "react"
import Icon from "../Icon"
import moment from "moment"
import * as css from "./BlogHeader.module.scss"

const BlogHeader = ({ data }) => {
  const { title, author, email, updated } = data.frontmatter
  const date = moment(updated).format("LL")
  return (
    <>
      <h1 className={css.blogHeaderTitle}>{title}</h1>
      <div className={css.blogHeader}>
        <Icon name="access_time" />
        <span className={css.byline}>
          Oppdatert {date} av <a href={`mailto:${email}`}>{author}</a>
        </span>
      </div>
    </>
  )
}

export default BlogHeader
