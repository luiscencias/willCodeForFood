import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import StyledField from './StyledField';

import IconButton from '@material-ui/core/IconButton';

import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

import InputAdornment from '@material-ui/core/InputAdornment';

const StyledIcon = withStyles(theme => ({
	root: {
		height: theme.spacing.unitScaleToRem(5),
		width: theme.spacing.unitScaleToRem(5),
		fontSize: '2rem',
		padding: theme.spacing.unitScaleToRem(1)
	}
}))(IconButton);

const PasswordField = () => {
	const [ showPassword, setShowPassword ] = useState(false);

	return (
		<StyledField
			required
			name="password"
			label="Password"
			variant="outlined"
			type={ showPassword ? 'text' : 'password' }
			InputProps={{
				endAdornment: (
					<InputAdornment position="end">
						<StyledIcon onClick={() => setShowPassword(!showPassword)} >
							{ showPassword ? <VisibilityOffIcon /> : <VisibilityIcon /> }
						</StyledIcon>
					</InputAdornment>
				)
			}}
			helperText="*Required"
		/>
	);
};

export default PasswordField;