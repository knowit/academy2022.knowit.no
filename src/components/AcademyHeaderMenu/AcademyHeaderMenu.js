import React from 'react'
import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import * as css from './AcademyHeaderMenu.module.scss'
// import * as atheme from 'AcademyTheme'

const AcademyHeaderMenu = ({ data }) => {
  const menuItems = [
    ['Hjem', '/'],
    ['Programmene', '/#theprograms'],
    ['Påmelding', '/application-form'],
    ['Om Knowit Academy', '/#about'],
  ]

  return (
    <AppBar position="relative" elevation={0}>
      <Container maxWidth="tablet">
        <Toolbar sx={{ padding: 0 }}>
          <Typography
            variant="h5"
            noWrap
            component="h1"
            className={css.academyTitle}
          >
            Knowit Academy
          </Typography>
          {menuItems.map((item) => (
            <Button
              variant="text"
              noWrap={true}
              key={item[0]}
              href={item[1]}
              sx={{ textTransform: 'none', whiteSpace: 'nowrap', fontSize: 18 }}
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
