import React from "react";
import TextField from "@material-ui/core/TextField";

export const Textbox = ({ classes, ...rest }) => ({
  errors,
  onChange,
  touched
}) => {
  return (
    <TextField
      classes={classes}
      error={touched[rest.name] && Boolean(errors[rest.name])}
      fullWidth
      helperText={touched[rest.name] ? errors[rest.name] : ""}
      onChange={onChange}
      {...rest}
    />
  );
};
