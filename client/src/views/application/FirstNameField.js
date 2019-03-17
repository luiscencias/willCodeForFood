import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StyledField from './StyledField';

const FirstNameField = () => (
    <StyledField
        required
        name="firstName"
        label="First Name"
        variant="outlined"
        helperText="*Required"
    />
);

export default FirstNameField;