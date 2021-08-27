import React from 'react'
import Icon from '../Icon'
import colors from '../../utils/colors'
import moment from 'moment'
import * as css from './InfoHeader.module.scss'
// import 'moment/locale/nb'

/**
 * Takes two strings with something that can be parsed to a date as input.
 * Returns a formatted string for use in the header.
 *
 * @param {*} from
 * @param {*} to
 */
const dateString = (from, to, confirmed = false) => {
  if (from === null) {
    return 'Informasjon kommer'
  }
  const startDate = moment(from)
  const endDate = moment(to)

  // console.log('dateString:', from, to, confirmed)
  if (moment(startDate).isValid === false) {
    return 'TBD'
  }

  if (confirmed === false) {
    return `${startDate.format('D MMM')} (ubekreftet)`
  }

  let string = startDate.format('D MMM')
  if (endDate.isValid()) {
    string += ` - ${endDate.format('D MMM')}`
  }
  string += ` ${startDate.format('YYYY')}`
  string += `, kl ${startDate.format('HH:mm')}`

  return string
}

/**
 * Returns the date field in the info header.
 *
 * @param {*} param0
 */
const Dates = ({ startDate, endDate, confirmed }) => {
  const style = confirmed
    ? { color: colors.knowit.green[0] }
    : { color: colors.knowit.red[0] }

  return (
    <div>
      <Icon style={style} name="date_range" />
      <span style={style} className={css.labels}>
        {dateString(startDate, endDate, confirmed)}
      </span>
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

const Location = ({ location }) => {
  const style = location
    ? { color: colors.knowit.green[0] }
    : { color: colors.knowit.red[0] }

  const output = location ? location : 'Ubekreftet'

  return (
    <div>
      <Icon style={style} name="location_on" />
      <span style={style} className={css.labels}>
        {output}
      </span>
    </div>
  )
}

const Picture = ({ url }) => {
  // set default image if missing url.

  if (typeof url === 'undefined' || url.length < 1) {
    url = '/assets/knowit_academy_flamingo_favicon.png'
  }

  const elementStyles = {
    backgroundImage: `url(${url})`,
    backgroundPosition: '50% 10%',
  }

  return <div className={css.pictureWrapper} style={elementStyles} />
}

const Description = ({ description }) => {
  return <p className={css.description}>{description}</p>
}

/**
 * Displays a header with the title and metadata about the workshop
 * @param {*} param0
 */
const InfoHeader = ({ data, showDescription }) => {
  const { frontmatter } = data

  const confirmed = frontmatter.confirmed ? true : false

  console.log('css', css)
  let dates = frontmatter.path.match(/\/courses/) ? (
    <Dates
      confirmed={confirmed}
      startDate={frontmatter.date}
      endDate={frontmatter.endDate}
    />
  ) : (
    ''
  )

  let teacher = frontmatter.path.match(/\/courses/) ? (
    <Teacher name={frontmatter.teacher} />
  ) : (
    ''
  )

  let picture = frontmatter.path.match(/\/courses/) ? (
    <Picture url={frontmatter.image} teacher={frontmatter.teacher} />
  ) : (
    ''
  )

  let location = frontmatter.path.match(/\/courses/) ? (
    <Location location={frontmatter.location}></Location>
  ) : (
    ''
  )

  let description = showDescription ? (
    <Description description={frontmatter.description} />
  ) : (
    ''
  )

  return (
    <a
      href={frontmatter.path}
      key={frontmatter.path}
      className={css.infoHeaderLink}
    >
      <div className={css.infoHeader} key={frontmatter.path}>
        <div className={css.infoBox}>
          <h4>{frontmatter.title}</h4>
          <div className={css.byline}>
            {dates}
            {location}
            {teacher}
          </div>
          {description}
        </div>
        {picture}
      </div>
    </a>
  )
}

export default InfoHeader
