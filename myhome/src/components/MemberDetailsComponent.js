import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import { useHistory } from "react-router";
import Darshaa from "./Darshaa";
import Divyesh from "./Divyesh";
import Suneetha from "./Suneetha";
import Venkat from "./Venkat";
import { Nav, NavLink } from "./StyledComponents";

function MemberDetailsComponent(){
    const history = useHistory();

    const logout = () => {
        history.push('/')
    }

    return(
        <BrowserRouter>
            <>
                <Nav>
                <NavLink to="/Venkat"> Venkat </NavLink>
                <NavLink to="/Suneetha">Suneetha</NavLink>
                <NavLink to="/Divyesh">Divyesh</NavLink>
                <NavLink to="/Darshaa">Darshaa</NavLink>
                <button onClick={logout}>Logout</button>
                </Nav>
                <Route path="/Venkat"  exact component={Venkat} />
                <Route path="/Suneetha" exact component={Suneetha} />
                <Route path="/Divyesh" exact component={Divyesh}/>
                <Route path="/Darshaa" exact component={Darshaa} />
            </>
        </BrowserRouter>
    )
}
export default MemberDetailsComponent;