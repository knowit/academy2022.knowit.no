import React from "react"
import css from "./Button.module.scss"

const Button = ({ link, alt, style, className, children }) => {
  const thisClass =
    typeof className === "undefined" ? css.defaultButton : className

  return (
    <a href={link} className={thisClass} style={style} role="button" alt={alt}>
      {children}
    </a>
  )
}

export default Button
