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
        const files = logged==true ? (
            <div>
                <li className="header_elements"><NavLink to="/basket">Basket</NavLink></li>
                <li className="header_elements" onClick={this.logout} ><NavLink to="">Logout</NavLink></li>
            </div>
        ) : (
            <div>
                <li className="header_elements"><NavLink to="/register">Sign Up</NavLink></li>
                <li className="header_elements"><NavLink to="/auth">Login</NavLink></li>
            </div>
        );
        return (

            <header>
            	<nav className="group_of_elements">
            		<ul>
            			<li className="header_elements"><NavLink to="">Main Menu</NavLink></li>
            			<li className="header_elements"><NavLink to="/catalogs">Catalogs</NavLink></li>
                        {files}
            		</ul>
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
