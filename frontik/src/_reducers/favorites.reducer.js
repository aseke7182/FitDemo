import { GET_FAVORITES_LIST, ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, CHOOSE_TO_FAVORITES } from '../_actions/favorite.action';

const initialState ={
    chosenMagazines: []
}

export default function(state = initialState, action){
    switch(action.type){

        case GET_FAVORITES_LIST:
            return {
                ...state,
                favorites: action.payload
            }
        case REMOVE_FROM_FAVORITES:
            return {
                ...state,
                favoritesMagazines: action.payload
            }
        case ADD_TO_FAVORITES:
            return {
                ...state,
                favoritesMagazines: action.payload
            }
        case CHOOSE_TO_FAVORITES:
            let userchoice = [...state.chosenMagazines, action.payload]
            return {
                ...state,
                chosenMagazines: userchoice
            }
        default:
            return state;
    }
}