import { getCommentsByComicsId } from '../_services/comments';

export const GET_COMMENT_BY_COMICS_ID = 'GET_COMMENT_BY_COMICS_ID';

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