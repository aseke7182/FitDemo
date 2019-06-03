import { GET_COMICS_CATEGORIES, GET_COMICS_CATEGORY_BY_ID, SET_CURRENT_COMICS_CATEGORY } from '../actions/comics.action';

const initialState = {}

export default function(state = initialState, action){
    switch (action.type){
        case GET_COMICS_CATEGORIES:
            return {
                ...state,
                allCategories: action.payload
            }
        case GET_COMICS_CATEGORY_BY_ID:
            return {
                ...state,
                categoryById: action.payload
            }
        case SET_CURRENT_COMICS_CATEGORY:
            return {
                ...state,
                currentCategory: state.categories[action.payload]
            };
        default:
            return state;
    }
}