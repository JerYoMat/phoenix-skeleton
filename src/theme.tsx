import { LinkProps, createTheme, responsiveFontSizes } from '@mui/material';

// Needed to enable CSSOverrides and default prop customization with the theme


declare module '@mui/material/styles' {
  interface TypeText {
    contrastTextOnDark: string;
  }
  interface TypeBackground {
    filledInput: string;
  }
}

export type TBrandTheme = typeof brandTheme;

export const brandTheme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          '& legend': {
            width: 0, // make sure border is unbroken by MUI hidden label
          },
        },
      },
    },
    MuiInputLabel: {
      defaultProps: {
        shrink: false,
      },
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          fontSize: theme.spacing(1.5),
          left: theme.spacing(-1.5),
          ...(ownerState.size === 'small'
            ? {
                top: theme.spacing(-4),
              }
            : {
                top: theme.spacing(-5),
              }),
        }),
      },
    },
  },
  palette: {
    mode: 'light',
    text: {
      primary: '#1E2124',
      secondary: '#57606B',
      disabled: '#B6BCC4',
      contrastTextOnDark: '#ffffff',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
      filledInput: '#f1f2f4',
    },
    primary: {
      main: '#3317CF',
      light: '#5F47EB',
      dark: '#220F8A',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#FCB782',
      light: '#FDC69B',
      dark: '#FA8C38',
      contrastText: '#1E2124',
    },
    error: {
      main: '#A41928',
      dark: '#77121D',
      light: '#D02033',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#FAAD14',
      light: '#FBBF46',
      dark: '#D79005',
      contrastText: '#231F20',
    },
    info: {
      main: '#1346CE',
      light: '#285DEB',
      dark: '#0F369F',
      contrastText: '#ffffff',
    },
    success: {
      main: '#2E7623',
      dark: '#1F4F17',
      light: '#3D9D2F',
      contrastText: '#FFFFFF',
    },
    grey: {
      '50': '#fafafa',
      '100': '#F4F5F6',
      '200': '#ECEEF0',
      '300': '#DDE0E3',
      '400': '#B6BCC4',
      '500': '#949DA8',
      '600': '#697381',
      '700': '#57606B',
      '800': '#3B4149',
      '900': '#1E2124',
      A100: '#D1D4D9',
      A200: '#A1A9B3',
      A400: '#57606B',
      A700: '#2B2F35',
    },
    divider: '#DDE0E3',
  },
  typography: {
    fontWeightLight: 300,
    fontWeightRegular: 350,
    fontWeightMedium: 400,
    fontWeightBold: 500,
    fontFamily: 'Whitney, sans-serif',
    h1: {
      fontFamily: 'Ubuntu, sans-serif',
      fontWeight: 400,
    },
    h2: {
      fontFamily: 'Ubuntu, sans-serif',
      fontWeight: 400,
    },
    h3: {
      fontFamily: 'Ubuntu, sans-serif',
      fontWeight: 400,
    },
    h4: {
      fontFamily: 'Ubuntu, sans-serif',
      fontWeight: 400,
    },
    h5: {
      fontFamily: 'Ubuntu, sans-serif',
      fontWeight: 400,
    },
    h6: {
      fontFamily: 'Ubuntu, sans-serif',
      fontWeight: 500,
    },
    subtitle1: {
      fontWeight: 350,
    },
    subtitle2: {
      fontWeight: 350,
    },
    body1: {
      fontWeight: 350,
    },
    body2: {
      fontWeight: 350,
    },
    button: {
      fontFamily: 'Ubuntu, sans-serif',
      fontWeight: 500,
      textTransform: 'none',
    },
    caption: {
      fontWeight: 350,
    },
    overline: {
      fontWeight: 350,
    },
  },
  spacing: 8,
});

export default responsiveFontSizes(brandTheme);
