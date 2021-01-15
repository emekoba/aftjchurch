import React from "react";
import LandingImage from "../../Components/LandingImage/LandingImage";
import "./Home.css";
import home1 from "../../Resources/Background/Home1.png";
import home2 from "../../Resources/Background/Home2.png";
import home3 from "../../Resources/Background/Home3.png";

function Home(props) {
	return (
		<div id="Home">
			<LandingImage route="home" />

			<div id="home_row1">
				<img src={home1} alt="new here?" />
				<img src={home2} alt="our missions and beliefs" />
				<img src={home3} alt="our ministeries" />
			</div>
		</div>
	);
}

export default Home;
