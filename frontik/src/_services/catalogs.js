import axios from 'axios';

export function getCatalogs(){
    return axios.get('http://localhost:8000/api/catalogs');
}