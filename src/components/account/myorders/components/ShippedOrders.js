import React from 'react';
import ShippedProduct from '../../shippedproduct/ShippedProduct';
import OpenDisputeLink from './OpenDisputeLink';
//Dummy data
const shipped_product = [
	{
		id: 'G2123',
		status: 'Awaiting delivery',
		image: 'https://images.unsplash.com/flagged/photo-1578905326519-3aa98aa6a728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWZyaWNhbiUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
		description:
			'Kuwait Fashion Blogger recommend Silk Bohemian Kaftan Maxi Dress 2021 Winnie Traditional Floral Abaya Muslim BouBou Dresses',
		color: 'White',
		size: 'XL',
		dateOrdered: '14th August, 20222',
		deliveryDate: '22th August, 2022'
	},
	{
		id: 'G2123',
		status: 'Awaiting delivery',
		image: 'https://images.unsplash.com/flagged/photo-1578905326519-3aa98aa6a728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWZyaWNhbiUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
		description:
			'Kuwait Fashion Blogger recommend Silk Bohemian Kaftan Maxi Dress 2021 Winnie Traditional Floral Abaya Muslim BouBou Dresses',
		color: 'White',
		size: 'XL',
		dateOrdered: '14th August, 20222',
		deliveryDate: '22th August, 2022'
	},
	{
		id: 'G2123',
		status: 'Awaiting delivery',
		image: 'https://images.unsplash.com/flagged/photo-1578905326519-3aa98aa6a728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWZyaWNhbiUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
		description:
			'Kuwait Fashion Blogger recommend Silk Bohemian Kaftan Maxi Dress 2021 Winnie Traditional Floral Abaya Muslim BouBou Dresses',
		color: 'White',
		size: 'XL',
		dateOrdered: '14th August, 20222',
		deliveryDate: '22th August, 2022'
	}
];

function ShippedOrders() {
	return (
		<div className='flex flex-col gap-2 '>
			<OpenDisputeLink />
			<ShippedProduct product={shipped_product} />
		</div>
	);
}

export default ShippedOrders;
