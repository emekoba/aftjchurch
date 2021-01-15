import React, { useEffect } from "react";
import { useTimer } from "react-timer-hook";
import Button from "../Button/Button";
import "./Upcoming.css";

function Upcoming() {
	const time = new Date();
	time.setSeconds(time.getSeconds() + 600);

	const { seconds, minutes, hours, days, restart } = useTimer({ time });

	useEffect(() => {
		restart();
	}, []);

	return (
		<div id="upcoming_event">
			<div id="u_e_upper_div">
				<div id="u_e_h1">Next Upcoming Event</div>
				<div id="u_e_h2">Sunday</div>
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
	);
}

export default Upcoming;
