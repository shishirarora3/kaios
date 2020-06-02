import React from 'react'
import SoftKey from '../../kai-ui/src/components/SoftKey/SoftKey'
export default function SoftKeys() {
    return (
        <div>
            <SoftKey leftText='Exit' centerText="Open" rightText="Options" backgroundColor=' #F2F2F2'></SoftKey> 
            {/* error in adding the background color through props */}
        </div>
    )
}
