import React from "react"
import Button from "../Button"
import colors from "../../utils/colors"
import css from "./SignupSection.module.scss"

const SignupSection = () => {
  return (
    <section className={css.signupSection} id="signup">
      <h2 className={css.signUpTitle}>Påmelding</h2>
      <p>
        Påmelding er planlagt å starte i midten av august, med{" "}
        <b>søknadsfrist 31. august, 2019</b>. Mer informasjon om
        søknadsprosessen vil bli sendt ut rett over sommeren.
      </p>
      <Button
        link="how-to-apply"
        alt="Information about how to apply"
        className={css.signupButton}
      >
        Hvordan søke
      </Button>
    </section>
  )
}

/*

      <a
        className={css.signUpButton}
        href="how-to-apply"
        alt="Information about how to apply"
      >
        Hvordan søke
      </a>
      */

export default SignupSection
