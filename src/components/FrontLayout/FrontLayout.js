import React from "react"
import MainHelmet from "../MainHelmet"
import HeaderMenu from "../AcademyHeaderMenu"
import Footer from "../Footer"
import css from "./FrontLayout.module.scss"

const FrontLayout = ({ children, data }) => {
  return (
    <section className={css.frontpage}>
      <MainHelmet metadata={data} />
      <HeaderMenu data={data} />
      <main>{children}</main>
      <Footer data={data} />
    </section>
  )
}

export default FrontLayout
