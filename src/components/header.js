import React,{Component} from "react";
import {NavLink} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends Component {
    render() {
        return (
        <header>
            <nav className="navbar navbar-light bg-light">
                <NavLink to="/creator" exact={false} className="navbar-brand">Custom</NavLink>
                <NavLink to="/" exact={true} className="navbar-brand">Home</NavLink>
                <NavLink to="/auth" exact={false} className="navbar-brand">MyProfile</NavLink>
            </nav>
        </header>
        );
    }
}

export default Header;