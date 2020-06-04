import React from 'react'
import ListView from '../../../kai-ui/src/views/ListView/ListView'
import IconListItem from './kaiUiComponents/IconListItem/IconListItem'
import Icon from '../assets/pic1.jpg'

export default function ListItems() {
    const imgPath1_1=require('../assets/pic1.1.svg')
    const imgPath1_2=require('../assets/pic1.2.svg')
    const imgPath2=require('../assets/pic2.svg')
    const imgPath3=require('../assets/pic3.svg')
    const areThere2Icons=true
      return (
        <div >
            <ListView>
                <IconListItem primary="1. Messages" secondary="Sahil Warsi, Amm..."  iconSrc={imgPath1_1} iconSrc2={imgPath1_2} areThere2Icons={true} isNotification={true} notificationType={1} />
                <IconListItem primary="2. News"  secondary="Cyclone Amphan..." iconSrc={imgPath2} isNotification={true} notificationType={2}/>
                <IconListItem primary="3. Files" secondary="New folder created" iconSrc={imgPath3} notificationType={3} />
            </ListView>
        </div>
    )
}
