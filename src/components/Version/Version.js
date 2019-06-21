import React from "react"
import { version } from "../../../package"
import css from "./Version.module.scss"

const Version = () => (
  <>
    {" "}
    <span className={css.version}>
      Dette er versjon {version} av websidene.
    </span>
  </>
)

export default Version
