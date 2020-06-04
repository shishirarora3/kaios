import React from 'react';
import TabIconView from './HomeScreenBViews/TabIconView/TabIconView';
import TabView from './HomeScreenBViews/TabView/TabView';
import ListView from '././HomeScreenBViews/ListView/ListView';
import RoundIconListItem from './HomeScreenBComponents/RoundIconListItem/RoundIconListItem';
import SoftKey from './HomeScreenBComponents/SoftKey/SoftKey';
import mailIcon from './HomeScreenBIcons/mailIcon.png';
import newsIcon from './HomeScreenBIcons/newsIcon.png';
import filesIcon from './HomeScreenBIcons/filesIcon.png';
import calendarIcon from './HomeScreenBIcons/calendarIcon.png';
import person1 from './HomeScreenBIcons/person1.png';
import person2 from './HomeScreenBIcons/person2.png';
import person3 from './HomeScreenBIcons/person3.png';
import './HomeScreenB.css';
export default function HomeScreenB() {
	return (
		<div className="Page-Content">
			<TabIconView tabIcons={[ mailIcon, newsIcon, filesIcon, calendarIcon ]}>
				<ListView>
					<div className="Tab1" style={{height:"100%"}}>
						<TabView tabLabels={[ 'Email', 'SMS' ]} focusColor="black">
							<ListView isActive>
								<RoundIconListItem
									primary="Sahil Warsi"
									secondary="See this video ww..."
									iconSrc={person1}
									focusColor="#0078D4"
									messages="4"
								/>
								<RoundIconListItem
									primary="Amma"
									secondary="VERY NICE PHOTO..."
									iconSrc={person2}
									focusColor="#0078D4"
									messages="10"
								/>
								<RoundIconListItem
									primary="Harindar Paint Shop"
									secondary="Payment done. Pls c..."
									iconSrc={person3}
									focusColor="#0078D4"
									messages="1"
								/>
							</ListView>
							<ListView>
								<h1>SMSes</h1>
								<p>SMSes will be integrated here</p>
							</ListView>
						</TabView>
					</div>
				</ListView>
				<ListView>
					<h1>News page</h1>
				</ListView>
				<ListView>
					<h1> Files page</h1>
				</ListView>
				<ListView>
					<h1>Calendar Page</h1>
				</ListView>
			</TabIconView>
			<div className="footer">
				<SoftKey leftText="Exit" centerText="Open" rightText="Options" />
			</div>
		</div>
	);
}
