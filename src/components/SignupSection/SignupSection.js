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

    </section>
  )
}

export default SignupSection
