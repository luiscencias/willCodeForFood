import { createMuiTheme } from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan';

const spacing_unit = 8;

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#9e9e9e'
		},
		secondary: {
			main: cyan[300]
		},
		tonalOffset: 0.3
	},
	typography: {
    useNextVariants: true,
  },
  spacing: {
  	unit: spacing_unit,
  	mainHeader: {
  		height: spacing_unit * 12
  	}
  }
});

export default theme;