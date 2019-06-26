import React from "react"
import css from "./Icon.module.scss"

const Icon = ({ name }) => {
  return (
    <span alt={name} title={name} className={css.iconStyle}>
      {name}
    </span>
  )
}

export default Icon
