import { useEffect } from "react";
import { useTimer } from "react-timer-hook";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home";

function App() {
	const time = new Date();
	time.setSeconds(time.getSeconds() + 600);

	const {
		seconds,
		minutes,
		hours,
		days,
		isRunning,
		start,
		pause,
		resume,
		restart,
	} = useTimer({ time });

	useEffect(() => {
		start();
	}, [start]);

	return (
		<div className="App">
			<Header />

			<Home />

			<div style={{ height: 3000 }}></div>
			<Footer />
		</div>
	);
}

export default App;
