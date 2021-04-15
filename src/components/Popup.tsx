/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import React, { Children, useEffect, useState } from 'react';




type Props = {
    visible: boolean
    children: React.ReactNode
    onClose: Function
}
export default function Popup({visible,onClose, children }:Props) {

    

    const screenCenterFixed = css({transform: "translate(-50%, -50%)",top:"50%",left: "50%" ,position:"fixed" });
    const topRightAbsolute = css`
    position:absolute;
    font-size:50px;
    right:30px;
    top:0;
    padding: 5px;
    color:white;
    cursor: pointer;
    &:hover {
        color:#aa70e0;
    }`;

    console.log(topRightAbsolute)
    
    console.log("rendering again");
    
    const closeButton = <div css={topRightAbsolute} onClick={()=>onClose()}>X</div> 

    const renderModalWindow =  

    <div css={{position:"absolute",width:"100%",height:"100%"}}>
        <div css={screenCenterFixed}> {closeButton}{children }</div>
    </div>
 

    return(

        
        visible ? renderModalWindow : null
       
    )



}