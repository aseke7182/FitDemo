import React, { Component } from 'react';
import { connect } from 'react-redux';

import { doLogin, doLogout } from '../actions/user.actions';

import './Login.css';

class Login extends Component {

    componentDidMount(){
        // const token = localStorage.getItem('token');
        // console.log(token);
    }

    handlePerformLogin = () => {
        let uname = document.getElementById('username').value;
        let passw = document.getElementById('password').value;
        const { doLogin } = this.props;
        doLogin(uname, passw);
    }
    handlePerformLogout = () =>{
        const { doLogout} = this.props;
        doLogout();
    }

    render() {

        return (
            <div>
                <input type="text" placeholder="Username" id="username"></input>
                <input type="password" placeholder="Password" id="password"></input>
                <button onClick={()=>{this.handlePerformLogin()}}>Login</button>
                <button onClick={()=>{this.handlePerformLogout()}}>Logout</button>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {

    }
}

export default connect(mapStateToProps,
    {
        doLogin,doLogout
    })(Login);