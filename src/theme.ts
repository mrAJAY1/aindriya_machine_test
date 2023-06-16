import { createTheme } from "@mui/material";

const token = {
  primary: {
    main: "#212D57",
    light: "#3153CD",
  },
  secondary: {
    main: "#ffff",
    light: "#f0f6f8",
  },
};
export const theme = createTheme({
  palette: {
    primary: {
      main: token.primary.main,
      light: token.primary.light,
    },
    secondary: {
      main: token.secondary.main,
      light: token.secondary.light,
    },
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    fontSize: 10,
    h1: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      color: token.secondary.main,
    },
    h2: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      color: token.secondary.main,
    },
    h3: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      color: token.secondary.main,

      fontWeight: 800,
    },
    h4: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      color: token.secondary.main,

      fontWeight: 600,
    },
    h5: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      color: token.secondary.main,

      fontWeight: 400,
    },
    h6: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      color: token.secondary.main,
    },
    subtitle2: {
      fontSize: "8px",
    },
  },
});
