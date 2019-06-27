import React from "react"
import Icon from "../Icon"
import moment from "moment"
import "moment/locale/nb"
import css from "./InfoHeader.module.scss"

/**
 * Takes two strings with something that can be parsed to a date as input.
 * Returns a formatted string for use in the header.
 *
 * @param {*} from
 * @param {*} to
 */
const dateString = (from, to) => {
  const startDate = moment(from)
  const endDate = moment(to)

  if (moment(startDate).isValid === false) {
    return "TBD"
  }

  let string = startDate.format("D MMM")
  if (endDate.isValid()) {
    string += ` - ${endDate.format("D MMM")}`
  }
  string += ` ${startDate.format("YYYY")}`

  return string
}

const Dates = ({ startDate, endDate }) => {
  return (
    <div>
      <Icon name="date_range" />
      <span className={css.labels}>{dateString(startDate, endDate)}</span>
    </div>
  )
}

const Teacher = ({ name }) => {
  return (
    <div>
      <Icon name="face" />
      <span className={css.labels}>{name}</span>
    </div>
  )
}

const Byline = ({ author, email }) => {
  if (!email) {
    email = "academy.knowit.no"
  }

  return (
    <>
      av <a href={`mailto:${email}`}>{author}</a>
    </>
  )
}

const Updated = ({ date, path, author, email }) => {
  let byline = !path.match(/\/courses/) ? (
    <Byline author={author} email={email} />
  ) : (
    ""
  )
  return (
    <div>
      <Icon name="access_time" />
      <span className={css.labels}>
        Oppdatert {moment(date).format("LL")} {byline}
      </span>
    </div>
  )
}

const Picture = ({ url, teacher }) => {
  // <img src={url} alt={`Lecturer is ${teacher}`} className={css.picture} />
  return (
    <div
      className={css.pictureWrapper}
      style={{
        backgroundImage: `url(${url})`,
        backgroundClip: "padding-box",
        backgroundPosition: "50% 30%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  )
}

/**
 * Displays a header with the title and metadata about the workshop
 * @param {*} param0
 */
const InfoHeader = ({ data }) => {
  const { frontmatter } = data

  let dates = frontmatter.path.match(/\/courses/) ? (
    <Dates startDate={frontmatter.date} endDate={frontmatter.endDate} />
  ) : (
    ""
  )

  let teacher = frontmatter.path.match(/\/courses/) ? (
    <Teacher name={frontmatter.teacher} />
  ) : (
    ""
  )

  let picture = frontmatter.path.match(/\/courses/) ? (
    <Picture url={frontmatter.image} teacher={frontmatter.teacher} />
  ) : (
    ""
  )

  return (
    <div className={css.infoHeader}>
      <div className={css.infoBox}>
        <h1>{frontmatter.title}</h1>
        <div className={css.byline}>
          {dates}
          {teacher}
          <Updated
            date={frontmatter.updated}
            path={frontmatter.path}
            author={frontmatter.author}
            email={frontmatter.email}
          />
        </div>
      </div>
      {picture}
    </div>
  )
}

export default InfoHeader
