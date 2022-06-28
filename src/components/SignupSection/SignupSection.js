import * as React from 'react'
import * as css from './SignupSection.module.scss'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

const SignupSection = () => {
  // <a class="link" href="/how-to-apply">
  //   Les mer om søknadsprosessen
  // </a>
  return (
    <section>
      <Container maxWidth="tablet">
        <Box sx={{ textAlign: 'center', bgcolor: 'pink', padding: [2, 4] }}>
          <a
            href="/application-form"
            alt="Link til skjema: Søk om plass på knowit academy"
          >
            <h2 className={css.signupTitle}>Påmelding 2022</h2>
            <p>
              Påmeldingen starter mandag 30. august.
              <br /> Søk om plass innen{' '}
              <strong>søndag 12. september, 2021</strong>.<br />
            </p>
            <p className={css.signupMessage}>
              <span>Meld deg på</span>
              <img alt="" src="/icons/arrow.svg" width="28px" />
            </p>
          </a>
        </Box>
      </Container>
    </section>
  )
}

export default SignupSection
