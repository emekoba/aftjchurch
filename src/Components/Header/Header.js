import React from "react";
import "./Header.css";
import logo from "../../Resources/logo/logo.png";
import Button from "../Button/Button";
import searchIcon from "../../Resources/Icons/search.png";
import cartIcon from "../../Resources/Icons/cart.png";
import menu from "../../Resources/Icons/menu.png";

function Header() {
	return (
		<>
			<div className="header">
				<Button goto="">
					<img id="logo" alt="logo" src={logo} />
				</Button>

				<div id="header_action_bar">
					<Button goto="">Home</Button>
					<Button goto="aboutPage">About</Button>
					<Button goto="serviceTimes">Service Times</Button>
					<Button goto="events">Events</Button>
					<Button goto="store">Store</Button>
					<Button background>Give</Button>

					<Button>
						<img
							alt="search"
							src={searchIcon}
							style={{ height: "20px", width: "20px" }}
						/>
					</Button>

					<Button>
						<img
							alt="cart"
							src={cartIcon}
							style={{ height: "20px", width: "20px" }}
						/>
					</Button>

					<button id="header_bar_menu">
						<img
							alt="menu"
							src={menu}
							style={{ height: "20px", width: "20px" }}
						/>
					</button>
				</div>
			</div>

			<div id="header_bottom" style={{ borderBottom: "none" }}>
				<div style={{ display: "flex", alignItems: "center" }}>
					<div style={{ marginRight: "30px" }}>Watch Online</div>
					<Button>Sermons</Button>
					<div style={{ marginRight: 20 }} />
					<Button>Connect</Button>
				</div>

				<div
					style={{ marginRight: "30px", display: "flex", alignItems: "center" }}
				>
					<Button>Sign In</Button>
					<div style={{ marginRight: 10 }} />
					<Button>Log In</Button>
				</div>
			</div>

			<div id="header_bottom_type2">
				<Button goto="">Home</Button>
				<Button goto="aboutPage">About</Button>
				<Button goto="serviceTimes">Service Times</Button>
				<Button goto="events">Events</Button>
				<Button goto="store">Store</Button>
				<Button background>Give</Button>
			</div>
		</>
	);
}

export default Header;
