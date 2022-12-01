import { createTheme } from '@mui/material/styles';
import colors from '../../utils/Colors';

const theme = createTheme({
  palette: {
    primary: {
      main: colors.orange.primary,
    },
    secondary: {
      main: colors.blue.primary,
    },
    tertiary: {
      main: colors.gray.secondary,
    },
    error: {
      main: colors.pink.secondary,
    },
    success: {
      main: colors.green.quaternary,
    },
    warning: {
      main: colors.yellow.primary,
    },
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          fontWeight: 'bold',
        },
      },
    },
  },
});
export default theme;
