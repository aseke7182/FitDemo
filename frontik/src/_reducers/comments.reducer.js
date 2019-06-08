import { GET_COMMENT_BY_COMICS_ID, ADD_COMMENT } from '../_actions/comments.action';

const initialState = {
	currentComicsComments: []
}

export default function(state = initialState, action){
	switch(action.type) {

		case GET_COMMENT_BY_COMICS_ID:
			return {
				...state,
				currentComicsComments: action.payload
			}
		case ADD_COMMENT:
			let newcurrentComicsComments = [...state.currentComicsComments, action.payload]
			return {
				...state,
				currentComicsComments: newcurrentComicsComments
			}
		default:
			return state;
	}
}