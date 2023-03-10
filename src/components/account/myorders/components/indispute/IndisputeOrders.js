import React, { useState } from 'react';
import { IoChevronDownSharp, IoChevronForwardSharp } from 'react-icons/io5';
import ClosedDispute from './ClosedDispute';
import InDispute from './InDispute';

const products = [
	{
		id: 'G2123',
		name: 'Kuwait Fashion Blogger recommend Silk ',
		image: 'https://images.unsplash.com/flagged/photo-1578905326519-3aa98aa6a728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWZyaWNhbiUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
		description:
			'Kuwait Fashion Blogger recommend Silk Bohemian Kaftan Maxi Dress 2021 Winnie Traditional Floral Abaya Muslim BouBou Dresses',
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
		description:
			'Kuwait Fashion Blogger recommend Silk Bohemian Kaftan Maxi Dress 2021 Winnie Traditional Floral Abaya Muslim BouBou Dresses',
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
		description:
			'Kuwait Fashion Blogger recommend Silk Bohemian Kaftan Maxi Dress 2021 Winnie Traditional Floral Abaya Muslim BouBou Dresses',
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
function IndisputeOrders() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className='relative'>
			<div className='flex  items-center gap-1 green-outline-white-bg p-3 '>
				<p className='font-semibold'>Closed dispute</p>
				<div>
					{isOpen ? (
						<IoChevronDownSharp className='cursor-pointer' size={20} onClick={() => setIsOpen(!isOpen)} />
					) : (
						<IoChevronForwardSharp
							className='cursor-pointer'
							size={20}
							onClick={() => setIsOpen(!isOpen)}
						/>
					)}
				</div>
			</div>
			<div>
				{isOpen && (
					<div className='green-outline-white-bg p-2 mt-2 flex flex-col gap-2 shadow-custom-shadow'>
						{products.map((product) => (
							<ClosedDispute
								productImage={product.image}
								productName={product.name}
								productColor={product.color}
								productDescription={product.description}
								productSize={product.size}
								productPrice={product.price}
								quantity={product.quantity}
							/>
						))}
					</div>
				)}
			</div>
			{ordersPlaced.map((order) => (
				<InDispute
					orderId={order.id}
					orderDate={order.date}
					totalPrice={totalPrice}
					products={order.products}
				/>
			))}
		</div>
	);
}

export default IndisputeOrders;
