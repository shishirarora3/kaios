import React, {Component} from 'react';
import ListView from './themes/views/ListView/ListView';
import IconList from './themes/components/IconListItem/IconListItem'
import Header from './themes/components/Header/Header'
import SoftKey from './themes/components/SoftKey/SoftKey'
import {focusColor} from './themes/colors_and_themes/theme_colors'

class HomeScreen extends Component{
    render(){
        return(
            <div>
                <Header text="Messages" theme="dark"></Header>
                <ListView color="monochrome" theme="dark">
                    <IconList primary="Reply" theme="dark" focusColor={focusColor.lightblue}></IconList>
                    <IconList primary="Forward" theme="dark" focusColor={focusColor.lightblue}></IconList>
                    <IconList primary="Delete" theme="dark" focusColor={focusColor.lightblue}></IconList>
                    <IconList primary="New" theme="dark" focusColor={focusColor.lightblue}></IconList>
                </ListView>
                <SoftKey leftText='Back' centerText="Select" rightText="Options" theme="dark"></SoftKey>
            </div>
        )
    }
}

export default HomeScreen;