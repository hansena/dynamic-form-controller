import React from "react";
import { Form } from "formik";
import { Debug } from "../formikDebugger/debugger";

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
        const { Component, ...rest } = control;
        return (
          <Component
            {...rest}
            error={touched[control.name] && Boolean(errors[control.name])}
            fullWidth
            helperText={touched[control.name] ? errors[control.name] : ""}
            key={i}
            onChange={changeHandler}
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
      {debug && <Debug />}
    </Form>
  );
};
