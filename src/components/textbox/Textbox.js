import React from "react";
import TextField from "@material-ui/core/TextField";

export const Textbox = (config) => ({ classes, errors, initialValues, onBlur, onChange, touched }) => {
	const hasError = touched[config.name] && Boolean(errors[config.name]);
	// console.log("textConfig: ", config);
	return (
		<TextField
			className={hasError ? classes.textboxError : classes.textbox}
			defaultValue={initialValues[config.name]}
			error={hasError}
			fullWidth
			helperText={hasError ? errors[config.name] : ""}
			onBlur={onBlur}
			onChange={onChange}
			{...config}
		/>
	);
};
