import React from "react";
import Button from "../Button/Button";
import "./Footer.css";
import facebook from "../../Resources/Icons/facebook.png";
import instagram from "../../Resources/Icons/instagram.png";
import twitter from "../../Resources/Icons/twitter.png";
import google from "../../Resources/Icons/google.png";

function Footer() {
	return (
		<div className="footer">
			<div className="footer_row1">
				<div>
					<h3>Quick Links</h3>
					<Button type="footer">My Account</Button>
					<Button type="footer">Give</Button>
					<Button type="footer">About</Button>
					<Button type="footer">Services</Button>
					<Button type="footer">Events</Button>
					<Button type="footer">Store</Button>
				</div>

				<div>
					<h3>Connect</h3>
					<Button type="footer">Watch</Button>
					<Button type="footer">Give</Button>
					<Button type="footer">Connect</Button>
					<Button type="footer">Sermon</Button>
					<Button type="footer">Church Experience</Button>
					<Button type="footer">Location/Directions</Button>
					<Button type="footer">Times/Speaking Schedules</Button>
				</div>

				<div>
					<h3>More</h3>
					<Button type="footer">New Here</Button>
					<Button type="footer">History</Button>
					<Button type="footer">Downloads</Button>
					<Button type="footer">Resources</Button>
					<Button type="footer">New Life In Christ</Button>
					<Button type="footer">Privacy</Button>
					<Button type="footer">Terms of Service</Button>
				</div>

				<div id="contact">
					<h3>Contact</h3>
					<div>
						3000 Macedonian Road, Power Springs, Atlanta, United States of
						America
					</div>
					<div>
						<h3>Email:</h3>info@aftjdigital.com
					</div>
					<div>
						<h3>Phone:</h3>+1 2531546077
					</div>
					<div>
						<h3>Follow Us:</h3>
						<div>
							<Button type="icon">
								<img
									alt="search"
									src={facebook}
									style={{ height: "20px", width: "20px" }}
								/>
							</Button>

							<Button type="icon">
								<img
									alt="search"
									src={instagram}
									style={{ height: "20px", width: "20px" }}
								/>
							</Button>

							<Button type="icon">
								<img
									alt="search"
									src={twitter}
									style={{ height: "20px", width: "20px" }}
								/>
							</Button>

							<Button type="icon">
								<img
									alt="search"
									src={google}
									style={{ height: "20px", width: "20px" }}
								/>
							</Button>
						</div>
					</div>
				</div>
			</div>

			<div className="footer_row2">
				@Copyright 2020. AFTJ Digital. All Rights Reserved
			</div>
		</div>
	);
}

export default Footer;
