import { GET_CATALOGS, SET_ACTIVE_CATALOG } from '..//_actions/catalog.action';

const initialState = {};

export default function(state = initialState, action){

    switch(action.type) {
        case GET_CATALOGS:
            return {
                ...state,
                catalogs: action.payload
            };
        case SET_ACTIVE_CATALOG:
            return {
                ...state,
                currentCatalog: state.catalogs[action.payload]
            };
        default:
            return state;
    }
}