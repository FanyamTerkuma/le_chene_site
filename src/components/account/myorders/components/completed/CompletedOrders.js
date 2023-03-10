import React from 'react';

import CompletedOrderItem from './CompletedOrderItem';

const products = [
	{
		id: 'G2123',
		name: 'Kuwait Fashion Blogger recommend Silk ',
		image: 'https://images.unsplash.com/flagged/photo-1578905326519-3aa98aa6a728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWZyaWNhbiUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
		color: 'White',
		size: 'XL',
		price: 4000,
		quantity: 1,
		date: '31st May,2022'
	},
	{
		id: 'G2123',
		name: 'Kuwait Fashion Blogger recommend Silk ',
		image: 'https://images.unsplash.com/flagged/photo-1578905326519-3aa98aa6a728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWZyaWNhbiUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
		color: 'White',
		size: 'XL',
		price: 4000,
		quantity: 4,
		date: '31st May,2022'
	},
	{
		id: 'G2123',
		name: 'Kuwait Fashion Blogger recommend Silk ',
		image: 'https://images.unsplash.com/flagged/photo-1578905326519-3aa98aa6a728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWZyaWNhbiUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
		color: 'White',
		size: 'XL',
		price: 16000,
		quantity: 12,
		date: '31st May,2022'
	}
];
const totalPrice = products.map((product) => product.price).reduce((sum, curr) => sum + curr, 0);

const ordersPlaced = [
	{
		id: 'G2123',
		date: '29 August,2022',
		total: totalPrice,
		products: products
	},
	{
		id: 'G201232',
		date: '29 August,2022',
		total: totalPrice,
		products: products
	},
	{
		id: 'G201232',
		date: '29 August,2022',
		total: totalPrice,
		products: products
	}
];
function CompletedOrders() {
	return (
		<div className='flex flex-col gap-2'>
			{ordersPlaced.map((order) => (
				<CompletedOrderItem
					orderId={order.id}
					orderDate={order.date}
					totalPrice={totalPrice}
					products={order.products}
				/>
			))}
		</div>
	);
}

export default CompletedOrders;
