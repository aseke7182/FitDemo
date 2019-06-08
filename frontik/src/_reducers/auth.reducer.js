import { LOGIN, LOGOUT, SIGNUP } from '../_actions/auth.action';

const initialState = {
    logged: localStorage.getItem('token')!==null
};

export default function( state = initialState, action ){

    switch(action.type){

        case LOGIN:
            return{
                ...state,
                logged: true
            }
        case LOGOUT:
            return {
                ...state,
                logged: false
            }
        case SIGNUP:
            return {
                ...state,
            }
        default:
            return state;
    }
}