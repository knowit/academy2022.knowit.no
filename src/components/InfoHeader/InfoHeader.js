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

const InfoHeader = ({ data }) => {
  console.log("data infoheader", data)
  const { frontmatter } = data

  return (
    <div className={css.infoHeader}>
      <div className={css.infoBox}>
        <h1>{frontmatter.title}</h1>
        <div className={css.byline}>
          <div>
            <Icon name="date_range" />
            <span className={css.labels}>
              {dateString(frontmatter.date, frontmatter.endDate)}
            </span>
          </div>
          <div>
            <Icon name="face" />
            <span className={css.labels}>{frontmatter.teacher}</span>
          </div>
          <div>
            <Icon name="access_time" />
            <span className={css.labels}>
              Oppdatert {moment(frontmatter.updated).format("LL")}
            </span>
          </div>
        </div>
      </div>
      <div className={css.pictureWrapper}>
        <img
          src={frontmatter.image}
          alt={`Lecturer is ${frontmatter.teacher}`}
          className={css.picture}
        />
      </div>
    </div>
  )
}

export default InfoHeader
