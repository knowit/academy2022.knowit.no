import React from 'react'
import { MainHelmet } from '../MainHelmet'
import HeaderMenu from '../AcademyHeaderMenu'
import Footer from '../Footer/Footer'

const FrontLayout = ({ children, data, sitemeta }) => {
  return (
    <>
      <MainHelmet metadata={data} />
      <HeaderMenu data={data} />
      <main>{children}</main>
      <Footer data={sitemeta} />
    </>
  )
}

export default FrontLayout
