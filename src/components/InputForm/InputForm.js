import React, { Component } from "react";
import { Formik } from "formik";
import { FormPresentation } from "./FormPresentation";
import Paper from "@material-ui/core/Paper";
import { styles } from "../../formInstance/InputForm.css.js";
import withStyles from "@material-ui/core/styles/withStyles";

class InputForm extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	handleSubmission = (values) => (e) => {
		e.preventDefault();
		console.log(values);
	};

	render() {
		const { classes, initialValues, shape, validationSchema } = this.props;
		return (
			<div className={classes.container}>
				<Paper elevation={1} className={classes.paper}>
					<h1>Demo Form</h1>
					<Formik
						onSubmit={this.onSubmit}
						render={(props) => (
							<FormPresentation {...props} classes={classes} debug handleSubmit={this.handleSubmission} initialValues={initialValues} shape={shape} />
						)}
						validationSchema={validationSchema}
					/>
				</Paper>
			</div>
		);
	}
}

export default withStyles(styles, { index: 1 })(InputForm);
