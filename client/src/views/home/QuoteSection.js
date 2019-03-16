import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import Section from './Section';

const StyledSection = withStyles(theme => ({
	root: {
		textAlign: 'center'
	}
}))(Section);

const QuoteSection = () => (
	<StyledSection>
		<h2>Reviews From Our Members</h2>
	</StyledSection>
);

export default QuoteSection;