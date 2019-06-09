import axios from 'axios';

export function getComicsByCatalogId(catalogId){
    return axios.get(`http://localhost:8000/api/catalogs/` + catalogId + '/magazines/');
}

const http = axios.create({
    baseURL: 'http://localhost:8000/api/',
    headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Token ' + localStorage.getItem('token')
    }
});

export function createComics(data, catalogid){
    return http.post('catalogs/'+catalogid+'/magazines/',data)
}