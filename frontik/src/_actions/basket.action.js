import { createbaskett, sendmessage } from '../_services/basket';

export const ADD_TO_BASKET = 'ADD_TO_BASKET';
export const REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET';
export const CREATE_BASKET = 'CREATE_BASKET';
export const SEND_MESSAGE = 'SEND_MESSAGE';

export const createBasket = ( status, ma ) => dispatch => {
	createbaskett(status, ma).then(res=> {
		dispatch({
			type: CREATE_BASKET,
			payload: res.data
		})
	}).catch(error => {
		alert(error);
	})
}

export const addToBasket = (data) => dispatch =>{
	dispatch({
		type: ADD_TO_BASKET,
		payload: data
	});
}

export const removeComics = (data) => dispatch =>(
	dispatch({
		type: REMOVE_FROM_BASKET,
		payload: data
	})
)

export const message = (text,email) => dispatch => {
	sendmessage(text,email).then(res =>{
		dispatch({
			type: SEND_MESSAGE,
			payload: res.data
		})
	}).catch(error => {
		alert(error);
	})
}