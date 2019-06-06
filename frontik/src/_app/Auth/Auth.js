import React, { Component } from 'react';
// import {connect} from 'react-redux';
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
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" id="username" placeholder="username" onChange={this.handleOnChange} />
                    <input type="password" id="password" placeholder="password" onChange={this.handleOnChange} />
                    <button>Log In</button>
                </form>
            </div>
        )
    }
}

export default Auth
