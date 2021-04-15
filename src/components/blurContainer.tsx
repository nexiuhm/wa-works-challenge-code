/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import React, { Children, useEffect, useState } from 'react';



type Props = {
    blur: boolean
    children: React.ReactNode
}
export default function BlurContainer({ blur, children }: Props) {


    const blurAmount = blur ? "50px" : "0px"
    console.log(blur);

    return (


        <div css={{ filter: `blur(${blurAmount})` }}>{children}</div>

    )



}