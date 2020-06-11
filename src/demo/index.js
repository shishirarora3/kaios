import React from 'react';
import HomePageA from './HomePageA/HomePageA';
import HomePageB from './HomePageB/HomePageB';
import HomePageC from './HomePageC/HomePageC';
import MessageOptions from './messages/MessageOptions';
import OutlookMessages from './OutlookMessages/OutlookMessages';
import {BrowserRouter as Router, Switch, Route, Link, useParams} from "react-router-dom";

const ErrorMessage = 'Sorry, Incorrect URL';

const App=()=>{
	return(
		<Router>
			<Switch>
				<Route exact path="/OutlookMessages">
					<OutlookMessages color="monochrome"/>
				</Route>
				<Route exact path="/HomePageA" component={HomePageA}/>
				<Route exact path="/HomePageB" component={HomePageB}/>
				<Route exact path="/HomePageC" component={HomePageC}/>
				<Route exact path='/MessageOptions' component={MessageOptionsScreen}/>
				<Route exact path="/MessageOptions/:theme/:color" children={<MessageOptionsScreen/>} />
				<Route exact path="/" component={Home}/>
				<Route component={Home}/>
			</Switch>
		</Router>
	)
}
function Home(){
	return(
		<div>
			<h2>Concept Validation Screens</h2>
			<ul>
				<li>
				<Link to="/HomePageA">HomeA</Link>
				</li>
				<li>
				<Link to="/HomePageB">HomeB</Link>
				</li>
				<li>
				<Link to="/HomePageC">HomeC</Link>
				</li>
				<li>
					<Link to="/MessageOptions/light/grey">Message Options theme Light</Link>
				</li>
				<li>
					<Link to="/MessageOptions/white/grey">Message Options theme white</Link>
				</li>
				<li>
					<Link to="/MessageOptions/dark/grey">Message Options theme dark</Link>
				</li>
				<li>
					<Link to="/MessageOptions/white/monochrome">Message Options theme monochrome</Link>
				</li>
				<li>
					<Link to="/MessageOptions/white/brand">Message Options theme brand</Link>
				</li>
				<li>
					<Link to="/MessageOptions/white/lightblue">Message Options theme lightblue</Link>
				</li>
			</ul>
		</div>
	)
}

const NoMatch = () => {
	return(
		<div>
			<p>{ErrorMessage}</p>
		</div>
	)
}

const MessageOptionsScreen = () => {
	const validThemes = ['white', 'dark', 'light'];
	const validColors = ['lightblue', 'monochrome', 'brand','grey'];

	const { theme } = useParams();
	const { color } = useParams();

	console.log(theme);
	console.log(color);

	const ScreenTheme = theme ? theme.toLowerCase() : validThemes[0];
	const ScreenColor = color ? color.toLowerCase() : validColors[0];

	return (validThemes.includes(ScreenTheme) && validColors.includes(ScreenColor)) ?
		<MessageOptions theme={ScreenTheme} color={ScreenColor}></MessageOptions> :
		<NoMatch/>
}

export default App ;
