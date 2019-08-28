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
            Påmeldingen har startet og søknadsfristen er mandag 2. september,
            2019.
          </p>
          <Button
            link="/application-form"
            alt="Information about how to apply"
            className={css.signupButton}
          >
            Fyll ut søknad
          </Button>
        </div>
      </div>
    </section>
  )
}

export default SignupSection
