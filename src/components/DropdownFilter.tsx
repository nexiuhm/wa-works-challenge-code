import React, {useState, useEffect, JSXElementConstructor} from "react";
import { css, cx } from '@emotion/css'
import { forEachChild, JsxElement } from "typescript";

type Props = {
    children: React.ReactNode
    button?: React.ReactNode
    
}


export default function Dropdown({button,children}:Props) {


    const [dropdownContentVisible, setDropDownContentVisible] = useState(false)


    const onClickToggleDropdown = () => setDropDownContentVisible(!dropdownContentVisible)


    return(

        <ul css={`list-style-type: none;`} >

            <li>
                <div className= {css`display: inline;} `} onClick = {onClickToggleDropdown}>{button ? button : "Toggle drowndown"}</div>
            </li>

            <li className={css`display: ${dropdownContentVisible ? `absolute` : `none`}`}> {children} </li> 

        </ul>
    )




}


// {label, key}[]