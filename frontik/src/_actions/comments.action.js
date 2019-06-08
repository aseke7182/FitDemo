import { getCommentsByComicsId, addNewComment } from '../_services/comments';

export const GET_COMMENT_BY_COMICS_ID = 'GET_COMMENT_BY_COMICS_ID';
export const ADD_COMMENT = 'ADD_COMMENT';

export const getComments = (catalogId, comicsId) => dispatch => {
	getCommentsByComicsId(catalogId, comicsId)
	.then(response => {
		dispatch({
			type: GET_COMMENT_BY_COMICS_ID,
			payload: response.data
		});
	})
	.catch(error => {
		alert(error)
	})
}

export const addComment = (text, raiting, catalogId, comicsId) => dispatch => {
	addNewComment(text, raiting, catalogId, comicsId).then(res => {
		dispatch({
			type: ADD_COMMENT,
			payload: res.data
		})
	})
}