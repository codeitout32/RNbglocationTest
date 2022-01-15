import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: '"Noto Serif", serif',
    body1: {
      fontFamily: '"DM Sans", sans-serif',
    },
    body2: {
      fontFamily: '"DM Sans", sans-serif',
      color: "#616161",
      fontSize: "1rem",
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
    action: {
      disabled: "#3F3F46",
      disabledBackground: "#18181B",
    },
  },
});

export default theme;
