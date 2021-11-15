import { red, indigo, blue } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#D59472",
    },
    secondary: {
      main: "#FFB072",
    },
    error: {
      main: "#A6384C",
    },
    background: {
      default: '#fff7f5',
    },
  },
  breakpoints: {
    // bootstrap grid values as per https://getbootstrap.com/docs/4.1/layout/grid/
    values: {
      xs: 0,
      sm: 576,
      md: 767, 
      lg: 991,
      xl: 1199,
    }
  }
});

export default theme;
