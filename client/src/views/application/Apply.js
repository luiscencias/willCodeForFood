import React from 'react';
import axios from 'axios';
import MainSection from './MainSection';
import ApplyForm from './ApplyForm';
import FormHeader from './FormHeader';

import { useScrollToTopOnMount } from '../../helpers';

const Apply = () => {
    useScrollToTopOnMount();

    return (
        <MainSection>
            <div className="form-container">
                <FormHeader />
                <ApplyForm/>
            </div>
        </MainSection>
    );
};

export default Apply;