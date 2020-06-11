import React, { Component } from 'react'
import FlexBox from './components/FlexBox/FlexBox'
import GridContainer from './components/GridContainer/GridContainer'
import Header from './components/Header/Header'
import HorizontalListItem from './components/HorizontalListItem/HorizontalListItem'
import SoftKey from './components/SoftKey/SoftKey'
import './HomePageA.scss';
import {icon01, icon02, icon03, icon04, icon05, icon06, icon07, icon08, icon09} from './HomePageAIcons';
import HorLineSeperator from './components/HorizontalLineSeperator/HorizontalLineSeperator'

export default class HomePageA extends Component {
	constructor(props){
		super(props);
		this.footerLeftText = 'Exit';
		this.footerRightText = 'Options';
		this.FooterCenterText = 'Open';
		this.headerText = 'Microsoft Outlook';
		this.mysoftcallback = this.mysoftcallback.bind(this);
	}
	mysoftcallback = () => {
		this.props.history.goBack();
	}
    render() {
        return (
            <div className='PhoneDimentions'>
                <Header text={this.headerText} topOrBottom='top'/>
                <GridContainer>
                    <FlexBox>
                        <HorizontalListItem iconSrc={icon01}/>
                        <HorizontalListItem iconSrc={icon02}/>
                        <HorizontalListItem iconSrc={icon03}/>
						<HorLineSeperator shouldBeHidden={true} topOrBottom='invisible'/>
                        <HorizontalListItem iconSrc={icon04}/>
                        <HorizontalListItem iconSrc={icon05}/>
                        <HorizontalListItem iconSrc={icon06}/>
						<HorLineSeperator shouldBeHidden={true} topOrBottom='invisible'/>
                        <HorizontalListItem iconSrc={icon07}/>
                        <HorizontalListItem iconSrc={icon08}/>
                        <HorizontalListItem iconSrc={icon09}/>
                    </FlexBox>
                </GridContainer>
                <SoftKey leftCallback={this.mysoftcallback} leftText={this.footerLeftText} rightText={this.footerRightText} centerText={this.FooterCenterText} topOrBottom='bottom'></SoftKey>
            </div>
        )
    }
}

/*

<HorLineSeperator shouldbehidden='true' topOrBottom='invisible'/>
<HorLineSeperator shouldbehidden='true' topOrBottom='invisible'/>

<hr shouldbehidden='true'/>
<hr shouldbehidden='true'/>

*/ 