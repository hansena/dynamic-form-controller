import React from "react";
import { Form } from "formik";
import { FormDebugger } from "./FormDebugger";

export const FormPresentation = (props) => {
	const {
		classes,
		debug,
		errors,
		handleChange,
		handleSubmit,
		initialValues,
		isSubmitting,
		isValid,
		isValidating,
		shape,
		setFieldTouched,
		touched,
		values,
	} = props;

	const changeHandler = (e) => {
		e.preventDefault();
		handleChange(e);
	};

	const blurHandler = (e) => {
		e.preventDefault();
		setFieldTouched(e.target.name, true, false);
	};

	return (
		<Form onSubmit={handleSubmit(values)}>
			{/*Render Data Collection Controls*/}
			{shape.collection.map((control, i) => {
				const { Component } = control;
				return (
					<Component
						classes={classes}
						errors={errors}
						fullWidth
						initialValues={initialValues}
						key={i}
						onBlur={blurHandler}
						onChange={changeHandler}
						suggestions={control.suggestions}
						touched={touched}
					/>
				);
			})}
			{/*Render Action Controls*/}
			{shape.actions.map((control, i) => {
				const { Component, label, ...rest } = control;
				const isReady = !isSubmitting && !isValidating && isValid;
				return (
					<Component {...rest} disabled={!isReady} fullWidth key={i} className={classes.button}>
						{label}
					</Component>
				);
			})}
			{/*Conditionally Render Form Debugger*/}
			{debug && <FormDebugger />}
		</Form>
	);
};
