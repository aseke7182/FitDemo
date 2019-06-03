import axios from 'axios';

export function getComicsCategories(){
    return axios.get('http://localhost:8000/api/catalogs/');
}

export function getComicsCategoryById(comicsId){
    return axios.get('http://locahost:8000/api/catalogs/'+comicsId+'/');
}