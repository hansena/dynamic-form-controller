import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import * as Yup from "yup";

export const formShape = {
  collection: [
    { id: "name", name: "name", label: "Name", Component: TextField },
    { id: "email", name: "email", label: "Email", Component: TextField },
    {
      id: "password",
      name: "password",
      label: "Password",
      type: "Password",
      Component: TextField
    },
    {
      id: "confirmPassword",
      name: "confirmPassword",
      label: "Confirm Password",
      type: "Password",
      Component: TextField
    }
  ],
  actions: [
    {
      type: "submit",
      variant: "contained",
      color: "primary",
      label: "Submit",
      Component: Button
    }
  ]
};

export const validationSchema = Yup.object({
  name: Yup.string("Enter a name").required("Name is required"),
  email: Yup.string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string("")
    .min(8, "Password must contain at least 8 characters")
    .required("Enter your password"),
  confirmPassword: Yup.string("Enter your password")
    .required("Confirm your password")
    .oneOf([Yup.ref("password")], "Password does not match")
});
