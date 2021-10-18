import React from 'react';
import styled from 'styled-components';
import { Styp } from './StyledComponents';

const Styledh4 = styled.h4`
color : DarkMagenta
`
function Suneetha(){
    return(
        <>
            <Styledh4>Suneetha's Details</Styledh4>
            <div>
                <Styp>Mom</Styp>
                <Styp>Age: 37</Styp>
                <Styp>House Wife</Styp>
            </div>
        </>
    )
}

export default Suneetha;