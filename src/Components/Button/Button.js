import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

function Button(props) {
	const { children, type, background, goto } = props;

	const styles = {
		color: "black",
		textDecoration: "none",
	};

	const alt_styles = {
		color: "white",
		textDecoration: "none",
	};

	return type === undefined ? (
		<>
			<button
				className={`button ${background && "btn_background"}`}
				id="header_btn"
			>
				<Link to={`/${goto}`} style={styles}>
					{children}
				</Link>
			</button>
		</>
	) : (
		<>
			{type === "event" && (
				<button className="button event_type">
					<Link to={`/${goto}`} style={alt_styles}>
						{children}
					</Link>
				</button>
			)}

			{type === "footer" && (
				<button
					className={`button ${background && "btn_background"}`}
					id="footer_btn"
				>
					<Link to={`/${goto}`} style={styles}>
						{children}
					</Link>
				</button>
			)}

			{type === "icon" && (
				<button
					className={`button ${background && "btn_background"}`}
					id="icon_btn"
				>
					<Link to={`/${goto}`} style={styles}>
						{children}
					</Link>
				</button>
			)}
		</>
	);
}

export default Button;
