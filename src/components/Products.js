import React, {useContext} from 'react';
import {ProductsContext} from "../contexts/ProductsContext";

// Components
import Product from './Product';

const Products = () => {
	const {products, addItem} = useContext(ProductsContext);
	console.log(products);

	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
