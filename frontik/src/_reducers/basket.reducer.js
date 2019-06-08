import {ADD_TO_BASKET} from '../_actions/basket.action';

const initialState = {
	basketItems: []
}

export default function(state = initialState, action){
	switch(action.type) {

		case ADD_TO_BASKET:
			let newbasket = [...state.basketItems,action.payload]
			return {
				...state,
				basketItems: newbasket
			}
		default:
			return state;
	}
}