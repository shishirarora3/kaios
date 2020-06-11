import React from 'react';
import HomePageA from './HomePageA/HomePageA';
import HomePageB from './HomePageB/HomePageB';
import HomePageC from './HomePageC/HomePageC';
import MessageOptions from './messages/MessageOptions';
import {BrowserRouter as Router, Switch, Route, useParams} from "react-router-dom";
import HyperLinkListItem from './NavPage/NavPageComponents/HyperLinkListItem/HyperLinkListItem';
import NavListView from './NavPage/NavPageComponents/NavListView/NavListView';
import Header from './NavPage/NavPageComponents/Header/Header';
import './NavPage/NavPage.scss';

const App=()=>{
	return(
		<Router>
			<Switch>
				{
				/*
				<Route exact path="/HomePageA" component={HomePageA}/>
				<Route exact path='/MessageOptions' component={MessageOptionsScreen}/>
				*/
				}
				<Route exact path="/HomePageA" render={routeProps => (<HomePageA {...routeProps}/>)}/>
				<Route exact path="/HomePageB" render={routeProps => (<HomePageB {...routeProps}/>)}/>
				<Route exact path="/HomePageC" render={routeProps => (<HomePageC {...routeProps}/>)}/>
				
				<Route exact path="/MessageOptions/:theme/:color" render={routeProps => (<MessageOptionsScreen {...routeProps}/>)}/>
				<Route exact path="/" component={Home}/>
				<Route component={Home}/>
			</Switch>
		</Router>
	)
}

function Home(){
	return(
		<div className={'nav-page-container'}>
			<Header backgroundColor="#F2F2F2" text="Concept Validation Screens"/>
			<NavListView>
				<HyperLinkListItem linkTo="/HomePageA" primary="HomeA"></HyperLinkListItem>
				<HyperLinkListItem linkTo="/HomePageB" primary="HomeB"></HyperLinkListItem>
				<HyperLinkListItem linkTo="/HomePageC" primary="HomeC"></HyperLinkListItem>
				<HyperLinkListItem linkTo="/MessageOptions/light/monochrome" primary="Message Options Theme 01"></HyperLinkListItem>
				<HyperLinkListItem linkTo="/MessageOptions/white/monochrome" primary="Message Options Theme 02"></HyperLinkListItem>
				<HyperLinkListItem linkTo="/MessageOptions/dark/grey" primary="Message Options Theme 03"></HyperLinkListItem>
				<HyperLinkListItem linkTo="/MessageOptions/white/monochrome" primary="Message Options Colors 01"></HyperLinkListItem>
				<HyperLinkListItem linkTo="/MessageOptions/white/brand" primary="Message Options Colors 02"></HyperLinkListItem>
				<HyperLinkListItem linkTo="/MessageOptions/white/lightblue" primary="Message Options Colors 03"></HyperLinkListItem>
			</NavListView>
		</div>
	)
}


const MessageOptionsScreen = (props) => {
	const validThemes = ['white', 'dark', 'light'];
	const validColors = ['lightblue', 'monochrome', 'brand','grey'];

	const { theme } = useParams();
	const { color } = useParams();

	return (validThemes.includes(theme) && validColors.includes(color)) ?
		<MessageOptions history={props.history} theme={theme} color={color}></MessageOptions> :
		<Home/>
}

export default App ;
