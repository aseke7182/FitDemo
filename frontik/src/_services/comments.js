import axios from 'axios';

const http = axios.create({
	baseURL: 'http://localhost:8000/api/',
	headers: {
		'Content-Type': 'application/json',
		'Authorization': 'Token ' + localStorage.getItem('token')
	}
});

export function getCommentsByComicsId(catalogId, comicsId){
	return axios.get(`http://localhost:8000/api/catalogs/`+catalogId+'/magazines/'+comicsId+'/comments/');
}

export function addNewComment(text, raiting, catalogId, comicsId){
	return http.post('catalogs/'+ catalogId+'/magazines/'+comicsId+'/comments/',{
		text: text,
		rating: raiting,
		magazine: comicsId
	})
}