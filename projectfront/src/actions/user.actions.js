import { login,logout } from '../services/user';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';


export const doLogout = () => dispatch =>{
    logout().then(res=>{
        dispatch({
            type: LOGOUT,
            payload: res.data,
        });
        localStorage.clear();
    })
    .catch(error =>{
        console.log(error);
    })
}

export const doLogin = (username, password) => dispatch =>{
    login(username, password).then(res=>{
        dispatch({
            type: LOGIN,
            payload: res.data,
        });
        localStorage.setItem('token',res.data.token);
    })
    .catch(error =>{
        console.log(error);
    })
}
