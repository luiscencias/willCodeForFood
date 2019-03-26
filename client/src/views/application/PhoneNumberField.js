import React, { useState } from 'react';
import StyledField from './StyledField';

const PhoneNumberField = () => (
    <StyledField
        required
        name="phoneNumber"
        label="Phone Number"
        variant="outlined"
        helperText="*Required"
    />
);

export default PhoneNumberField;