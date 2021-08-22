import React from 'react'
// import Button from '../Button'
import * as css from './SignupSection.module.scss'

const SignupSection = () => {
  // <a class="link" href="/how-to-apply">
  //   Les mer om søknadsprosessen
  // </a>
  return (
    <section className={css.signupSection} id="signup">
      <a
        href="/application-form"
        alt="Link til skjema: Søk om plass på knowit academy"
      >
        <div className={css.gridContainer}>
          <div className={css.frontContent}>
            <h2 className={css.signupTitle}>Påmelding 2021/2022</h2>
            <p>
              Påmeldingen starter mandag 30. august.
              <br /> Søk om plass innen{' '}
              <strong>søndag 12. september, 2021</strong>.<br />
            </p>
            <p className={css.signupMessage}>
              <span>Meld deg på</span>
              <img alt="" src="/icons/arrow.svg" width="28px" />
            </p>
          </div>
        </div>
      </a>
    </section>
  )
}

export default SignupSection
