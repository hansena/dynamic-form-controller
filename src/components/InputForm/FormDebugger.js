import React from "react";
import { FormikConsumer } from "formik";
import SyntaxHighlighter from "react-syntax-highlighter";

export const FormDebugger = () => (
  <div
    style={{
      margin: "3rem 0",
      borderRadius: 4,
      background: "#f6f8fa",

      boxShadow: "0 0 1px  #eee inset"
    }}
  >
    <div
      style={{
        textTransform: "uppercase",
        fontSize: 11,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        fontWeight: 500,
        padding: ".5rem",
        background: "#555",
        color: "#fff",
        letterSpacing: "1px"
      }}
    >
      Formik State
    </div>
    <FormikConsumer>
      {({ validationSchema, validate, onSubmit, ...rest }) => (
        <SyntaxHighlighter customStyle={{ textAlign: "left" }} language="json">
          {JSON.stringify(rest, null, 2)}
        </SyntaxHighlighter>
      )}
    </FormikConsumer>
  </div>
);
