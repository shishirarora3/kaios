import React from 'react';
import HomePageA from './HomePageA/HomePageA';
import HomePageB from './HomePageB/HomePageB';
import HomePageC from './HomePageC/HomePageC';
import InputPreferenceType from './InputPreferences/InputPreferenceType'
import InputPreferenceVoice from './InputPreferences/InputPreferenceVoice'
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
				
				<Route exact path="/MessageOptions/:theme/:color/:type" render={routeProps => (<MessageOptionsScreen {...routeProps}/>)}/>
				<Route exact path="/InputPreferenceType" render={routeProps => (<InputPreferenceType {...routeProps}/>)}/>
				<Route exact path="/InputPreferenceVoice" render={routeProps => (<InputPreferenceVoice {...routeProps}/>)}/>
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
				<HyperLinkListItem linkTo="/MessageOptions/light/monochrome/default" primary="Message Options Theme 01"></HyperLinkListItem>
				<HyperLinkListItem linkTo="/MessageOptions/white/monochrome/default" primary="Message Options Theme 02"></HyperLinkListItem>
				<HyperLinkListItem linkTo="/MessageOptions/dark/grey/default" primary="Message Options Theme 03"></HyperLinkListItem>
				<HyperLinkListItem linkTo="/MessageOptions/white/monochrome/default" primary="Message Options Colors 01"></HyperLinkListItem>
				<HyperLinkListItem linkTo="/MessageOptions/white/brand/default" primary="Message Options Colors 02"></HyperLinkListItem>
				<HyperLinkListItem linkTo="/MessageOptions/white/lightblue/default" primary="Message Options Colors 03"></HyperLinkListItem>
				<HyperLinkListItem linkTo="/MessageOptions/white/monochrome/typeramp" primary="Message Options Typeramp"></HyperLinkListItem>
				<HyperLinkListItem linkTo="/InputPreferenceType" primary="Type Input"></HyperLinkListItem>
				<HyperLinkListItem linkTo="/InputPreferenceVoice" primary="Voice Input"></HyperLinkListItem>
			</NavListView>
		</div>
	)
}


const MessageOptionsScreen = (props) => {
	const validThemes = ['white', 'dark', 'light'];
	const validColors = ['lightblue', 'monochrome', 'brand','grey'];
	const validTypes = ['default','typeramp']
	const { theme } = useParams();
	const { color } = useParams();
	const {type}=useParams();
	return (validThemes.includes(theme) && validColors.includes(color)&&validTypes.includes(type)) ?
		<MessageOptions history={props.history} theme={theme} color={color} type={type}></MessageOptions> :
		<Home/>
}

export default App ;