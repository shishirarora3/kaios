import React from 'react';
import TabIconView from './HomePageBViews/TabIconView/TabIconView';
import TabView from './HomePageBViews/TabView/TabView';
import ListView from './HomePageBViews/ListView/ListView';
import RoundIconListItem from './HomePageBComponents/RoundIconListItem/RoundIconListItem';
import SoftKey from './HomePageBComponents/SoftKey/SoftKey';
import mailIcon from './HomePageBIcons/mailIcon.png';
import newsIcon from './HomePageBIcons/newsIcon.png';
import filesIcon from './HomePageBIcons/filesIcon.png';
import calendarIcon from './HomePageBIcons/calendarIcon.png';
import person1 from './HomePageBIcons/person1.png';
import person2 from './HomePageBIcons/person2.png';
import person3 from './HomePageBIcons/person3.png';
import './HomePageB.css';
export default function HomePageB() {
	return (
		<div className="Page-Content-B">
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
			<div className="footer-B">
				<SoftKey leftText="Exit" centerText="Open" rightText="Options" />
			</div>
		</div>
	);
}
