import { createTheme } from '@mui/material/styles';
import "@fontsource/inter/600.css"

const theme = createTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#FFFFFF',
      },
      secondary: {
        main: '#222121',
      },
      ternary:{
        main: "#E85859"
      },
    },
    typography:{
      fontFamily: 'inter'
    }
  });

export default theme;