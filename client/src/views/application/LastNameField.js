import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StyledField from './StyledField';

const LastNameField = () => (
    <StyledField
        required
        name="lastName"
        label="Last Name"
        variant="outlined"
        helperText="*Required"
    />
);

export default LastNameField;