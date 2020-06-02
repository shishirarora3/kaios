import React from 'react'
import ListView from '../../kai-ui/src/views/ListView/ListView'
import ArrowListItem from "../../kai-ui/src/components/ArrowListItem/ArrowListItem";
import IconListItem from './kaiUiComponents/IconListItem/IconListItem'
import Icon from '../assets/pic1.jpg'

export default function ListItems() {
    const imgPath1_1=require('../assets/pic1.1.png')
    const imgPath1_2=require('../assets/pic1.2.png')
    const imgPath2=require('../assets/pic2.png')
    const imgPath3=require('../assets/pic3.png')
    const areThere2Icons=true
      return (
        <div >
            <ListView>
                <IconListItem primary="1. Messages" secondary="Sahil Warsi, Amm..."  iconSrc={imgPath1_1} iconSrc2={imgPath1_2} areThere2Icons={true} notification={true} notificationTyp={1} />
                <IconListItem primary="2. News"  secondary="Cyclone Amphan..." iconSrc={imgPath2} notification={true} notificationTyp={2}/>
                <IconListItem primary="3. Files" secondary="New folder created" iconSrc={imgPath3} notificationTyp={3} />
            </ListView>
        </div>
    )
}
