import { createTheme } from '@mui/material/styles'
import * as css from 'components/FrontLayout/FrontLayout.module.scss'

console.log('theme css:', css)

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      mobile: 420,
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
          color: css.knowitBlack,
        },
      },
    },
  },
  typography: {
    fontSize: 18,
    fontFamily: 'arial, Helvetica, sans-serif',
    color: css.knowitBlack,
    h1: {
      fontSize: '4.8rem',
    },
    h2: {
      fontSize: '3.8rem',
    },
    h3: {
      fontSize: '2rem',
    },
    h4: {
      fontSize: '1.8rem',
    },
    body1: {
      fontSize: '1.0rem',
    },
  },
  palette: {
    mode: 'light',
    primary: {
      light: css.knowitMint,
      main: css.knowitPear,
      dark: css.knowitForest,
    },
    secondary: {
      light: css.knowitMelon,
      main: css.knowitFlamingo,
      dark: css.knowitLollipop,
    },
    text: {
      primary: css.knowitBlack,
      secondary: css.knowitForest,
      disabled: css.knowitClay,
    },
    background: {
      default: css.knowitWhite,
      paper: css.knowitWhite,
    },
  },
})

export default theme
