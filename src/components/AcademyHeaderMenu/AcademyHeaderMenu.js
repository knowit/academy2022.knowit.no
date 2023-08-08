import * as React from 'react'
import { useState } from 'react'
// import Typography from '@mui/material/Typography'
import {
  AppBar,
  Toolbar,
  Container,
  Button,
  Box,
  Link,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
  Divider,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import * as css from './AcademyHeaderMenu.module.scss'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
// import * as atheme from 'AcademyTheme'

const AcademyHeaderMenu = () => {
  const theme = useTheme()
  const isTablet = useMediaQuery(theme.breakpoints.down('tablet'))

  const [isMenuOpen, setMenuState] = useState(false)

  const toggleMenu = (open) => (event) => {
    setMenuState(open)
  }

  const menuItems = [
    ['Programmene 2022', '/#theprograms'],
    ['Om Knowit Academy', '/#about'],
  ]

  const menu = () => (
    <Box
      role="presentation"
      sx={{
        width: '90vw',
        maxWidth: '400px',
      }}
    >
      <Box
        sx={{
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 2,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: css.knowitWhite,
        }}
      >
        <Link
          variant="h5"
          href="/"
          className={css.menuTitle}
          sx={{
            flexGrow: 2,
            color: css.knowitBlack,
            fontSize: `min(10vw, 1.4rem)`,
            fontFamily: 'ArialforKnowitRegular',
            textDecoration: 'none',
            borderBottom: 'none',
          }}
        >
          Knowit Academy
        </Link>
        <IconButton size="large">
          <ChevronRightIcon />
        </IconButton>
      </Box>
      <Divider />
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={item[0]} disablePadding>
            <ListItemButton
              href={item[1]}
              onClick={toggleMenu(false)}
              sx={{ borderBottm: '2px solid #ffffff00', borderRadius: 0 }}
            >
              <ListItemText primary={item[0]} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <AppBar position="static" elevation={0}>
      <Container maxWidth="tablet">
        <Toolbar sx={{ padding: 0 }}>
          <Link variant="h5" underline="none" marginRight={3} href="/">
            <span className={css.academyTitle}>Knowit Academy</span>
          </Link>
          <Box sx={{ flexGrow: 2 }}>
            {menuItems.map((item) => {
              if (!isTablet) {
                return (
                  <Button
                    variant="text"
                    key={item[0]}
                    href={item[1]}
                    sx={{ textTransform: 'none', whiteSpace: 'nowrap' }}
                  >
                    {item[0]}
                  </Button>
                )
              }
              return ''
            })}
          </Box>
          <Box
            sx={{
              display: { xs: 'flex', mobile: 'flex', tablet: 'none' },
            }}
          >
            <IconButton
              size="large"
              aria-label="button to show menu"
              aria-haspopup="true"
              onClick={toggleMenu(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              variant="temporary"
              ModalProps={{ keepMounted: true }}
              elevation={8}
              open={isMenuOpen}
              onClose={toggleMenu(false)}
              onClick={toggleMenu(false)}
            >
              {menu()}
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default AcademyHeaderMenu
