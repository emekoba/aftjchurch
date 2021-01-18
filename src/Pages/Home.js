import React from "react";
import Button from "../Components/Button/Button";
import LandingImage from "../Components/LandingImage/LandingImage";
import "./Home.css";
import HomeRow from "./HomeRow";
import newHere from "../Resources/Images/newhere.png";
import missions from "../Resources/Images/missionsandbeliefs.png";
import ministeries from "../Resources/Images/ourministeries.png";
import serveChurch from "../Resources/Images/servethechurch.png";
import serveCity from "../Resources/Images/servethecity.png";
import serveWorld from "../Resources/Images/servetheworld.png";
import recharge from "../Resources/Images/rechargeconference.png";
import couples from "../Resources/Images/couplesconference.png";
import foster from "../Resources/Images/fosterandadoptiongroup.png";
// import video1 from "../Resources/Videos/video1.mp4";
import needPrayer from "../Resources/Images/needprayer.png";
import shareThoughts from "../Resources/Images/shareThoughts.png";
import miracleCover from "../Resources/Images/miracleofsalvation.png";
import salvation1 from "../Resources/Images/miracleofsalvationsmallerimage1.png";
import salvation2 from "../Resources/Images/miracleofsalvationsmallerimage2.png";
import salvation3 from "../Resources/Images/miracleofsalvationsmallerimage3.png";
import salvation4 from "../Resources/Images/miracleofsalvationsmallerimage4.png";
import connected from "../Resources/Images/stayconnected.png";
import gplay from "../Resources/Images/gplay.png";
import aplay from "../Resources/Images/aplay.png";
import map from "../Resources/Images/googlemaps.png";

function Home() {
	return (
		<div id="home">
			<LandingImage />

			<HomeRow
				image1={newHere}
				image2={missions}
				image3={ministeries}
				text1={
					<>
						<div className="h_r_h1">Are You New Here?</div>

						<div className="h_r_h2">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer
						</div>
					</>
				}
				text2={
					<>
						<div className="h_r_h1">Mission & Beliefs</div>
						<div className="h_r_h2">Sunday Service</div>
					</>
				}
				text3={
					<>
						<div className="h_r_h1">Our Ministeries</div>
						<div className="h_r_h2">Sunday Service</div>
					</>
				}
			/>

			<div id="home_row3">
				<div>
					<h1>We are a Church that believes in Jesus & loves God and People</h1>
					<h3>
						AFTJ Church is a church founded by AFTJ Ministries and based in
						Dallas, Texas. If you are not currently planted in a local church
						and are looking to be part of a grace-based community of believers,
						join us online for a time of worship, Communion and a recent message
						from Pastors David and Tamara every Sunday.
					</h3>

					<Button style={{ width: 120, marginBottom: 30 }}>MORE INFO</Button>
				</div>

				<div>
					<div id="home_row3_img" />
					<div id="pastors_names">David and Tamara Simpson</div>
					<div id="pastors_roles">senior Pastors AFTJ Church</div>
				</div>
			</div>

			{/* <div id="home_row4"></div> */}

			<h1>Our Mission</h1>
			<HomeRow
				bottomText
				image1={serveChurch}
				image2={serveCity}
				image3={serveWorld}
				text1={
					<>
						<h3>Serve the Church</h3>
						<h5>
							If we’re helping other Christians with the eternal in view, we’re
							serving the Church. If we do it with joy from the power of the
							Spirit, God is pleased, not because we need to earn points with
							Him, but because helping others is a natural outpouring of the
							love and power He has poured into us, and He loves to see the
							fruit of His work.
						</h5>
						<h5>LEARN MORE</h5>
					</>
				}
				text2={
					<>
						<h3>Serve the City</h3>
						<h5>
							see how volunteers are showing respect to the homeless this
							Christmas season. We also voyage to Brussels, Belgium and Nairobi,
							Kenya to explore how service is giving self-respect to people in
							need.
						</h5>
						<h5>LEARN MORE</h5>
					</>
				}
				text3={
					<>
						<h3>Serve the World</h3>
						<h5>
							We help, connect, and mobilize people, businesses & churches to
							provide hope & help to single moms, struggling families, battered
							women, orphan/foster children, the elderly & more in real,
							practical & tangible ways.
						</h5>
						<h5>LEARN MORE</h5>
					</>
				}
			/>

			{/* <div id="home_row5">
				<div>sfwr</div>

				<div className="video_container">
					<video
						width="250"
						autoPlay=""
						loop=""
						muted=""
						data-reactid=".0.1.0.0"
					>
						<source type="video/mp4" src={video1} />
					</video>
				</div>
			</div> */}

			<h1>Upcoming Events</h1>
			<HomeRow
				bottomText
				image1={recharge}
				image2={couples}
				image3={foster}
				text1={
					<>
						<h3>THU, JUL 15TH</h3>
						<h2>Recharge Conference</h2>
					</>
				}
				text2={
					<>
						<h3>THU, JUL 21TH</h3>
						<h2>Couples Conference</h2>
					</>
				}
				text3={
					<>
						<h3>THU, JUL 31TH</h3>
						<h2>Foster And Adoption Group</h2>
					</>
				}
			/>

			<div id="tetraplane">
				<img alt="" src={needPrayer} />

				<div>
					<h3>Need Prayer?</h3>
					<h3>We Will Pray For You.</h3>

					<h4>
						Need prayer? We would love to pray along with you. You can send us a
						message for prayer.
					</h4>

					<Button type="tetraplane">Send Us a Message</Button>
				</div>

				<img className="introduceOnDownScale" alt="" src={shareThoughts} />

				<div>
					<h3>Want to Share Thoughts?</h3>
					<h3>Join Our Chat Group!</h3>

					<h4>
						Do you have something that is troubling you and you want to share?
						Share your thoughts on our audio chat group.
					</h4>

					<Button type="tetraplane">Send Us a Message</Button>
				</div>

				<img className="dismissOnDownScale" alt="" src={shareThoughts} />
			</div>

			<div id="home_row7">
				<img src={miracleCover} alt="miracle cover" />

				<div id="home_row7_col2">
					<div id="home_row7_col2_row1">
						<h2>The miracle Of Salvation</h2>
						<div>Linda Adama, 23 years</div>

						<h3>
							As you face 2020, maybe you are discouraged that you didn’t see
							the full harvest of what you were believing God for last year.
							Maybe you are filled with uncertainty and anxiety because of
							certain things that have happened. Take heart, my friend. Our Lord
							Jesus wants you to know you are not facing this year alone. He is
							with you and even now wants to strengthen you with a fresh word
							for the year ahead.
						</h3>
					</div>

					<div id="home_row7_img_list">
						<img src={salvation1} alt="miracle cover" />
						<img src={salvation2} alt="miracle cover" />
						<img src={salvation3} alt="miracle cover" />
						<img src={salvation4} alt="miracle cover" />
					</div>
				</div>
			</div>

			<div id="home_row8">
				<div id="home_row8_row1">
					<h2>CONNECT WITH US ON OUR MOBILE APP</h2>

					<h3>GET OUR CHURCH MOBILE APP:</h3>

					<div id="home_row8_btns">
						<img src={gplay} alt="" />
						<img src={aplay} alt="" />
					</div>
				</div>

				<div
					id="home_row8_row2"
					style={{ backgroundImage: `url(${connected})` }}
				>
					<h1>Stay Connected</h1>
					<h4>
						...Subscribe to our weekly newsletter to stay up to date with every
						happenings
					</h4>

					<div id="home_row8_inputbox">
						<input placeholder="Enter Your Email" />

						<Button type="subscribe">Subscribe</Button>
					</div>
				</div>
			</div>

			<div id="home_row9">
				<div id="home_row9_col1">
					<h1>Send Us a Message</h1>

					<div id="home_row9_col1_row2">
						<input placeholder="your name" />
						<input placeholder="your email address" />
					</div>

					<div id="home_row9_col1_row3">
						<textarea placeholder="your message" />
					</div>

					<div id="home_row9_col1_row4">
						<input type="checkbox" />

						<div style={{ marginLeft: 10 }}>
							I agree that my submitted data is been collected and stored.
						</div>
					</div>

					<Button style={{ marginTop: 50 }} type="tetraplane">
						Send Message
					</Button>
				</div>

				<img src={map} alt="map" />
			</div>
		</div>
	);
}

export default Home;
