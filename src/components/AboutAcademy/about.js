import * as React from 'react'
import * as css from './about.module.scss'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

const AboutAcademy = ({ content }) => {
  return (
    <Container maxWidth="tablet">
      <Box sx={{ textAlign: 'center', paddingBottom: 4 }}>
        <Box sx={{ paddingTop: 12, paddingBottom: 4 }}>
          <img
            height="108"
            src="/icons/medal.svg"
            alt="Knowit Academy Medal Icon"
          />
        </Box>
        <Box dangerouslySetInnerHTML={{ __html: content.html }} />
      </Box>
    </Container>
  )
}

export default AboutAcademy
