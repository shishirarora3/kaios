import React from 'react';
import HomepageA from './HomePageA/HomePageA';
//import HomePageB from './HomepageB/HomePageB';
//import HomePageC from './HomepageB/HomePageC';
//import MessageOptions from './messages/homescreen';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Switch,Route,Link,useParams} from "react-router-dom";
const App=()=>{
    return(
        <Router>
            <Switch>
				<Route exact path="/homepagea">
                    <HomepageA/>
                </Route>
                <Route exact path="/homepageb">
                    <h1>HomepageB</h1>
                </Route>
                <Route exact path="/homepagec">
                    <h1>HomepageC</h1>
                </Route>
				<Route exact path='/messageoptions'>
					<MessageOptionsScreen/>
				</Route>
				<Route path="/messageoptions/:theme/:color" children={<MessageOptionsScreen/>} />
                <Route path="/">
                    <Home/>
                </Route>
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
				<Link to="/homepagea">HomeA</Link>
				</li>
				<li>
				<Link to="/homepageb">HomeB</Link>
				</li>
				<li>
				<Link to="/homepagec">HomeC</Link>
				</li>
				<li>
				<Link to="/messageoptions">Message Options</Link>
				</li>
			</ul>
		</div>
    )
}

const MessageOptionsScreen = () => {
	const { theme } = useParams();
	const { color } = useParams();

	console.log(theme);
	console.log(color);

	const ScreenTheme = theme || 'white';
	const ScreenColor = color || 'blue';

	return(
		<MessageOptions theme={ScreenTheme} color={ScreenColor}></MessageOptions>
	)
}

/* dummy message options component */
const MessageOptions = (props) => {
	console.log(props);
	return(
		<div>
			<h1>{`Theme: ${props.theme}`}</h1>
			<h1>{`Color: ${props.color}`}</h1>
		</div>
	)
}

export default App ;

