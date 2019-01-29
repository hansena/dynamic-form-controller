import React, { Component } from "react";
import { Formik } from "formik";
import withStyles from "@material-ui/core/styles/withStyles";
import { FormPresentation } from "./FormPresentation";
import Paper from "@material-ui/core/Paper";
import { styles } from "./FormPresentation.css.js";

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
    const { classes, shape, validationSchema } = this.props;
    return (
      <React.Fragment>
        <div className={classes.container}>
          <Paper elevation={1} className={classes.paper}>
            <h1>Demo Form</h1>
            <Formik
              onSubmit={this.onSubmit}
              render={props => (
                <FormPresentation
                  {...props}
                  classes={classes}
                  debug
                  handleSubmit={this.handleSubmission}
                  shape={shape}
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

export default withStyles(styles, { index: 1 })(InputForm);
