import React, { Component } from 'react'
import Header from './kaiUiComponents/Header/Header'
import TabBar from './TabBar'
import ListItems from './ListItems'
import SoftKeys from './SoftKeys'
import SoftKey from '../../kai-ui/src/components/SoftKey/SoftKey'
import { withSoftKeyManager } from '../../kai-ui/src/components/SoftKey/withSoftKeyManager'
import '../styles/HomePage.css'

const NotificationBarStyle = {
    height: '25px',
    width: '240px',
    backgroundColor: 'grey'
  };
export default class HomePage extends Component {
     
    render() {
        return (
            <div style={{backgroundColor:'#F2F2F2'}}> 
               {/* remove the below div, its notification bar of jio phone */}
               {/* <div style={NotificationBarStyle}/> */}
               <Header text='Outlook' backgroundColor='lightgrey' bottomMargin='1px'/>
               <ListItems></ListItems>
               <SoftKey leftText='Exit' centerText='Open' rightText='Options'></SoftKey>
             </div>
        )
    }
}
