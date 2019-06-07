import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import './Header.css';

export class Header extends Component {
    render() {
        return (
            <header>
            	<nav className="group_of_elements">
            		<ul>
            			<li className="header_elements"><NavLink to="">Main Menu</NavLink></li>
            			<li className="header_elements"><NavLink to="/catalogs">Catalogs</NavLink></li>
                        if ( !localStorage.getItem('token')) {
                            <li className="header_elements"><NavLink to="/auth">Login</NavLink></li>
                        }
                        else if( localStorage.getItem('token') ){
                            <li className="header_elements"><NavLink to="/auth">Logout</NavLink></li>
                        }
            		</ul>
            	</nav>
            </header>
            <div>
                <NavLink to="">Main Page</NavLink>
                <NavLink to="/catalogs">Catalogs</NavLink>
                <NavLink to="/auth">Log In</NavLink>
                <NavLink to="/register">Register</NavLink>
            </div>
        )
    }
}

export default Header
