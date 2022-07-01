import * as React from 'react'
import { MainHelmet } from 'components/MainHelmet'
import HeaderMenu from 'components/AcademyHeaderMenu'
import Footer from 'components/Footer'
import { CssBaseline } from '@mui/material'

const FrontLayout = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <MainHelmet />
      <HeaderMenu />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default FrontLayout
