import React from "react";
import Button from "../Components/Button/Button";
import LandingImage from "../Components/LandingImage/LandingImage";
import "./Home.css";

function Home() {
	return (
		<div id="home">
			<LandingImage />

			<div id="home_row2">
				<div>
					<div className="h_r_h1">Are You New Here?</div>

					<div className="h_r_h2">
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer
					</div>
				</div>

				<div>
					<div className="h_r_h1">Mission & Beliefs</div>
					<div className="h_r_h2">Sunday Service</div>
				</div>

				<div>
					<div className="h_r_h1">Our Ministeries</div>
					<div className="h_r_h2">Sunday Service</div>
				</div>
			</div>

			<div id="home_row3">
				<div>
					<h1>We are a Church that believes in Jesus & loves God and People</h1>
					<h3>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer
					</h3>

					<Button style={{ width: 120, marginBottom: 30 }}>MORE INFO</Button>
				</div>

				<div>
					<div id="home_row3_img"></div>
					<h4>David and Tamara Simposon</h4>
					<div style={{ fontSize: 15 }}>senior Pastors AFTJ Church</div>
				</div>
			</div>

			<div id="home_row4"></div>

			<div style={{ height: 1000 }}></div>
		</div>
	);
}

export default Home;
