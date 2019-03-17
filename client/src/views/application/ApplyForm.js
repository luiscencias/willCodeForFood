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

					/*
					phone_number
					graduation_year
					major
					member_status, default: false
					password
					 */

					<PasswordField />
					/*
					first_name
					last_name
					email
					phone_number
					graduation_year
					major
					member_status, default: false
					password
					 */
					<SubmitButton />

				</Form>
			)}
		</Formik>
	);
};

export default ApplyForm;