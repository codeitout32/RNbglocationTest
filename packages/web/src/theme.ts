import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: '"Noto Serif", serif',
    body1: {
      fontFamily: '"DM Sans", sans-serif',
    },
    button: {
      fontFamily: '"DM Sans", sans-serif',
      fontWeight: 500,
    },
  },
  palette: {
    text: {
      primary: "#fff",
      secondary: "#616161",
    },

    background: {
      default: "#000",
    },

    primary: {
      main: "#000",
      dark: "#333",
      contrastText: "#fff",
    },
    secondary: {
      main: "#555",
      dark: "#444",
      contrastText: "#fff",
    },
  },
});

export default theme;
