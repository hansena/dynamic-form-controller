import React, { Component } from "react";
import { Formik } from "formik";
import withStyles from "@material-ui/core/styles/withStyles";
import { DemoForm } from "./demoForm";
import Paper from "@material-ui/core/Paper";
import { styles } from "./demoForm.css.js";
import { formShape, validationSchema } from "./formShape";

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmission = values => e => {
    e.preventDefault();
    console.log(values);
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <div className={classes.container}>
          <Paper elevation={1} className={classes.paper}>
            <h1>Demo Form</h1>
            <Formik
              onSubmit={this.onSubmit}
              render={props => (
                <DemoForm
                  {...props}
                  classes={classes}
                  debug
                  handleSubmit={this.handleSubmission}
                  shape={formShape}
                />
              )}
              validationSchema={validationSchema}
            />
          </Paper>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(InputForm);
