import React from 'react'
import p from '../../../package'
import * as css from './Version.module.scss'

const Version = () => (
  <>
    {' '}
    <span className={css.version}>v{p.version}</span>
  </>
)

export default Version
