import { getAllUserFavorites, updateFavorite } from '../_services/favorites';

export const GET_FAVORITES_LIST = 'GET_FAVORITES_LIST';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';
export const CHOOSE_TO_FAVORITES = 'CHOOSE_TO_FAVORITES';

export const getFavorites = () => dispatch => {
    getAllUserFavorites()
    .then(response => {
        dispatch({
            type: GET_FAVORITES_LIST,
            payload: response.data
        });
    }).catch(error =>{
        console.log(error)
    })
}

export const addToFavorites = (favoriteId, data) => dispatch =>{
    updateFavorite(favoriteId, data)
    .then(response => {
        dispatch({
            type: ADD_TO_FAVORITES,
            payload: response.data
        });
    })
}

export const removeFromFavorites = (favoriteId, data) => dispatch => {
    updateFavorite(favoriteId, data)
    .then(response => {
        dispatch({
            type: REMOVE_FROM_FAVORITES,
            payload: response.data
        })
    })
}

export const chooseFavorites = (data) => dispatch => {
    dispatch({
        type: CHOOSE_TO_FAVORITES,
        payload: data
    })
}