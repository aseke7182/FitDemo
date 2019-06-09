import { getComicsByCatalogId, createComics, searchComics } from '../_services/comicsy';

export const GET_COMICS_BY_CATALOG_ID = 'GET_COMICS_BY_CATALOG_ID';
export const SET_ACTIVE_COMICS = 'SET_ACTIVE_COMICS';
export const CREATE_COMICS = 'CREATE_COMICS';

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

export const setActiveComics = index => dispatch => {
    dispatch({
        type: SET_ACTIVE_COMICS,
        payload: index
    });
}

export const createComicss = (data,catalogID) => dispatch => {
    createComics(data,catalogID).then(res => {
        // dispatch({
        //     type: CREATE_COMICS,
        //     payload: res.payload
        // });
        getComicsByCatalogId(catalogID)
        .then(response =>{
            dispatch({
                type: CREATE_COMICS,
                payload: response.payload
            })
            window.location.href = "http://localhost:3000/catalogs/"+catalogID+"/";
        })
    }).catch(error => {
        alert(error);
    })
}

export const search = (name,id) => dispatch => {
    searchComics(name,id).then(res => {
        dispatch({
            type:GET_COMICS_BY_CATALOG_ID,
            payload: res.data
        });
    }).catch(error => {
        alert(error);
    })
}