import React, { Component } from 'react'
import FlexBox from '../homePageAComponents/FlexBox/FlexBox'
import GridContainer from '../homePageAComponents/GridContainer/GridContainer'
import Header from '../homePageAComponents/Header/Header'
import HorListItem from '../homePageAComponents/HorListItem/HorListItem'
import SoftKey from '../homePageAComponents/SoftKey/SoftKey'
import './HomePageA.scss';
import icon01 from '../homePageAIcons/icon01.svg';
import icon02 from '../homePageAIcons/icon02.svg';
import icon03 from '../homePageAIcons/icon03.svg';
import icon04 from '../homePageAIcons/icon04.svg';
import icon05 from '../homePageAIcons/icon05.svg';
import icon06 from '../homePageAIcons/icon06.svg';
import icon07 from '../homePageAIcons/icon07.svg';
import icon08 from '../homePageAIcons/icon08.svg';
import icon09 from '../homePageAIcons/icon09.svg';

export default class HomePageA extends Component {
	constructor(){
		super();
		this.footerLeftText = 'Exit';
		this.footerRightText = 'Options';
		this.FooterCenterText = 'Open';
		this.headerText = 'Microsoft Outlook';
	}
    render() {
        return (
            <div className='JioPhoneDimentions'>
                <Header text={this.headerText} topOrBottom='top'/>
                <GridContainer>
                    <FlexBox>
                        <HorListItem iconSrc={icon01}></HorListItem>
                        <HorListItem iconSrc={icon02}></HorListItem>
                        <HorListItem iconSrc={icon03}></HorListItem>
                        <hr shouldBeHidden='true'/>
                        <HorListItem iconSrc={icon04}></HorListItem>
                        <HorListItem iconSrc={icon05}></HorListItem>
                        <HorListItem iconSrc={icon06}></HorListItem>
                        <hr shouldBeHidden='true'/>
                        <HorListItem iconSrc={icon07}></HorListItem>
                        <HorListItem iconSrc={icon08}></HorListItem>
                        <HorListItem iconSrc={icon09}></HorListItem>
                    </FlexBox>
                </GridContainer>
                <SoftKey leftText={this.footerLeftText} rightText={this.footerRightText} centerText={this.FooterCenterText} topOrBottom='bottom'></SoftKey>
            </div>
        )
    }
}
