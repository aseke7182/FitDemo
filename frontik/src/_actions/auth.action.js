import {loginn, logoutt, signupp } from '../_services/auth';

export const  LOGIN = 'LOGIN';
export const  LOGOUT = 'LOGOUT';
export const SIGNUP = 'SIGNUP';

export const login = ( username, password ) => dispatch => {
    loginn(username,password).then( res => {
        dispatch({
            type: LOGIN,
            payload: res.data
        })
        localStorage.setItem('token',res.data.token);
        localStorage.setItem('username',res.data.username);
        localStorage.setItem('email',res.data.email);
        window.location.href = "http://localhost:3000";
        // window.location.reload();
    }).catch(error => {
        alert(error);
    })
}

export const logout = () => dispatch => {
    logoutt().then(res => {
        dispatch({
            type: LOGOUT,
            payload: res.data
        })
        localStorage.clear();
    }).catch(error => {
        alert(error);
    })
}

export const signup = (username, email, password) => dispatch => {
    signupp(username,email,password).then(res => {
        dispatch({
            type: SIGNUP,
            payload: res.data
        })
    }).catch(error => {
        alert(error);
    })
}