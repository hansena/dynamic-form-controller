import React from "react";
import ReactDOM from "react-dom";
import FormInstance from "./formInstance/FormInstance";

import "./styles.css";

function App() {
	return (
		<div className="App">
			<FormInstance />
		</div>
	);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
