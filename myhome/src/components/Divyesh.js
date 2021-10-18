import React from 'react';
import styled from 'styled-components';
import { Styp } from "./StyledComponents"

const Styledh4 =  styled.h4`
color: Red;
`
function Divyesh(){
    return(
        <>
            <Styledh4>Divyesh's Details</Styledh4>
            <div>
                <Styp>First Kid</Styp>
                <Styp>Age: 8</Styp>
                <Styp>3<sup>rd</sup> Grade</Styp>
            </div>
        </>
    )
}

export default Divyesh;