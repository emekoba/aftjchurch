import { useEffect } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { useTimer } from "react-timer-hook";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import About from "./Routes/About/About";
import Home from "./Routes/Home/Home";
import ServiceTimes from "./Routes/ServiceTimes/ServiceTimes";
import Login from "./Routes/Login/Login";
import SignUp from "./Routes/SignUp/SignUp";
import Connect from "./Routes/Connect/Connect";
import Give from "./Routes/Give/Give";
import ShoppingCart from "./Routes/ShoppingCart/ShoppingCart";
import Events from "./Routes/Events/Events";
import Sermons from "./Routes/Sermons/Sermons";
import Store from "./Routes/Store/Store";

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
			<Router>
				<Header />
				<Route
					path="/"
					exact
					component={Home}
					render={() => (
						<Home
							seconds={seconds}
							minutes={minutes}
							hours={hours}
							days={days}
						/>
					)}
				/>
				<Route path="/aboutPage" exact component={About} />
				<Route path="/serviceTimes" exact component={ServiceTimes} />
				<Route path="/eventsPage" exact component={Events} />
				<Route path="/store" exact component={Store} />
				<Route path="/give" exact component={Give} />
				<Route path="/shoppingCart" exact component={ShoppingCart} />
				<Route path="/sermons" exact component={Sermons} />
				<Route path="/connect" exact component={Connect} />
				<Route path="/signUp" exact component={SignUp} />
				<Route path="/login" exact component={Login} />
				<Footer />
			</Router>
		</div>
	);
}

export default App;
