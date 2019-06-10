import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import {logout} from '../../_actions/auth.action';
import './Header.css';

export class Header extends Component {
    logout = (e) => {
        this.props.logout();
    }

    render() {

        let {logged} = this.props.logged
        let username = localStorage.getItem('username');
        const files = logged===true ? (
            <div>
                <li className="header_elements navigate"><NavLink to="">{username}
                <ul className="header_down">
                    <li className="header_elements"><NavLink to="/basket">Basket</NavLink></li>
                    <li className="header_elements"><NavLink to="/favorites">Favorites</NavLink></li>
                </ul>
                </NavLink></li>
                <li className="header_elements" onClick={this.logout} ><NavLink to="">Logout</NavLink></li>
            </div>
        ) : (
            <div>
                <li className="header_elements"><NavLink to="/register">Sign Up</NavLink></li>
                <li className="header_elements"><NavLink to="/auth">Login</NavLink></li>
            </div>
        );

        const mobilefiles = logged===true ? (
            <div>
                {/* <li><NavLink to="">{username}</NavLink></li> */}
                <li><NavLink to="/basket">Basket</NavLink></li>
                <li><NavLink to="/favorites">Favorites</NavLink></li>
                <li onClick={this.logout} ><NavLink to="">Logout</NavLink></li>
            </div>
        ):(
            <div>
                <li><NavLink to="/auth">Login</NavLink></li>
                <li><NavLink to="/register">Sign Up</NavLink></li>
            </div>
            
        );

        return (

            <header className="app__header">
            	<nav className="normal-header group_of_elements">
            		<ul>
            			<li className="header_elements"><NavLink to="">Main Menu</NavLink></li>
            			<li className="header_elements"><NavLink to="/catalogs">Catalogs</NavLink></li>
                        {files}
            		</ul>
            	</nav>
                <nav className="mobileNavigation">
                    <div className="mobile-header group_of_elements">
                        <NavLink to=""><img src="https://ui-ex.com/images250_/transparent-logos-team-1.png" alt="Our Logo" className="mobile-logo"></img></NavLink>
                        <ul>
                            <li className="header_elements mobile-menu-writing"><p>Menu</p>
                                <ul>
                                    <li><NavLink to="/catalogs">Catalogs</NavLink></li>
                                    {mobilefiles}
                                </ul>
                            </li>
                        </ul>
                    </div>
                    
                </nav>
            </header>
        )
    }
}

function mapStateToProps(state){
    return{
        logged: state.auth
    }
}

export default connect(mapStateToProps,{logout})(Header)
