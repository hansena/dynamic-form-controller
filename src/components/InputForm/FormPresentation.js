import React from "react";
import { Form } from "formik";
import { FormDebugger } from "./FormDebugger";

export const FormPresentation = props => {
  const {
    classes,
    debug,
    errors,
    handleChange,
    handleSubmit,
    isSubmitting,
    shape,
    setFieldTouched,
    touched,
    values
  } = props;

  const changeHandler = e => {
    e.preventDefault();
    handleChange(e);
    setFieldTouched(e.target.name, true, false);
  };

  return (
    <Form onSubmit={handleSubmit(values)}>
      {/*Render Data Collection Controls*/}
      {shape.collection.map((control, i) => {
        const { Component } = control;
        return (
          <Component
            errors={errors}
            fullWidth
            key={i}
            onChange={changeHandler}
            touched={touched}
          />
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
      {/*Conditionally Render Form Debugger*/}
      {debug && <FormDebugger />}
    </Form>
  );
};
