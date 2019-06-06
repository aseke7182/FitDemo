import { GET_COMICS_BY_CATALOG_ID } from '../_actions/comicsy.action';

const initialState = {}

export default function(state = initialState, action){
    switch(action.type) {

        case GET_COMICS_BY_CATALOG_ID:
            return {
                ...state,
                currentCatalogComicsy: action.payload
            }
        default:
            return state;
    }
}