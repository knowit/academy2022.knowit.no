import * as React from 'react'
import Icon from '../Icon/Icon'
import colors from '../../utils/colors'
import moment from 'moment'
import * as css from './info-header.module.scss'
import {
  Card,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Box,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

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

/**
 * Displays a header with the title and metadata about the workshop
 * @param {*} param0
 */
const InfoHeader = ({ data, showDescription }) => {
  const { frontmatter } = data

  const confirmed = frontmatter.confirmed ? true : false

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

  let location = frontmatter.path.match(/\/courses/) ? (
    <Location location={frontmatter.location}></Location>
  ) : (
    ''
  )

  //   <a
  //     href={frontmatter.path}
  //     key={frontmatter.path}
  //     className={css.infoHeaderLink}
  //   >
  //    <div className={css.infoHeader} key={frontmatter.path}>
  //      <div className={css.infoBox}>

  // if (typeof url !== 'string' || url.length < 1) {
  //   url = '/assets/knowit_academy_flamingo_favicon.png'
  // }

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('mobile'))

  return (
    <Card
      sx={{
        backgroundColor: 'white',
        marginTop: 2,
      }}
      variant="outlined"
    >
      <a href={frontmatter.path} key={frontmatter.path}>
        <Box
          sx={{
            display: 'flex',
            flexWrap: isMobile ? 'wrap-reverse' : 'nowrap',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flexGrow: 2 }}>
              <Typography variant="h4">{frontmatter.title}</Typography>
              <div className={css.byline}>
                {dates}
                {location}
                {teacher}
              </div>
              <Typography variant="body1">{frontmatter.description}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small" key={frontmatter.path}>
                Les mer
              </Button>
            </CardActions>
          </Box>
          <CardMedia
            component="img"
            alt={`Photo of facilitator: ${frontmatter.teacher}`}
            sx={{
              width: isMobile ? '100%' : '33%',
              height: isMobile ? '55vw' : 'unset',
              objectPosition: '50% 25%',
              objectFit: 'cover',
            }}
            image={
              frontmatter.image
                ? frontmatter.image
                : '/assets/knowit_academy_flamingo_favicon.png'
            }
          />
        </Box>
      </a>
    </Card>
  )
}

export default InfoHeader
