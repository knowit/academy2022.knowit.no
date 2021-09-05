import React from 'react'
import Version from '../Version/Version'
// import { repository } from '../../../package'
import * as css from './Footer.module.scss'

const AcademyFooter = ({ data }) => {
  if (
    typeof data.site !== 'undefined' &&
    typeof data.site.siteMetadata !== 'undefined'
  ) {
    data = data.site.siteMetadata
  }
  const { email } = data
  return (
    <footer>
      <section className={css.footerTop}>
        <div className={css.gridContainer}>
          <div className={css.footerTopContent}>
            <img alt="" src="/icons/spark.svg"></img>
            <h3>Spørsmål?</h3>
            <p>
              Har du spørsmål om Knowit Academy? Send en epost til{' '}
              <a href={`mailto:${email}`}>{email}</a> så svarer vi så snart vi
              rekker.
            </p>
          </div>
        </div>
      </section>
      <section className={css.footerBottom}>
        <div className={css.gridContainer}>
          <div className={css.footerVersion}>
            <Version></Version>
          </div>
          <div className={css.footerKnowit}>
            <p>
              <a href="/">Knowit Academy</a>
            </p>
            <a href="https://www.knowit.no/">
              <img alt="" src="/icons/arrow.svg" height="22px" />
              <img alt="" src="/assets/knowit_black.png" height="26px" />
            </a>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default AcademyFooter
