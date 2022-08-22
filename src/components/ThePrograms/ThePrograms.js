import * as React from 'react'
import { useAboutCourses } from 'hooks/useAboutCourses'
import {
  CardActions,
  CardContent,
  Container,
  Grid,
  Button,
  Typography,
  Box,
  Card,
  CardActionArea,
} from '@mui/material'
import * as css from './ThePrograms.module.scss'
import { useTheme } from '@mui/material/styles'

const ThePrograms = () => {
  const theme = useTheme()
  const courses = useAboutCourses()

  return (
    <section id="theprograms">
      <Container maxWidth="tablet">
        <Box pt={8} pb={8}>
          <Box pb={6}>
            <Typography
              variant="h2"
              component="h2"
              align="center"
              sx={{
                fontSize: `min(10vw, ${theme.typography.h2.fontSize})`,
              }}
            >
              Programmene
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container rowSpacing={2} columnSpacing={4}>
              {courses
                .sort((a, b) => (a.title > b.title ? 1 : -1))
                .map((item) => {
                  const path = item.path.replace(/about-/, '')
                  // <a href={path}>
                  return (
                    <Grid item tablet={6} id={item.id} key={item.id}>
                      <Card
                        variant="outlined"
                        sx={{
                          height: '100%',
                          border: 'none',
                          backgroundColor: css.knowitWhite,
                        }}
                      >
                        <CardActionArea
                          href={path}
                          sx={{ borderBottom: '2px solid transparent' }}
                        >
                          <CardContent sx={{ padding: 0 }}>
                            <Typography variant="h4" gutterBottom>
                              {item.title}
                            </Typography>
                            <Typography variant="body1">
                              {item.description}
                            </Typography>
                          </CardContent>
                          <CardActions
                            sx={{
                              display: 'flex',
                              justifyContent: 'flex-end',
                            }}
                          >
                            <Button
                              variant="text"
                              sx={{ fontWeight: 'bold' }}
                              endIcon={
                                <img
                                  alt="Dekorativ pil som peker til mer informasjon"
                                  src="/icons/arrow.svg"
                                  height="24px"
                                />
                              }
                            >
                              Les mer
                            </Button>
                          </CardActions>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  )
                })}
            </Grid>
          </Box>
        </Box>
      </Container>
    </section>
  )
}

export default ThePrograms
