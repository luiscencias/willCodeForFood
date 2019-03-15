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
  grids: {
  	mainLayout: {
  		display: 'grid',

  		'@media (min-width: 0px)': { // xs and up
  			gridTemplateColumns: 'repeat(4, 1fr)',
  			gridGap: '16px'
  		},

  		'@media (min-width: 600px)': { // sm and up
  			gridTemplateColumns: 'repeat(8, 1fr)'
  		},

  		'@media (min-width: 840px)': { // between sm and md
  			gridTemplateColumns: 'repeat(12, 1fr)'
  		},

  		'@media (min-width: 960px)': { // md and up
  			gridGap: '24px'
  		}
  	}
  }
});

export default theme;