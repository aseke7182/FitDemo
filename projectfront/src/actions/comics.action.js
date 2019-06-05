import { getComicsCatalogDetail } from '../services/comics';

export const GET_COMICS_CATALOG_DETAIL = 'GET_COMICS_CATALOG_DETAIL';

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