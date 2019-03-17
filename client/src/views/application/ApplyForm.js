import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Formik, Form } from 'formik';

import * as Yup from 'yup';

import { Link } from 'react-router';

import PasswordField from './PasswordField';
import EmailField from './EmailField';
import SubmitButton from './SubmitButton';
import FirstNameField from "./FirstNameField";
import LastNameField from "./LastNameField";
import PhoneNumberField from "./PhoneNumberField";
import GraduationField from "./GraduationField";
import MajorField from "./MajorField";

const validationSchema = Yup.object({
	email: Yup
		.string("Enter your email")
		.email("You must enter a valid email")
		.required("Email is required"),
	password: Yup
		.string("Enter your password")
		.required("Password is required")
});

const initialValues = {
	email: '',
	password: ''
};

const ApplyForm = ({ handleSubmit }) => {
	const [ showPassword, setShowPassword ] = useState(false);

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={handleSubmit}
		>
			{() => (
				<Form>
					<FirstNameField/>
					<LastNameField/>
					<EmailField />
					<PhoneNumberField/>
					<GraduationField/>
					<MajorField/>
					<PasswordField />
					<PasswordField label = "Re-enter Password"/>
					<SubmitButton />

				</Form>
			)}
		</Formik>
	);
};

export default ApplyForm;