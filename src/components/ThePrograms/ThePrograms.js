import React from 'react'
import * as css from './ThePrograms.module.scss'

const ThePrograms = ({ pages }) => {
  const programPages = pages.map((item) => {
    const path = item.path.replace(/about-/, '')
    // <a href={path}></a>
    return (
      <li key={item.path}>
        <a href={path}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <img alt="" src="/icons/arrow.svg" width="28px" />
        </a>
      </li>
    )
  })

  return (
    <section id="theprograms" className={css.thePrograms}>
      <div className={css.gridContainer}>
        <div className={css.frontContent}>
          <h2>Programmer</h2>
          <nav>
            <ul>{programPages}</ul>
          </nav>
        </div>
      </div>
    </section>
  )
}

export default ThePrograms
