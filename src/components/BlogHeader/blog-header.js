import * as React from 'react'
import moment from 'moment'
import * as css from './blog-header.module.scss'
import { Box, Typography } from '@mui/material'
import { AccessTime } from '@mui/icons-material'
import { useTheme } from '@mui/material/styles'

const BlogHeader = ({ data }) => {
  const { title, author, email, updated } = data.frontmatter
  const date = moment(updated).format('LL')
  const theme = useTheme()

  return (
    <Box pt={2}>
      <Typography variant="h1" sx={{ fontSize: `min(13.2vw, 3rem)` }}>
        {title}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          minHeight: 32,
          alignItems: 'center',
          columnGap: 0.5,
        }}
      >
        <AccessTime sx={{ color: css.knowitForest }} />
        <Typography variant="byline2">
          Oppdatert {date} av <a href={`mailto:${email}`}>{author}</a>
        </Typography>
      </Box>
    </Box>
  )
}

export default BlogHeader
