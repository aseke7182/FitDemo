import axios from 'axios';

export function getComicsCatalogs(){
    return axios.get('http://localhost:8000/api/catalogs/');
}