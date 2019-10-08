import React, {useContext} from 'react';
import {CartContext} from "../contexts/CartContext";


const Item = props => {
	const cart = useContext(CartContext);
	

	// const removeItem = (item) => {
	// 	setCart(prevCart.filter(item => item.id !== item));
		
	// }

	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />

			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button onClick={() => cart.removeItem(props.id)}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;

// {setCart(prevCart => prevCart.filter(item => item.id !== item))}



//Reducer version 2, not currently viable
// function reducer(state, action) {
// 	switch(action.type){
// 		case 'UPDATE_CART':
// 			return{...cart, item: action.payload}
// 		default:
// 			throw Error('reducer error');
// 	}
// }