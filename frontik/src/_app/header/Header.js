import React, { Component } from 'react'
import './Header.css';

export class Header extends Component {
    render() {
        return (
            <div>
                <a href="main">Main Page</a>
                <a href="/catalogs">Catalogs</a>
                <a href="/auth">Log In</a>
            </div>
        )
    }
}

export default Header
