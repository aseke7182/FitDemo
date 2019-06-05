import axios from 'axios';

export function getComicsByCatalogId(catalogId){
    return axios.get(`http://localhost:8000/api/catalogs/` + catalogId + '/magazines/');
}