import * as React from 'react'
import * as css from './SignupSection.module.scss'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import { Button } from '@mui/material'

const SignupSection = () => {
  //       <a
  //         href="/application-form"
  //         alt="Link til skjema: Søk om plass på knowit academy"
  //       ></a>
  // <a class="link" href="/how-to-apply">
  //   Les mer om søknadsprosessen
  // </a>
  return (
    <section className={css.signupSection}>
      <Container maxWidth="tablet">
        <a href="/how-to-apply" alt="Les mer om søknadsprosessen">
          <Box pt={8} pb={8}>
            <Typography variant="h2" component="h2" align="center" pb={3}>
              Påmelding 2022
            </Typography>
            <Typography variant="body1" align="center" paragraph={true}>
              Påmeldingsfristen vil være i{' '}
              <strong>første halvdel av september 2022</strong>
              <br /> Mer informasjon kommer i begynnelsen av august.
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
