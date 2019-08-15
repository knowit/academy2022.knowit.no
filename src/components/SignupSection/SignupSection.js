import React from "react"
import Button from "../Button"
import css from "./SignupSection.module.scss"

const SignupSection = () => {
  return (
    <section className={css.signupSection} id="signup">
      <h2 className={css.signUpTitle}>Påmelding</h2>
      <p>
        Påmeldingen har startet.{" "}
        <b>søknadsfrist er mandag 2. september, 2019</b>.
      </p>
      <Button
        link="/application-form"
        alt="Information about how to apply"
        className={css.signupButton}
      >
        Søknadsskjema
      </Button>
      <a class="link" href="/how-to-apply">
        Les mer om søknadsprosessen
      </a>
    </section>
  )
}

export default SignupSection
