import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      dark: "#0a4bd8",
      main: "#0a4bd8",
      light: "#0a4bd8",
    },
    secondary: {
      dark: "#3d7e7a",
      main: "#3d7e7a",
      light: "#3d7e7a",
    },
    error: {
      dark: "#ff0000",
      main: "#ff0000",
      light: "#ff0000",
    },
    warning: {
      dark: "#beeb1e",
      main: "#beeb1e",
      light: "#beeb1e",
    },
    background: {
      paper: "#ffffff",
      default: "#fafafa",
    },
  },
});

export default theme;
