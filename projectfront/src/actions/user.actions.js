import { login } from '../services/user';

export const LOGIN = 'LOGIN';

export const doLogin = (username, password) => dispatch =>{
    login(username, password).then(res=>{
        dispatch({
            type: LOGIN,
            payload: res.data
        });
    })
    .catch(error =>{
        console.log(error);
    })
}