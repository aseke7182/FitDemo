import { getComicsByCatalogId } from '../_services/comicsy';

export const GET_COMICS_BY_CATALOG_ID = 'GET_COMICS_BY_CATALOG_ID';

export const getComicsy = catalogId => dispatch => {
    getComicsByCatalogId(catalogId)
    .then(response => {
        dispatch({
            type: GET_COMICS_BY_CATALOG_ID,
            payload: response.data
        });
    })
    .catch(error => {
        alert(error)
    })
}