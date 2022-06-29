import * as React from 'react'
import Layout from 'components/FrontLayout'
import { Box, Container, Typography } from '@mui/material'

const NotFoundPage = () => {
  return (
    <Layout>
      <Container maxWidth="tablet">
        <Box paddingTop={8} paddingBottom={8} sx={{ height: '100%' }}>
          <Typography variant="h4" gutterBottom>
            404 - Denne siden finnes ikke
          </Typography>
          <Typography variant="body1">
            Gå tilbake til forsiden og prøv på nytt.
          </Typography>
        </Box>
      </Container>
    </Layout>
  )
}

export default NotFoundPage
