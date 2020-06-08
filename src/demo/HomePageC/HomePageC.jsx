import React, { Component } from 'react'
import Header from './components/kaiUiComponents/Header/Header'
import ListItems from './components/ListItems'
import SoftKey from './components/kaiUiComponents/SoftKey/SoftKey'
import './styles/HomePage.css'


export default class HomePage extends Component {
     
    render() {
        return (
            <div className='mainDiv'>
               <Header text='Outlook'/>
               <ListItems></ListItems>
               <SoftKey leftText='Exit' centerText='Open' rightText='Options'></SoftKey>
             </div>
        )
    }
}
