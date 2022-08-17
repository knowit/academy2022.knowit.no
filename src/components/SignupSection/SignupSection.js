import * as React from 'react'
import * as css from './SignupSection.module.scss'
import { Typography, Button, Box, Container } from '@mui/material'

import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const SignupSection = () => {
  const theme = useTheme()
  const isSmall = useMediaQuery('(max-width:480px')

  return (
    <section id="signup" className={css.signupSection}>
      <Container maxWidth="tablet">
        <a href="/application" alt="Les mer om søknadsprosessen">
          <Box pt={8} pb={8}>
            <Typography
              variant="h2"
              component="h2"
              align="center"
              pb={3}
              sx={{ fontSize: `min(10vw, ${theme.typography.h2.fontSize})` }}
            >
              Påmelding 2022
            </Typography>
            <Typography variant="body1" align="center" paragraph={true}>
              Søknadsskjema for årets program er tilgjengelig.
              {isSmall ? '' : <br />}
              Fristen for å søke er <strong>mandag, 12 september, 2022</strong>
            </Typography>
            <Box textAlign="center">
              <Button
                variant="text"
                endIcon={
                  <img
                    alt="Dekorativ pil som peker til mer informasjon"
                    src="/icons/arrow.svg"
                    height="24px"
                  />
                }
              >
                <strong>Søk om plass</strong>
              </Button>
            </Box>
          </Box>
        </a>
      </Container>
    </section>
  )
}

export default SignupSection
