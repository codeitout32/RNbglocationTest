import { createTheme, responsiveFontSizes } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Theme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: "black",
        },
      },
    },
  },
  typography: {
    // fontFamily: '"Noto Serif", serif',
    fontWeightRegular: 300,

    body1: {
      // fontFamily: '"DM Sans", sans-serif',
      fontSize: "0.99rem",
      // textTransform: "capitalize",
    },
    body2: {
      // fontFamily: '"DM Sans", sans-serif',
      color: "#616161",
    },
    button: {
      // fontFamily: '"DM Sans", sans-serif',
      fontWeight: 500,
      textTransform: "capitalize",
    },
    subtitle2: {
      // fontFamily: '"DM Sans", sans-serif',
    },
    h6: {
      fontWeight: 300,
      lineHeight: 1.2,
    },
  },
  palette: {
    mode: "light",
    text: {
      primary: "#44444d",
      secondary: grey[500],
    },

    background: {
      default: "#fff",
    },

    primary: {
      main: "#fff",
      dark: "#333",
      contrastText: "#fff",
    },
    secondary: {
      main: grey[900],
      dark: grey[1000],
      contrastText: "#fff",
    },
    action: {
      disabled: "#3F3F46",
      disabledBackground: "#18181B",
    },
  },
});

const restheme = responsiveFontSizes(theme, { factor: 3 });
// const restheme = theme;
export default restheme;
