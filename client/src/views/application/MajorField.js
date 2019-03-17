import React, { useState } from 'react';
import StyledField from './StyledField';

const MajorField = () => (
    <StyledField
        required
        name="major"
        label="Major"
        variant="outlined"
        helperText="*Required"
    />
);

export default MajorField;