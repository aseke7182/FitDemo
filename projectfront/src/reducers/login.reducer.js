import { LOGIN,LOGOUT } from '../actions/user.actions';

let user = localStorage.getItem('token');
const initialState = user ? { logged: true, user } : {} ;

export default function(state = initialState, action){
    switch (action.type) {

        case LOGIN:
            return {
                ...state,
                logged: true
            }
        case LOGOUT:
            return{
                ...state,
                logged: false
            }
        default:
            return state;
    }
}