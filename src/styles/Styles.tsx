/** @jsxRuntime classic */
/** @jsx jsx */
import { css, cx } from '@emotion/css'



/* Positioning */

export const screenCenterFixed = css({transform: "translate(-50%, -50%)",top:"50%",left: "50%" ,position:"fixed" });
export const topRightAbsolute = css`
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
/* Base */

export const bodyBase = css`
@import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');
body {
    margin: 0;
    font-family: 'Quicksand', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(31,31,82,1) 35%, rgba(33,62,68,1) 100%);
}`;

export const appBase = css`
    margin: 0 auto;
    margin-top: 50px;
    width: 70%;
    word-wrap: break-word;
    color: white;
    font-family: 'Quicksand', sans-serif;
`;


/* Colors */


