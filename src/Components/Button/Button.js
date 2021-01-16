import React from "react";
import "./Button.css";

function Button(props) {
	const { style, type, background, children, onClick } = props;

	return type === undefined ? (
		<button style={style} id="button" onClick={onClick}>
			{children}
		</button>
	) : (
		<>
			{type === "footer" && (
				<button
					className={`button ${background && "btn_background"}`}
					id="footer_btn"
				>
					{children}
				</button>
			)}

			{type === "event" && (
				<button style={style} id="eventbutton" onClick={onClick}>
					{children}
				</button>
			)}
		</>
	);
}

export default Button;
