import React, { Component } from 'react'
import {connect} from 'react-redux';
import {signup } from '../../_actions/auth.action';
import './register.css'

export class register extends Component {
    
    state = {
        username: '',
        password: '',
        password2: '',
        email: ''
    }

    handleOnchange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    } 

    SignUp = (e) => {
        if(this.state.password === this.state.password2)
            this.props.signup(this.state.username,this.state.email,this.state.password);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit } >
                    <input type="text" placeholder="username" id="username" onChange={this.handleOnchange} value = {this.state.username} />
                    <input type="email" placeholder="email" id="email" onChange={this.handleOnchange} value = {this.state.email} />
                    <input type="password" placeholder="password" id="password" onChange={this.handleOnchange} value = {this.state.password} />
                    <input type="password" placeholder="password" id="password2" onChange={this.handleOnchange} value = {this.state.password2} />
                    <button onClick={this.SignUp} > Register </button>
                </form>
            </div>
        )
    }
}

export default connect(null,
    {
        signup
    })(register);
