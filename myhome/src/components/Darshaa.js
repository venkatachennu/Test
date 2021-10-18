import React from 'react';
import styled from 'styled-components';
import { Styp } from './StyledComponents';

const Styledh4 = styled.h4`
color : DarkTurquoise
`
function Darshaa(){
    return(
        <>
            <Styledh4>Darshaa's Details</Styledh4>
            <div>
                <Styp>Second Kid</Styp>
                <Styp>Age: 5</Styp>
                <Styp>Kindergarten</Styp>
            </div>
        </>
    )
}

export default Darshaa;