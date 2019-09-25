import React from "react"
import Button from "../Button"
import css from "./SignupSection.module.scss"

const SignupSection = () => {
  return (
    <section className={css.signupSection} id="signup">
      <div className={css.gridContainer}>
        <div className={css.frontContent}>
          <h2 className={css.signUpTitle}>Påmelding</h2>
          <p>
            Årets programmer har startet og påmeldingen er stengt. Nye
            programmer vil bli satt opp høsten 2020.
          </p>
          <Button
            link="/application-form"
            alt="Information about how to apply"
            className={css.signupButton}
          >
            Mer informasjon
          </Button>
        </div>
      </div>
    </section>
  )
}

export default SignupSection
