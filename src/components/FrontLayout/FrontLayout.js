import * as React from 'react'
import { MainHelmet } from '../MainHelmet'
import HeaderMenu from '../AcademyHeaderMenu'
import Footer from '../Footer/Footer'
import { CssBaseline } from '@mui/material'

const FrontLayout = ({ children, data, sitemeta }) => {
  return (
    <>
      <CssBaseline />
      <MainHelmet metadata={data} />
      <HeaderMenu data={data} />
      <main>{children}</main>
      <Footer data={sitemeta} />
    </>
  )
}

export default FrontLayout
