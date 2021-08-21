import React from 'react'
// import Button from "../Button"
import * as css from './SignupSection.module.scss'

const SignupSection = () => {
  return (
    <section className={css.signupSection} id="signup">
      <div className={css.gridContainer}>
        <div className={css.frontContent}>
          <h2 className={css.signupTitle}>Påmelding 2021/2022</h2>
          <p>
            Søk om plass innen <strong>søndag 12. september, 2021</strong>.{' '}
          </p>
          <a class="link" href="/how-to-apply">
            Les mer om søknadsprosessen
          </a>
        </div>
      </div>
    </section>
  )
}

export default SignupSection
