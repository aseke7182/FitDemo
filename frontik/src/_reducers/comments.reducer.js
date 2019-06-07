import { GET_COMMENT_BY_COMICS_ID } from '../_actions/comments.action';

const initialState = {}

export default function(state = initialState, action){
	switch(action.type) {

		case GET_COMMENT_BY_COMICS_ID:
			return {
				...state,
				currentComicsComments: action.payload
			}
		default:
			return state;
	}
}