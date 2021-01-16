import React, { useEffect } from "react";
import "./Header.css";
import Button from "../Button/Button";

import logo from "../../Resources/logo/aftjlogo.png";
import seacrhIcon from "../../Resources/Icons/search.png";
import cartIcon from "../../Resources/Icons/cart.png";
import menuIcon from "../../Resources/Icons/menu.png";

function Header() {
	useEffect(() => {
		let doc = document.documentElement;

		let previousScroll = window.scrollY || doc.scrollTop;

		let header = document.getElementById("header");

		let header_bottomside = document.getElementById("header_bottomside");

		window.addEventListener("scroll", () =>
			checkScroll(previousScroll, doc, header, header_bottomside)
		);
	});

	function checkScroll(previousScroll, doc, header, header_bottomside) {
		let currentDirection = 0;
		let previousDirection = 0;
		let currentScroll;

		currentScroll = window.scrollY || doc.scrollTop;

		currentDirection = getCurrentDirection(currentScroll, previousScroll);

		if (currentDirection !== previousDirection) {
			toggleHeader(header, previousDirection, currentDirection, currentScroll);
		}

		if (window.scrollY === 0) {
			header_bottomside.classList.remove("dismissOnNegativeScrollTop");
		} else {
			header_bottomside.classList.add("dismissOnNegativeScrollTop");
		}

		previousScroll = currentScroll;
	}

	function getCurrentDirection(currentScroll, previousScroll) {
		if (currentScroll > previousScroll) {
			return "down";
		} else if (currentScroll < previousScroll) {
			return "up";
		}
	}

	function toggleHeader(
		header,
		previousDirection,
		currentDirection,
		currentScroll
	) {
		if (currentDirection === "down" && currentScroll > 80) {
			header.classList.add("hide");

			previousDirection = currentDirection;
		} else if (currentDirection === "up") {
			header.classList.remove("hide");

			previousDirection = currentDirection;
		}
	}

	function toggleBottomMenu() {
		let bottom_action = document.getElementById("header_bottomside_action");

		if (bottom_action.classList.contains("removeElement")) {
			bottom_action.classList.remove("removeElement");
			bottom_action.classList.add("addElement");
		} else {
			bottom_action.classList.remove("addElement");
			bottom_action.classList.add("removeElement");
		}
	}

	function toggleSearch() {}

	return (
		<div id="header">
			<div id="header_topside">
				<img id="logo" alt="logo" src={logo} />

				<div id="header_action" className="dismissOnDownScale">
					<div id="action_btn" className="btn_effect">
						Home
					</div>

					<div id="action_btn" className="btn_effect">
						About
					</div>

					<div id="action_btn" className="btn_effect">
						Service Times
					</div>

					<div id="action_btn" className="btn_effect">
						Events
					</div>

					<div id="action_btn" className="btn_effect">
						Store
					</div>

					<Button>Give</Button>

					<button onClick={toggleSearch}>
						<img src={seacrhIcon} alt="search" />
					</button>
					<img src={cartIcon} alt="search" />
				</div>

				<button onClick={toggleBottomMenu} id="menu_btn">
					<img src={menuIcon} alt="menu btn" />
				</button>
			</div>

			<div className="dismissOnDownScale">
				<div id="header_bottomside">
					<div>
						<div>Watch Live</div>
						<div className="btn_effect">Sermons</div>
						<div className="btn_effect">Connect</div>
					</div>

					<div>
						<div className="btn_effect">Sign Up</div>

						<div className="btn_effect">login</div>
					</div>
				</div>
			</div>

			<div
				id="header_bottomside_action"
				className="removeElement useSlideAnimation"
			>
				<div id="action_btn" className="btn_effect">
					Home
				</div>

				<div id="action_btn" className="btn_effect">
					About
				</div>

				<div id="action_btn" className="btn_effect">
					Service Times
				</div>

				<div id="action_btn" className="btn_effect">
					Events
				</div>

				<div id="action_btn" className="btn_effect">
					Store
				</div>

				<Button>Give</Button>
			</div>
		</div>
	);
}

export default Header;
