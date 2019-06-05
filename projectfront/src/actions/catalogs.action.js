import { getComicsCatalogs} from '../services/catalogs';

export const GET_COMICS_CATALOGS = 'GET_COMICS_CATALOGS';
export const SET_CURRENT_COMICS_CATALOG = 'SET_CURRENT_COMICS_CATALOG';

export const getAllCatalogs = () => dispatch => {
    getComicsCatalogs()
    .then(response => {
        dispatch({
            type: GET_COMICS_CATALOGS,
            payload: response.data
        });
    })
    .catch(error =>{
        alert('error occured: ' + error);
    })
}

export const setActiveCatalog = index => dispatch => {
    dispatch({
        type: SET_CURRENT_COMICS_CATALOG,
        payload: index
    });
}