import React from "react"
import * as css from "./Icon.module.scss"

const Icon = ({ name, style }) => {
  return (
    <span alt={name} title={name} style={style} className={css.iconStyle}>
      {name}
    </span>
  )
}

export default Icon
