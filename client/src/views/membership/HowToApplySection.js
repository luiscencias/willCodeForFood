import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import Section from './Section';

import StartApplicationButton from './StartApplicationButton';

const StyledSection = withStyles(theme => ({
	root: {
		backgroundColor: theme.palette.grey[200],

		'& .apply-text': {
			[theme.breakpoints.up('4-col')]: {
				gridColumn: '1 / -1'
			},

			[theme.breakpoints.up('8-col')]: {
				gridColumn: '2 / span 6'
			},

			[theme.breakpoints.up('12-col')]: {
				gridColumn: '3 / span 8'
			}
		},

		'& .apply-button': {
			height: theme.spacing.unit * 20,
			paddingRight: theme.spacing.unit * 3,

			display: 'flex',

			justifyContent: 'center',
			alignItems: 'center'
		}
	}
}))(Section);

const HowToApplySection = () => (
	<StyledSection>
		<div className="apply-text">
			<h2>How to Apply</h2>
			<ol>
				<li>
					A description of the first step in the application process. Probably
					involves gathering important documents or something.
				</li>
				<li>
					A description of the second step in the application process. 
					A <a href="#" className="text-link">text link</a> to some important 
					relevant information.
				</li>
				<li>
					Fill out the following application:

					<div className="apply-button">
						<StartApplicationButton />
					</div>
				</li>
				<li>
					Description of what happens after the application is submitted.
				</li>
			</ol>
		</div>
	</StyledSection>
);

export default HowToApplySection;