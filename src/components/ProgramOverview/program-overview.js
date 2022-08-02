import React from 'react'
import InfoHeader from 'components/InfoHeader'
import { Box, Typography } from '@mui/material'

const ProgramOverview = ({ courses, title }) => {
  return (
    <Box>
      <Typography variant="h3">{title}</Typography>
      {courses.map((i) => (
        <InfoHeader
          data={i.node}
          key={i.node.frontmatter.path}
          showDescription={true}
        />
      ))}
    </Box>
  )
}

export default ProgramOverview
