import { GET_COMICS_CATALOGS, GET_COMICS_CATALOG_DETAIL, SET_CURRENT_COMICS_CATALOG } from '../actions/comics.action';

const initialState = {}

export default function(state = initialState, action){

    switch (action.type){
        case GET_COMICS_CATALOGS:
            return {
                ...state,
                catalogs: action.payload
            };
        case GET_COMICS_CATALOG_DETAIL:
            return {
                ...state,
                comicsById: action.payload
            }
        case SET_CURRENT_COMICS_CATALOG:
            return {
                ...state,
                currentCatalog: state.catalogs[action.payload]
            };
        default:
            return state;
    }
}