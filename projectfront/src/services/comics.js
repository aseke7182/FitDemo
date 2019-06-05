import axios from 'axios';

export function getComicsCatalogDetail(comicsId){
    return axios.get('http://locahost:8000/api/catalogs/'+comicsId+'/magazines/');
}