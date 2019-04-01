import { createMuiTheme } from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan';

const base_spacing_unit = 8;

const defaultTheme = createMuiTheme();

const { typography, spacing, breakpoints } = defaultTheme;

const grid_breakpoints_values = {
  '4-col': 0,
  '8-col': 600,
  '12-col': 840
};

const theme = createMuiTheme({
  ...defaultTheme,

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
    unit: spacing.unit,
    unitScaleToRem: s => `${ 0.5 * s }rem`,
    mainHeader: {
      height: typography.pxToRem(spacing.unit * 8)
    }
  },
  breakpoints: {

    up: value => {
      if (breakpoints.values[value] != undefined || typeof value == 'number')
        return breakpoints.up(value);

      if (grid_breakpoints_values[value] != undefined)
        return `@media (min-width: ${grid_breakpoints_values[value]}px)`;
    },

    down: value => {
      if (breakpoints.values[value] != undefined || typeof value == 'number')
        return breakpoints.down(value);

      if (grid_breakpoints_values[value] != undefined)
        return `@media (max-width: ${grid_breakpoints_values[value] - 1}px)`;
    },

    only: value => {
      if (breakpoints.values[value] != undefined)
        return breakpoints.only(value);

      if (value == '4-col')
        return `@media (max-width: ${grid_breakpoints_values['8-col'] - 1}px)`;
      if (value == '8-col')
        return `@media (min-width: ${grid_breakpoints_values['4-col']}px) 
                      and (max-width: ${grid_breakpoints_values['12-col'] - 1}px)`;
      if (value == '8-col')
        return `@media (min-width: ${grid_breakpoints_values['12-col']}px)`;
    }
  },
  grids: {
    main: {
      display: 'grid',
      alignContent: 'start',

      '@media (min-width: 0px)': { // xs and up
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridColumnGap: '1rem',
        paddingLeft: '1rem',
        paddingRight: '1rem',
      },

      '@media (min-width: 600px)': { // sm and up
        gridTemplateColumns: 'repeat(8, 1fr)',
      },

      '@media (min-width: 840px)': { // between sm and md
        gridTemplateColumns: 'repeat(12, 1fr)',
      },

      '@media (min-width: 960px)': { // md and up
        gridColumnGap: '1.5rem',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
      }
    }
  }
});

export default theme;