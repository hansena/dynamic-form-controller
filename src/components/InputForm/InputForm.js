import React from "react";
import { Formik } from "formik";
import { FormPresentation } from "./FormPresentation";

export const InputForm = ({ classes, handleSubmission, initialValues, shape, validationSchema }) => {
	return (
		<Formik
			initialValues={initialValues}
			render={(props) => <FormPresentation {...props} classes={classes} debug handleSubmit={handleSubmission} shape={shape} />}
			validationSchema={validationSchema}
		/>
	);
};
