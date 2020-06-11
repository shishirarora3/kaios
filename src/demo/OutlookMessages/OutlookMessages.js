import React from 'react';
import Header from '../messages/theme/components/Header/Header';
import ListView from '../HomePageB/HomePageBViews/ListView/ListView';
import RoundIconListItem from './MessagesComponents/RoundIconListItem/RoundIconListItem';
import person1 from '../HomePageB/HomePageBIcons/person1.png';
import person2 from '../HomePageB/HomePageBIcons/person2.png';
import person3 from '../HomePageB/HomePageBIcons/person3.png';
import icon1 from './Icons/Icon1.png';
//import SoftKey from '../HomePageB/HomePageBComponents/SoftKey/SoftKey';
import {focusColor} from '../messages/theme/colors_and_themes/theme_colors'

export function OutlookMessages(props) {
    const focusText=(props.color==="lightblue")?"black":"white"
	return (
		<div>
			<ListView>
				<RoundIconListItem
					primary="Guddu"
					secondary="See this video ww..."
					iconSrc={person1}
                    focusColor={focusColor[props.color]}
                    textColor={focusText}
					messages="4"
				/>
				<RoundIconListItem
					primary="TM-AMZN"
					secondary="Your Amazon deli..."
					iconSrc={icon1}
                    focusColor={focusColor[props.color]}
                    textColor={focusText}
					messages="2"
				/>
				<RoundIconListItem
					primary="TM-AMZN"
					secondary="Your Amazon deli..."
					iconSrc={icon1}
                    focusColor={focusColor[props.color]}
                    textColor={focusText}
					messages="2"
				/>
				<RoundIconListItem
					primary="TM-AMZN"
					secondary="Your Amazon deli..."
					iconSrc={icon1}
                    focusColor={focusColor[props.color]}
                    textColor={focusText}
					messages="2"
				/>
				<RoundIconListItem
					primary="Harindar Paint Shop"
					secondary="Payment done. Pls c..."
					iconSrc={person3}
                    focusColor={focusColor[props.color]}
                    textColor={focusText}
					messages="1"
				/>
                <RoundIconListItem
					primary="Amma"
					secondary="THANK YOU HARRY..."
					iconSrc={person2}
                    focusColor={focusColor[props.color]}
                    textColor={focusText}
					messages="10"
				/>
			</ListView>
		</div>
	);
}

export default OutlookMessages;
