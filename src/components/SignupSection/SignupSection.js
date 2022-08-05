import * as React from 'react'
import * as css from './SignupSection.module.scss'
import { Typography, Button, Box, Container } from '@mui/material'

import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const SignupSection = () => {
  const theme = useTheme()
  const isSmall = useMediaQuery('(max-width:480px')

  console.log('signup theme:', theme)

  return (
    <section className={css.signupSection}>
      <Container maxWidth="tablet">
        <a href="/how-to-apply" alt="Les mer om søknadsprosessen">
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
              Påmeldingsfristen vil være i{' '}
              <strong>første halvdel av september 2022</strong>
              {isSmall ? '' : <br />} Mer informasjon kommer i begynnelsen av
              august.
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
                <strong>Les mer</strong>
              </Button>
            </Box>
          </Box>
        </a>
      </Container>
    </section>
  )
}

export default SignupSection
