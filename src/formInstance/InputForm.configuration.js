import Button from "@material-ui/core/Button";
import * as Yup from "yup";
import Autocomplete from "../components/autocomplete";
import { Textbox } from "../components/textbox";

export const shape = {
	collection: [
		{ Component: Textbox({ id: "name", name: "name", label: "Name" }) },
		{ Component: Textbox({ id: "email", name: "email", label: "Email" }) },
		{ Component: Textbox({ id: "password", name: "password", label: "Password", type: "Password" }) },
		{ Component: Textbox({ id: "confirmPassword", name: "confirmPassword", label: "Confirm Password", type: "Password" }) },
		// {
		//   id: "age",
		//   name: "age",
		//   label: "Age",
		//   Component: Autocomplete,
		//   suggestions: [
		//     { label: "Infant" },
		//     { label: "Toddler" },
		//     { label: "Child" },
		//     { label: "Teenager" }
		//   ]
		// }
	],
	actions: [
		{
			type: "submit",
			variant: "contained",
			color: "primary",
			label: "Submit",
			Component: Button,
		},
	],
};

export const initialValues = {
	name: "test",
	email: "email",
	password: "123",
	confirmPassword: "123",
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
		.oneOf([Yup.ref("password")], "Password does not match"),
});
