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

			{type === "tetraplane" && (
				<button style={style} id="tetrabutton" onClick={onClick}>
					{children}
				</button>
			)}

			{type === "subscribe" && (
				<button
					style={{ backgroundColor: "#f2f2f8" }}
					id="subscribe_btn"
					onClick={onClick}
				>
					{children}
				</button>
			)}

			{type === "icon" && (
				<button style={{ minWidth: 50 }} id="icon_btn" onClick={onClick}>
					{children}
				</button>
			)}
		</>
	);
}

export default Button;
