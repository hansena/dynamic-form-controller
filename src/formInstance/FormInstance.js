import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import { styles } from "./InputForm.css.js";
import withStyles from "@material-ui/core/styles/withStyles";
import { InputForm } from "../components/InputForm/InputForm";
import { initialValues, shape, validationSchema } from "./InputForm.configuration.js";

class FormInstance extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	handleSubmission = (values) => (e) => {
		e.preventDefault();
		console.log(values);
	};

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.container}>
				<Paper elevation={1} className={classes.paper}>
					<h1>Demo Form</h1>
					<InputForm
						classes={classes}
						handleSubmission={this.handleSubmission}
						initialValues={initialValues}
						shape={shape}
						validationSchema={validationSchema}
					/>
				</Paper>
			</div>
		);
	}
}

export default withStyles(styles, { index: 1 })(FormInstance);
