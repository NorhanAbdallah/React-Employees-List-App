import {createTheme} from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#eb3b81',
    },
    secondary: {
      main: '#00362e',
      light: '#00826e',
    },
    grey: {
      100: '#8b8b92',
      200: '#f8f8fa',
      300: '#f8f8fa',
      400: '#eaeaea',
      500: '#e4e4e4',
      600: '#ffffffab',
      700: '#cacaca5e',
    },
    background: {
      default: '#efefef',
    },
  },

  typography: {
    htmlFontSize: 16,
    fontSize: 14,
    allVariants: {
      fontFamily: 'sans-serif',
    },
  },
  spacing: 5,
});
