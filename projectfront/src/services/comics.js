import axios from 'axios';

export function getComicsCatalogs(){
    return axios.get('http://localhost:8000/api/catalogs/');
}

export function getComicsCatalogDetail(comicsId){
    return axios.get('http://locahost:8000/api/catalogs/'+comicsId+'/magazines/');
}