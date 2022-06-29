import React from 'react'
import AppBar from '@mui/material/AppBar'
// import Typography from '@mui/material/Typography'
import { Link } from '@mui/material'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import * as css from './AcademyHeaderMenu.module.scss'
// import * as atheme from 'AcademyTheme'

const AcademyHeaderMenu = ({ data }) => {
  const menuItems = [
    ['Programmene', '/#theprograms'],
    ['Påmelding', '/application-form'],
    ['Om Knowit Academy', '/#about'],
  ]

  return (
    <AppBar position="relative" elevation={0}>
      <Container maxWidth="tablet">
        <Toolbar sx={{ padding: 0 }}>
          <Link
            variant="h5"
            underline="none"
            marginRight={3}
            href="/"
            color="#333333"
            className={css.academyTitle}
          >
            Knowit Academy
          </Link>
          {menuItems.map((item) => (
            <Button
              variant="text"
              key={item[0]}
              href={item[1]}
              sx={{ textTransform: 'none', whiteSpace: 'nowrap' }}
            >
              {item[0]}
            </Button>
          ))}
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default AcademyHeaderMenu
