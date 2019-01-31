import React from "react";
import InputForm from "../components/InputForm/InputForm";
import { initialValues, shape, validationSchema } from "./InputForm.configuration.js";

export const FormInstance = (props) => <InputForm initialValues={initialValues} shape={shape} validationSchema={validationSchema} />;
