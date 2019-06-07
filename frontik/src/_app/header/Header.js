import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import './Header.css';

export class Header extends Component {
    render() {
        return (
            <div>
                <NavLink to="">Main Page</NavLink>
                <NavLink to="/catalogs">Catalogs</NavLink>
                <NavLink to="/auth">Log In</NavLink>
            </div>
        )
    }
}

export default Header
