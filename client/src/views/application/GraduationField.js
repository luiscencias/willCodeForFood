import React, { useState } from 'react';
import StyledField from './StyledField';

const GraduationField = () => (
    <StyledField
        required
        name="graduationYear"
        label="Graduation Year"
        variant="outlined"
        helperText="*Required"
    />
);

export default GraduationField;