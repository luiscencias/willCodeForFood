import React, { useState } from 'react';
import PropTypes from 'prop-types';

import StyledField from './StyledField';

const EmailField = () => (
	<StyledField
		required
		name="email"
		label="Email"
		helperText="*Required"
	/>
);

export default EmailField;