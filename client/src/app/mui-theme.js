import { createMuiTheme } from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#9e9e9e'
		},
		secondary: {
			main: cyan[300]
		}
	},
	typography: {
    useNextVariants: true,
  },
});

export default theme;