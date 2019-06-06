import {loginn, logoutt} from '../_services/auth';

export const  LOGIN = 'LOGIN';
export const  LOGOUT = 'LOGOUT';

export const login = ( username, password ) => dispatch => {
    loginn(username,password).then( res => {
        dispatch({
            type: LOGIN,
            payload: res.data
        })
        localStorage.setItem('token',res.data.token);
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