import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import Section from './Section';

import StartApplicationButton from './StartApplicationButton';

const StyledSection = withStyles(theme => ({
	root: {
		backgroundColor: theme.palette.grey[200],

		'& .intro-text': {
			[theme.breakpoints.up('4-col')]: {
				gridColumn: '1 / -1'
			},

			[theme.breakpoints.up('8-col')]: {
				gridColumn: '2 / span 4'
			},

			[theme.breakpoints.up('12-col')]: {
				gridColumn: '2 / span 5'
			}
		},

		'& .intro-sidebar': {
			display: 'flex',
			flexDirection: 'column',

			[theme.breakpoints.up('4-col')]: {
				gridColumn: '1 / -1',
				marginTop: theme.spacing.unitScaleToRem(2)
			},

			[theme.breakpoints.up('8-col')]: {
				gridColumn: '6 / -2',
				marginTop: 0
			},

			[theme.breakpoints.up('12-col')]: {
				gridColumn: '8 / -2'
			}
		}
	}
}))(Section);

const IntroSection = () => (
	<StyledSection>
		<div className="intro-text">
			<h2>Some inspiring headline about membership.</h2>
			<p>
				A basic intro paragraph reiterating the points made on the home page. This
				initial section should focus more on emotions than concrete benefits. It
				should also expand on those points in more detail.
			</p>
		</div>
		<div className="intro-sidebar">
			<StartApplicationButton />
		</div>
	</StyledSection>
);

export default IntroSection;