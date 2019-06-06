import React, { Component } from 'react';
import {connect} from 'react-redux';
import {login, logout} from '../../_actions/auth.action';
import './Auth.css';

export class Auth extends Component {
    state = {
        username: '',
        password: ''
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
    }

    handleonClick = (e) => {
        this.props.login(this.state.username,this.state.password);
    }

    logout = (e) => {
        this.props.logout();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" id="username" placeholder="username" onChange={this.handleOnChange} value= {this.state.username} />
                    <input type="password" id="password" placeholder="password" onChange={this.handleOnChange} value = { this.state.password} />
                    <button onClick={this.handleonClick} >Log In</button>
                    <button onClick={this.logout}>Log Out</button>
                </form>
            </div>
        )
    }
}


export default connect(null,
{
    login, logout
})(Auth);
