import React, { Component } from 'react';
import { connect } from 'react-redux';

import { doLogin } from '../actions/user.actions';

import './Login.css';

class Login extends Component {

    // componentDidMount(){
    //     const token = localStorage.getItem('token');
    //     if(token){
    //         this.props.logged = true;
    //     }
    //     else{
    //         this.props.logged = false;
    //     }
    // }

    handlePerformLogin = (uname, passw) => {
        const { doLogin } = this.props;
        doLogin(uname, passw);
    }

    render() {

        const { doLogin } = this.props;
        console.log(this.props);

        return (
            <div>
                <div>
                    <form>
                        <input type="text" placeholder="Username"></input>
                        <input type="password" placeholder="Password"></input>
                        <button onClick={()=>{this.handlePerformLogin('a_kizatov','12345678')}}>Login</button>
                    </form>                    
                </div>
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
        doLogin
    })(Login);