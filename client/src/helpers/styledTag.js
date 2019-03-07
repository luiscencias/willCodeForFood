import React from 'react';
import PropTypes from 'prop-types';

const styledTag = tag => props => {
	const Tag = React.createElement(
		tag, 
		{ ...props, className: props.classes.root }, 
		props.children
	);

	return Tag;
};

export default styledTag;