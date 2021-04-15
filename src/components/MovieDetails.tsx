/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import React, { Children } from 'react';
import {MovieData} from "../App"

  
type Props = {
    movie:MovieData
 
}
export default function MovieDetails({movie}:Props) {

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


    return(

        
        <div css={{
            background: "linear-gradient(90deg, rgba(31,20,50,1) 0%, rgba(23,33,48,1) 52%, rgba(0,0,0,1) 83%);", display: "flex",borderRadius: "10px", height:"100%", width:"100%", margin:"0"}}>


            <div>
                <img css={{padding: "10px"}}src={movie.Poster}></img>
                
                 
            </div>
            
            <div css={{padding: "50px"}}>
            <h1 css={{margin:0}}>{movie.Title}</h1> 
                
                  
                <div>Release: {movie.Year}</div>
                <div>Runtime: {movie.Runtime}</div>
                <h3>Plot</h3>
                <p css={{fontSize:"18px"}}>{movie.Plot}</p>
            </div>
            
            
            
        </div>
        

       
    )



}