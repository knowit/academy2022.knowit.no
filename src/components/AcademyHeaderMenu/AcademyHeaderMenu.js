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
  Typography,
  Divider,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import * as css from './AcademyHeaderMenu.module.scss'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
// import * as atheme from 'AcademyTheme'

const AcademyHeaderMenu = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('mobile'))
  const isTablet = useMediaQuery(theme.breakpoints.down('tablet'))

  const [isMenuOpen, setMenuState] = useState(false)

  const toggleMenu = (open) => (event) => {
    // foo
    console.log('button pressed', open, event)
    setMenuState(open)
  }

  const menuItems = [
    ['Programmene', '/#theprograms'],
    ['Påmelding', '/application-form'],
    ['Om Knowit Academy', '/#about'],
  ]

  const menu = () => (
    <Box
      role="presentation"
      sx={{
        width: '90vw',
        maxWidth: '400px',
        backgroundColor: css.knowitWhite,
      }}
    >
      <Box
        backgroundColor={css.knowitPear}
        sx={{
          padding: 2,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h5"
          className={css.academyTitle}
          sx={{ flexGrow: 2 }}
        >
          Knowit Academy
        </Typography>
        <IconButton size="large">
          <ChevronLeftIcon />
        </IconButton>
      </Box>
      <Divider />
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={item[0]} disablePadding>
            <ListItemButton href={item[1]} onClick={toggleMenu(false)}>
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
              anchor="left"
              variant="temporary"
              ModalProps={{ keepMounted: true }}
              elevation="8"
              open={isMenuOpen}
              onClose={toggleMenu(false)}
              onClick={toggleMenu(false)}
              sx={{ backgroundColor: 'white' }}
            >
              {menu()}
            </Drawer>
          </Box>
          <Link
            variant="h5"
            underline="none"
            marginRight={3}
            href="/"
            sx={{
              fontSize: isMobile ? '7.8vw' : '2rem',
            }}
          >
            <span className={css.academyTitle}>Knowit Academy</span>
          </Link>
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
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default AcademyHeaderMenu
