import React, { Component } from 'react'
import FlexBox from '../homePageAComponents/FlexBox/FlexBox'
import GridContainer from '../homePageAComponents/GridContainer/GridContainer'
import Header from '../homePageAComponents/Header/Header'
import HorListItem from '../homePageAComponents/HorListItem/HorListItem'
import SoftKey from '../homePageAComponents/SoftKey/SoftKey'
import './HomePageA.scss';

export default class HomePageA extends Component {
    render() {
        return (
            <div className='JioPhoneDimentions'>
                <Header text='Microsoft Outlook' topOrBottom='top'/>
                {/* <MyHrLine topOrBottom='top'></MyHrLine> */}
                <GridContainer>
                    <FlexBox>
                        <HorListItem iconSrc={require('../homePageAIcons/1.png')}></HorListItem>
                        <HorListItem iconSrc={require('../homePageAIcons/2.png')}></HorListItem>
                        <HorListItem iconSrc={require('../homePageAIcons/3.png')}></HorListItem>
                        <hr ishr='yes'/>
                        <HorListItem iconSrc={require('../homePageAIcons/4.png')}></HorListItem>
                        <HorListItem iconSrc={require('../homePageAIcons/5.png')}></HorListItem>
                        <HorListItem iconSrc={require('../homePageAIcons/6.png')}></HorListItem>
                        <hr ishr='yes'/>
                        <HorListItem iconSrc={require('../homePageAIcons/7.png')}></HorListItem>
                        <HorListItem iconSrc={require('../homePageAIcons/8.png')}></HorListItem>
                        <HorListItem iconSrc={require('../homePageAIcons/9.png')}></HorListItem>
                    </FlexBox>
                </GridContainer>
                {/* <MyHrLine topOrBottom='bottom'></MyHrLine> */}
                <SoftKey leftText='Exit' rightText='Options' centerText='Open' topOrBottom='bottom'></SoftKey>
            </div>
        )
    }
}
