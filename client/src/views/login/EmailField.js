import React, { useState } from 'react';
import PropTypes from 'prop-types';

import StyledField from './StyledField';

const EmailField = () => (
	<StyledField
		required
		name="email"
		label="Email"
		variant="outlined"
		helperText="*Required"
	/>
);

export default EmailField;