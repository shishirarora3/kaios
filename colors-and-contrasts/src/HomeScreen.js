import React, {Component} from 'react';
import ListView from './contrast_color_validation/views/ListView/ListView';
import IconList from './contrast_color_validation/components/IconListItem/IconListItem'
import Header from './contrast_color_validation/components/Header/Header'
import SoftKey from './contrast_color_validation/components/SoftKey/SoftKey'
import {focusColor} from './contrast_color_validation/colors_and_themes/theme_colors'

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