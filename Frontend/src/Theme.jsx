import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
      background: '#000',
      text:'#fff',
      button:'#FBC500',
      hoverButton:'#DDAD00'
    },
    secondary: {
      main: '#1665b5',
      background:'#F8ECF1',
      logo: '#9F8C62',
      button:'#d90700'
    },
    success:{
      main:'#F8ECF1',
      background:'#461465'
    },
    info:{
      main:'#6614A5'
  }
}
})