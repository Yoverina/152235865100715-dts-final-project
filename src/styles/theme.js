import { createTheme } from '@mui/material/styles';
import "@fontsource/inter"

const theme = createTheme({
    palette: {
      primary: {
        main: '#222121',
      },
      secondary: {
        main: '#FFFFFF',
      },
      ternary:{
        main: "#E85859"
      },
    },
    typography:{
      fontFamily: 'inter'
    },
  });

export default theme;