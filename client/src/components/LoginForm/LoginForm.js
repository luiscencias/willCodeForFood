import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { FormikTextField } from 'formik-material-fields';

const validationSchema = Yup.object({
	email: Yup
		.string("Enter your email")
		.email("You must enter a valid email")
		.required("Email is required"),
	password: Yup
		.string("Enter your password")
		.required("You must enter your password")
});

const initialValues = {
	email: '',
	password: ''
};

const LoginForm = ({ onSubmit }) => (
	<Formik
		initialValues={initialValues}
		validationSchema={validationSchema}
		onSubmit={onSubmit}
	>
		{() => (
			<Form>
				<FormikTextField
					name="email"
					label="Email"
					margin="normal"
					variant="outlined"
				/>
				<FormikTextField
					name="password"
					label="Password"
					margin="normal"
					type="password"
					variant="outlined"
				/>
			</Form>
		)}
	</Formik>
);

export default LoginForm;