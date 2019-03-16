import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import Section from './Section';

const StyledSection = withStyles(theme => ({
	root: {
		'& .benefits-text': {
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

		'& p': {
			marginBottom: theme.spacing.unit * 6
		}
	}
}))(Section);

const BenefitsSection = () => (
	<StyledSection>
		<div className="benefits-text">
			<h2>Benefits of Membership</h2>
			<p>
				This is where benefits are listed more concretely. This intro paragraph briefly
				describes the following list:
			</p>

			<ul>
				<li>
					<em>Benefit One</em> A sentence describing a concrete benefit. This item should contain concrete
					data.
				</li>
				<li>
					<em>Benefit Two</em> A sentence describing a concrete benefit. This item should contain concrete
					data.
				</li>
				<li>
					<em>Benefit Three</em> A sentence describing a concrete benefit. This item should contain concrete
					data.
				</li>
				<li>
					<em>Benefit Four</em> A sentence describing a concrete benefit. This item should contain concrete
					data.
				</li>
			</ul>
		</div>
	</StyledSection>
);

export default BenefitsSection;