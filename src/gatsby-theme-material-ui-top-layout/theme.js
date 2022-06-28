import { createTheme } from '@mui/material/styles'
import * as css from 'components/FrontLayout/FrontLayout.module.scss'
const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 768,
      laptop: 1024,
      desktop: 1200,
    },
  },
  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
          height: 86,
          minHeight: 86,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        text: {
          color: '#333333',
        },
      },
    },
  },
  typography: {
    fontFamily: 'arial',
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#b7debd',
    },
    secondary: {
      main: '#fac0b1',
    },
    background: {
      default: '#e4e1db',
      paper: 'none',
    },
  },
})

export default theme
