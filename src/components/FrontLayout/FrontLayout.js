import React from 'react'
import { MainHelmet } from '../MainHelmet'
import HeaderMenu from '../AcademyHeaderMenu'
import Footer from '../Footer/Footer'
import * as css from './FrontLayout.module.scss'

const FrontLayout = ({ children, data, sitemeta }) => {
  return (
    <section className={css.frontpage}>
      <MainHelmet metadata={data} />
      <HeaderMenu data={data} />
      <main>{children}</main>
      <Footer data={sitemeta} />
    </section>
  )
}

export default FrontLayout
