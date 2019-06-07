import axios from 'axios';

export function getCommentsByComicsId(catalogId, comicsId){
	return axios.get(`http://localhost:8000/api/catalogs/`+catalogId+'/magazines/'+comicsId+'/comments/');
}