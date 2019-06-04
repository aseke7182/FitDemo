import { getComicsCatalogs, getComicsCatalogDetail } from '../services/comics';

export const GET_COMICS_CATALOGS = 'GET_COMICS_CATALOGS';
export const GET_COMICS_CATALOG_DETAIL = 'GET_COMICS_CATALOG_DETAIL';
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

export const getAllComicsOfCatalog = comicsId => dispatch => {
    getComicsCatalogDetail(comicsId)
    .then(response =>{
        dispatch({
            type: GET_COMICS_CATALOG_DETAIL,
            payload: response.data
        });
    })
    .catch(error =>{
        alert('Error occured: ' + error)
    })
}

export const setActiveCatalog = index => dispatch => {
    dispatch({
        type: SET_CURRENT_COMICS_CATALOG,
        payload: index
    });
}