import { getAllUserFavorites } from '../_services/favorites';

export const GET_FAVORITES_LIST = 'GET_FAVORITES_LIST';

export const getFavorites = () => dispatch => {
    getAllUserFavorites()
    .then(response => {
        dispatch({
            type: GET_FAVORITES_LIST,
            payload: response.data
        });
    })
}