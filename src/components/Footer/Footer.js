import * as React from 'react'
import * as css from './footer.module.scss'
import { useSiteMetadata } from 'hooks/useSiteMetadata'
import { Container, Box, Link, Typography, Grid } from '@mui/material'

const AcademyFooter = () => {
  const { email, version } = useSiteMetadata()

  return (
    <footer>
      <section>
        <Container maxWidth="tablet">
          <Box pt={6} pb={5} className={css.footerTopContent}>
            <Typography variant="h4" gutterBottom>
              Spørsmål?
            </Typography>
            <img
              alt="Decorative icon for exclamation."
              src="/icons/spark.svg"
            />
            <Typography variant="body1" gutterBottom>
              Har du spørsmål om Knowit Academy? Send en epost til{' '}
              <a href={`mailto:${email}`}>{email}</a> så svarer vi så snart vi
              rekker.
            </Typography>
          </Box>
        </Container>
      </section>
      <section>
        <Container maxWidth="tablet">
          <Grid container spacing={2} pt={3} pb={6} alignItems="flex-end">
            <Grid item mobile={2}>
              <Box pb={1} className={css.version}>
                v{version}
              </Box>
            </Grid>
            <Grid item mobile={10}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="flex-end"
                alignItems="flex-end"
                rowGap={1}
                textAlign="right"
              >
                <Link
                  href="/"
                  variant="h3"
                  sx={{ color: '#333333', fontFamily: 'ArialforKnowitRegular' }}
                  className={css.homeLink}
                >
                  Knowit Academy
                </Link>
                <a
                  href="https://www.knowit.no/"
                  alt="Link til Knowits hjemmeside"
                  className={css.knowitLink}
                >
                  <img alt="" src="/icons/arrow.svg" height="22px" />
                  <img alt="" src="/assets/knowit_black.png" height="26px" />
                </a>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
    </footer>
  )
}

export default AcademyFooter
