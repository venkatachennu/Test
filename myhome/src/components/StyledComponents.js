import styled from "styled-components";
import { Link } from "react-router-dom";

export const Styp = styled.p`
    color : Blue;
    font-size: 20px;
    font-family: Garamond;
    background: GreenYellow;
`
export const Nav =  styled.nav`
background: #63D471;
height: 55px;
display: flex;
justify-content: space-between;
padding: 0.2rem;

`
export const NavLink = styled(Link)`
border-radius: 4px;
background: #808080;
padding: 10px 22px;
color: #000000;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
/* Second Nav */
margin-left: 24px;
&:hover {
transition: all 0.2s ease-in-out;
background: #fff;
color: #808080;
}
`