import { GET_COMICS_CATALOG_DETAIL } from '../actions/comics.action';

const initialState = {}

export default function(state = initialState, action){
    switch(action.type){
        case GET_COMICS_CATALOG_DETAIL:
            return {
                ...state,
                currentCatalogComics: action.payload
            }
        default:
            return state;
    }
}