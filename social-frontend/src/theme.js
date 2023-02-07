import { createMuiTheme } from '@material-ui/core/styles';
import { teal, orange } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#508ef2',
      main: '#508ef2',
      dark: '#2975f0',
      contrastText: '#fff',
    },
    secondary: {
      light: '#5bd1ff',
      main: '#5bd1ff',
      dark: '#c70050',
      contrastText: '#000',
    },
    openTitle: teal['700'],
    protectedTitle: orange['700'],
    type: 'light',
  },
});

export default theme;
