import React from "react";
import "./Button.css";

function Button(props) {
	const { children, onClick } = props;

	return (
		<button id="button" onClick={onClick}>
			{children}
		</button>
	);
}

export default Button;