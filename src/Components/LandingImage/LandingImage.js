import React, { useEffect } from "react";
import { useStopwatch, useTimer } from "react-timer-hook";
import Button from "../Button/Button";
import "./LandingImage.css";

function LandingImage() {
	const time = new Date();

	time.setSeconds(time.getSeconds() + 3000);

	const { seconds, minutes, hours, days, start } = useStopwatch({
		autoStart: true,
	});

	// const [time, settime] = useState({
	// 	seconds: 0,
	// 	minutes: 0,
	// 	hours: 0,
	// 	days: 0,
	// });

	// useEffect(() => {
	// 	start();
	// }, []);

	return (
		<div id="landingimage">
			<div id="landing_image_title">
				<div id="l_img_h1">WELCOME TO THE CHURCH OF GOD</div>
				<div id="l_img_h2">...where god lives</div>
			</div>

			<div id="upcoming">
				<div id="u_e_upper_div">
					<div id="u_e_h1">Next Upcoming Event</div>
					<div id="u_e_h2">Sunday Service</div>
				</div>

				<div id="timer">
					<div id="days">
						<div>{days}</div>
						<div>Days</div>
					</div>

					<div id="hours">
						<div>{hours}</div>
						<div>Hours</div>
					</div>

					<div id="minutes">
						<div>{minutes}</div>
						<div>Minutes</div>
					</div>

					<div id="seconds">
						<div>{seconds}</div>
						<div>Seconds</div>
					</div>
				</div>

				<Button type="event">Service Registration</Button>
			</div>
		</div>
	);
}

export default LandingImage;
