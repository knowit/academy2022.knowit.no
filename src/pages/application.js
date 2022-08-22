import * as React from 'react'
import * as css from '../styles/application.module.scss'
import { graphql } from 'gatsby'
import { useAboutCourses } from 'hooks/useAboutCourses'
import Layout from 'components/FrontLayout'
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Container,
  Grid,
  Link,
  Typography,
} from '@mui/material'

const ApplicationPage = ({ data, path }) => {
  const courses = useAboutCourses()

  return (
    <Layout data={data} sitemeta={data.site.siteMetadata}>
      <Container maxWidth="tablet">
        <Box pt={4} pb={4}>
          <Typography gutterBottom variant="h2">
            Søk om å delta
          </Typography>
          <Typography variant="body1" gutterBottom>
            Send inn søknad på programmenet du ønsker å gå på. Det er bare mulig
            å delta på ett program om gangen. Husk å avklare med din nærmeste
            leder at du ønsker å delta og at det passer at du deltar.
          </Typography>
          <Typography variant="body1">
            <strong>Søknadsfristen er mandag 12. september, 2022.</strong>
          </Typography>
        </Box>
        <Box>
          <Grid container rowSpacing={2} columnSpacing={2} alignItems="stretch">
            {courses.map((course) => {
              return (
                <Grid item tablet={6} id={course.id} key={course.id}>
                  <Card sx={{ backgroundColor: 'white' }}>
                    <CardActionArea
                      sx={{ borderBottom: '2px solid transparent' }}
                      href={course.application ? course.application : ''}
                    >
                      <CardContent>
                        <Typography variant="h4" gutterBottom>
                          {course.title}
                        </Typography>
                        <Typography variant="body1">
                          {course.description}
                        </Typography>
                      </CardContent>

                      <CardActions
                        sx={{
                          display: 'flex',
                          justifyContent: 'flex-end',
                        }}
                      >
                        {course.application ? (
                          <Button
                            variant="text"
                            target={'_blank'}
                            sx={{
                              '&:hover': {
                                border: 'none',
                              },
                            }}
                            href={course.application}
                            endIcon={
                              <img
                                alt="Dekorativ pil som peker til mer informasjon"
                                src="/icons/arrow.svg"
                                height="24px"
                              />
                            }
                          >
                            Søk om plass
                          </Button>
                        ) : (
                          <Typography variant="body1">
                            Søknadskjema ennå ikke lagt ut
                          </Typography>
                        )}
                      </CardActions>
                    </CardActionArea>
                  </Card>
                </Grid>
              )
            })}
          </Grid>
        </Box>
        <Box pb={8} pt={4}>
          <Link
            href="/how-to-apply"
            sx={{
              color: css.knowitBlack,
              textDecoration: 'none',
              borderBottom: `2px solid ${css.knowitLollipop}`,
            }}
          >
            Mer informasjon om søknadsprosessen
          </Link>
        </Box>
      </Container>
    </Layout>
  )
}

export default ApplicationPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        siteUrl
        description
        email
        ogImage
      }
    }
    allMarkdownRemark {
      edges {
        node {
          html
          frontmatter {
            title
            author
            path
            date
            image
            ogImage
            description
          }
        }
      }
    }
  }
`
