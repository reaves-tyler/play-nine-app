import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: green[600],
        },
        secondary: {
            main: '#ffff00',
        },
    },
});

export default responsiveFontSizes(theme);
