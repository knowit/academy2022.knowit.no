import { createTheme } from '@mui/material/styles'
import * as css from 'components/FrontLayout/FrontLayout.module.scss'

console.log('theme css:', css)

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
          color: css.knowitBlack,
        },
      },
    },
  },
  typography: {
    htmlFontSize: 18,
    fontFamily: 'arial, Helvetica, sans-serif',
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
      paper: 'none',
    },
  },
})

export default theme
