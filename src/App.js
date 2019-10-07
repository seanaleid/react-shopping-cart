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


	const addItem = (item ) => {
		console.log(item);
		// add the given item to the cart
		return setCart([...cart, item]);
	};

	return (
		<div className="App">
			<ProductsContext.Provider value={{products, addItem}}>
				<CartContext.Provider value={cart}>
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
