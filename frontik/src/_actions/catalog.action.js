import { getCatalogs as getThem } from '../_services/catalogs';

export const GET_CATALOGS = 'GET_CATALOGS';
export const SET_ACTIVE_CATALOG = 'SET_ACTIVE_CATALOG';

export const getCatalogs = () => dispatch => {
    getThem()
    .then(response => {
        dispatch({
            type: GET_CATALOGS,
            payload: response.data
        });
    })
    .catch(error => {
        alert(error);
    })
}

export const setActiveCatalog = index => dispatch => {
    dispatch({
        type: SET_ACTIVE_CATALOG,
        payload: index
    });
}