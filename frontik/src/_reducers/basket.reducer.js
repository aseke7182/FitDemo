import {ADD_TO_BASKET, REMOVE_FROM_BASKET, CREATE_BASKET} from '../_actions/basket.action';

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
		case REMOVE_FROM_BASKET:
			let newestbasket = state.basketItems.filter(basketitem => {
				return basketitem.id !== action.payload.id
			})
			return {
				...state,
				basketItems: newestbasket
			}
		case CREATE_BASKET:
			let newestnewestbasket = []
			return {
				...state,
				basketItems: newestnewestbasket,
				orderDetail: action.payload
			}
		default:
			return state;
	}
}