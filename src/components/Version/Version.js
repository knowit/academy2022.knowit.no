import React from "react"
import { version } from "../../../package"
import css from "./Version.module.scss"

const Version = () => (
  <>
    {" "}
    <span className={css.version}>v{version}</span>
  </>
)

export default Version
