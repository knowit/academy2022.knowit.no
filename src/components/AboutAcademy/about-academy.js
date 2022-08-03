import * as React from 'react'
import * as css from './about-academy.module.scss'
import { Container, Box } from '@mui/material'

const AboutAcademy = ({ content }) => {
  return (
    <Container maxWidth="tablet">
      <Box sx={{ paddingTop: 10, paddingBottom: 8 }}>
        <Box sx={{ textAlign: 'center', paddingBottom: 2 }}>
          <img
            height="108"
            src="/icons/medal.svg"
            alt="Knowit Academy Medal Icon"
          />
        </Box>
        <Box
          className={css.aboutSection}
          dangerouslySetInnerHTML={{ __html: content.html }}
        />
      </Box>
    </Container>
  )
}

export default AboutAcademy
