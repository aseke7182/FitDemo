import { LOGIN, LOGOUT, SIGNUP } from '../_actions/auth.action';
const initialState = {};

export default function( state = initialState, action ){

    switch(action.type){

        case LOGIN:
            return{
                ...state,
            }
        case LOGOUT:
            return {
                ...state,
            }
        case SIGNUP:
            return {
                ...state,
            }
        default:
            return state;
    }
}