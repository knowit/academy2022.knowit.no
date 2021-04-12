import React from "react"
import Button from "../Button"
import css from "./SignupSection.module.scss"

const SignupSection = () => {
  return (
    <section className={css.signupSection} id="signup">
      <h2 className={css.signUpTitle}>Påmelding</h2>
      <p>
        Påmeldingen har ikke startet.{" "}
      </p>
      <a class="link" href="/how-to-apply">
        Les mer om søknadsprosessen
      </a>
    </section>
  )
}

export default SignupSection
