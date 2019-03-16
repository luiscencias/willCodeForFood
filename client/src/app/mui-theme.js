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
  		height: spacing_unit * 8
  	}
  },
  breakpoints: {
  	values: {
  		'xs': 0,
  		'4-col': 0,
  		'sm': 600,
  		'8-col': 600,
  		'12-col': 840,
  		'md': 960,
  		'lg': 1280,
  		'xl': 1920
  	}
  },
  grids: {
  	main: {
  		display: 'grid',
  		alignContent: 'start',

  		'@media (min-width: 0px)': { // xs and up
  			gridTemplateColumns: 'repeat(4, 1fr)',
  			gridColumnGap: '16px',
  			paddingLeft: 16,
  			paddingRight: 16
  		},

  		'@media (min-width: 600px)': { // sm and up
  			gridTemplateColumns: 'repeat(8, 1fr)'
  		},

  		'@media (min-width: 840px)': { // between sm and md
  			gridTemplateColumns: 'repeat(12, 1fr)'
  		},

  		'@media (min-width: 960px)': { // md and up
  			gridColumnGap: '24px',
  			paddingLeft: 24,
  			paddingRight: 24
  		}
  	}
  }
});

export default theme;