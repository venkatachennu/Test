import React from 'react';
import styled from 'styled-components';
import { Styp } from './StyledComponents';
import 'bootstrap/dist/css/bootstrap.css';

const Styledh4 = styled.h4`  
color : Red;
`
function Venkat(){
    return(
        <>
            <Styledh4>Venkat's Details</Styledh4>
            <div>
                <Styp>Dad(Head of the House)</Styp>
                <Styp>Age: 41</Styp>
                <Styp>Working as Software Engineer</Styp>
            </div>  
        </>
    )
}

export default Venkat;