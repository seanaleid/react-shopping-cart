import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

// Contexts
import {ProductsContext} from "./contexts/ProductsContext";
import {CartContext} from "./contexts/CartContext";


function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);
	console.log(products);


	const addItem = (item) => {
		console.log(item);
		// add the given item to the cart
		return setCart([...cart, item]);
	};

	const removeItem = (itemID) => {
		setCart(cart.filter(item => item.id !== itemID));
	};

	return (
		<div className="App">
			<ProductsContext.Provider value={{products, addItem}}>
				<CartContext.Provider value={{cart, removeItem}}>
					<Navigation cart={cart} />

					{/* Routes */}
					<Route
						exact
						path="/"
						component={Products}
					/>

					<Route
						path="/cart"
						component={ShoppingCart}
					/>
				</CartContext.Provider>
			</ProductsContext.Provider>
		</div>
	);
}

export default App;

//version 2 --> reducer is not viable currently
// function reducer(state, action) {
// 	switch(action.type){
// 		case 'UPDATE_CART':
// 			return{...cart, item: action.payload}
// 		default:
// 			throw Error('reducer error');
// 	}
// }