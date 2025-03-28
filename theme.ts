"use client";
import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      light: "#b4edc1", // light #b4edc1
      main: "#63a34c", // medium #63a34c
      dark: "#b4edc1", // darker #005500
    },
    secondary: {
      light: "rgb(249, 184, 94)", // light rgb(249, 184, 94)
      main: "#cc964c", // biege #cc964c
      dark: "rgb(141, 108, 63)", // darker rgb(141, 108, 63)
    },
    background: {
      default: "#b4edc1", // light #b4edc1
    },
    text: {
      primary: "#000000",
    },
  },
  typography: {
    //fontFamily: "Metamorphous",
  },
});

export default theme;

// light #b4edc1
// medium #63a34c
// darker #005500
// brown/biege #cc964c
