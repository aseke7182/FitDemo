import { GET_COMICS_CATALOGS, SET_CURRENT_COMICS_CATALOG } from '../actions/catalogs.action';

const initialState = {}

export default function(state = initialState, action){

    switch (action.type){
        case GET_COMICS_CATALOGS:
            return {
                ...state,
                catalogs: action.payload
            };
        case SET_CURRENT_COMICS_CATALOG:
            return {
                ...state,
                currentCatalog: state.catalogs[action.payload]
            };
        default:
            return state;
    }
}