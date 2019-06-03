import { getComicsCategories, getComicsCategoryById } from '../services/comics';

export const GET_COMICS_CATEGORIES = 'GET_COMICS_CATEGORIES';
export const GET_COMICS_CATEGORY_BY_ID = 'GET_COMICS_CATEGORY_BY_ID';
export const SET_CURRENT_COMICS_CATEGORY = 'SET_CURRENT_COMICS_CATEGORY';

export const getAllCategories = () => dispatch => {
    getComicsCategories()
    .then(response => {
        dispatch({
            type: GET_COMICS_CATEGORIES,
            payload: response.data
        });
    })
    .catch(error =>{
        console.log(error)
    })
}

export const getCategoryById = comicsId => dispatch => {
    getComicsCategoryById(comicsId)
    .then(response =>{
        dispatch({
            type: GET_COMICS_CATEGORY_BY_ID,
            payload: response.data
        });
    })
    .catch(error =>{
        console.log(error);
    })
}

export const setActiveCategory = index => dispatch => {
    dispatch({
        type: SET_CURRENT_COMICS_CATEGORY,
        payload: index
    });
}