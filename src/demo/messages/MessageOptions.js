import React, {Component} from 'react';
import ListView from './theme/views/ListView/ListView';
import IconList from './theme/components/IconListItem/IconListItem'
import Header from './theme/components/Header/Header'
import SoftKey from './theme/components/SoftKey/SoftKey'
import {focusColor} from './theme/colors_and_themes/theme_colors'

class MessageOptions extends Component{
	constructor(props){
		super(props);
		this.mysoftcallback = this.mysoftcallback.bind(this);
	}
	mysoftcallback = () => {
		this.props.history.goBack();
	}
    render(){
        return(
            <div>
                <Header text="Message" theme={this.props.theme} type={this.props.type}></Header>
                <ListView theme={this.props.theme}>
                    <IconList primary="Reply" theme={this.props.theme} focusColor={focusColor[this.props.color]} type={this.props.type}></IconList>
                    <IconList primary="Forward" theme={this.props.theme} focusColor={focusColor[this.props.color]} type={this.props.type}></IconList>
                    <IconList primary="Delete" theme={this.props.theme} focusColor={focusColor[this.props.color]} type={this.props.type}></IconList>
                    <IconList primary="New" theme={this.props.theme} focusColor={focusColor[this.props.color]} type={this.props.type}></IconList>
                </ListView>
                <SoftKey leftCallback={this.mysoftcallback} leftText='Back' centerText="Select" rightText="Options" theme={this.props.theme} type={this.props.type}></SoftKey>
            </div>
        )
    }
}

export default MessageOptions;