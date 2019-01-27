import React from "react";
import { Form } from "formik";
import { Debug } from "./debugger";

// export class DemoForm extends React.Component {
export const DemoForm = props => {
  // changeHandler = ({ setFieldTouched, setFieldValue, name }) => e => {
  //   setFieldValue(name, e.target.value);
  //   setFieldTouched(name, true, false);
  // };
  const {
    classes,
    debug,
    handleChange,
    handleSubmit,
    isSubmitting,
    shape,
    setFieldTouched,
    setFieldValue,
    values
  } = props;

  const changeHandler = (name, e) => {
    e.preventDefault();
    handleChange(e);
    setFieldTouched(name, true, false);
  };

  //render() {

  // console.log(this.props);
  return (
    <Form onSubmit={handleSubmit(values)}>
      {/*Render Data Collection Controls*/}
      {shape.collection.map((control, i) => {
        const { Component, ...rest } = control;
        return (
          <Component {...rest} onChange={changeHandler} fullWidth key={i} />
        );
      })}
      {/*Render Action Controls*/}
      {shape.actions.map((control, i) => {
        const { Component, label, ...rest } = control;
        return (
          <Component
            {...rest}
            disabled={isSubmitting}
            fullWidth
            key={i}
            className={classes.button}
          >
            {label}
          </Component>
        );
      })}
      {debug && <Debug />}
    </Form>
  );
};
