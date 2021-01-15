import React from "react";
import Upcoming from "../Upcoming/Upcoming";
import "./LandingImage.css";
import homeImg from "../../Resources/Background/landing1.jpg";
import storeImg from "../../Resources/Background/store.jpg";
import serviceImg from "../../Resources/Background/servicetimes.jpg";

function LandingImage({ route }) {
	function getImage() {
		switch (route) {
			case "home":
			case "about":
				return homeImg;

			case "sermon":
			case "store":
				return storeImg;

			case "serviceTimes":
				return serviceImg;
			default:
				break;
		}
	}
	return (
		<div
			id="landing_image"
			style={{
				backgroundImage: `url(${getImage()})`,
			}}
		>
			<div id="landing_image_title">
				{route === "home" && (
					<>
						<div id="l_img_h1">GOD IS GREAT</div>
						<div id="l_img_h2">...always trust in god</div>
					</>
				)}

				{route === "about" && (
					<>
						<div id="l_img_h1">ABOUT PAGE</div>
						<div id="l_img_h2">
							...Get to know about our Church and our Beliefs
						</div>
					</>
				)}

				{route === "serviceTimes" && (
					<>
						<div id="l_img_h1">SERVICE TIMES</div>
						<div id="l_img_h2">
							...Get to know about our Church and our Beliefs
						</div>
					</>
				)}

				{route === "sermons" && (
					<>
						<div id="l_img_h1">SERVICE TIMES</div>
						<div id="l_img_h2">
							...Get to know about our Church and our Beliefs
						</div>
					</>
				)}

				{route === "store" && (
					<>
						<div id="l_img_h1">STORE</div>
					</>
				)}
			</div>

			<Upcoming />
		</div>
	);
}

export default LandingImage;
