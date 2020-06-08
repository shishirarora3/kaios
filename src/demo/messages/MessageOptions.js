import React, {Component} from 'react';
import ListView from './theme/views/ListView/ListView';
import IconList from './theme/components/IconListItem/IconListItem'
import Header from './theme/components/Header/Header'
import SoftKey from './theme/components/SoftKey/SoftKey'
import {focusColor} from './theme/colors_and_themes/theme_colors'

class MessageOptions extends Component{
    render(){
        
        return(
            <div>
                <Header text="Message" theme={this.props.theme}></Header>
                <ListView theme={this.props.theme}>
                    <IconList primary="Reply" theme={this.props.theme} focusColor={focusColor[this.props.color]}></IconList>
                    <IconList primary="Forward" theme={this.props.theme} focusColor={focusColor[this.props.color]}></IconList>
                    <IconList primary="Delete" theme={this.props.theme} focusColor={focusColor[this.props.color]}></IconList>
                    <IconList primary="New" theme={this.props.theme} focusColor={focusColor[this.props.color]}></IconList>
                </ListView>
                <SoftKey leftText='Back' centerText="Select" rightText="Options" theme={this.props.theme}></SoftKey>
            </div>
        )
    }
}

export default MessageOptions;