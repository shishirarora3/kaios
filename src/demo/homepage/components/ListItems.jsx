import React from 'react'
import ListView from '../../../kai-ui/src/views/ListView/ListView'
import IconListItem from './kaiUiComponents/IconListItem/IconListItem'
import Icon from '../assets/pic1.jpg'

export default function ListItems() {
    
    const ListItems=[
        {primary:"1. Messages",secondary:"Sahil Warsi, Amm...",iconSrc:require('../assets/pic1.1.svg'),isNotification:true,notificationType:1,areThere2Icons:true,iconSrc2:require('../assets/pic1.2.svg')},
        {primary:"2. News",secondary:"Cyclone Amphan...",iconSrc:require('../assets/pic2.svg'),isNotification:true,notificationType:2,areThere2Icons:false,iconSrc2:''},
        {primary:"1. Files",secondary:"Sahil Warsi, Amm...",iconSrc:require('../assets/pic3.svg'),isNotification:true,notificationType:3,areThere2Icons:false,iconSrc2:''}];

    
      return (
        <div >
            <ListView>
                {
                    ListItems.map((item)=>{
                        return <IconListItem primary={item.primary} secondary={item.secondary} iconSrc={item.iconSrc} isNotification={item.isNotification} notificationType={item.notificationType} 
                        areThere2Icons={item.areThere2Icons} iconSrc2={item.iconSrc2}/>   
                    })
                }
            </ListView>
        </div>
    )
}
