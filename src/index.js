import React from "react";
import ReactDOM from "react-dom";
import InputForm from "./InputForm/InputForm";
import { shape, validationSchema } from "./configuration.js";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <InputForm shape={shape} validationSchema={validationSchema} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
