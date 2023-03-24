import React from 'react';
import AdminProductItem from '../../../components/adminproductitem/AdminProductItem';
import AdminSearchbar from '../../../components/adminsearchbar/AdminSearchbar';
const products = [
	{
		id: '1233GH',
		productCategory: 'Male suit',
		availableQuantity: 12,
		sizes: ['S', 'M', 'L', 'XL'],
		colours: ['Red', 'Blue', 'Green', 'white'],
		price: 50000
	},
	{
		id: '1233GH',
		productCategory: 'Male suit',
		availableQuantity: 12,
		sizes: ['S', 'M', 'L', 'XL'],
		colours: ['Red', 'Blue', 'Green', 'white'],
		price: 5000
	},
	{
		id: '1233GH',
		productCategory: 'Male suit',
		availableQuantity: 20,
		sizes: ['S', 'M', 'L', 'XL'],
		colours: ['Red', 'Blue', 'Green', 'white'],
		price: 50000
	},
	{
		id: '1233GH',
		productCategory: 'Male suit',
		availableQuantity: 10,
		sizes: ['S', 'M', 'L', 'XL'],
		colours: ['Red', 'Blue', 'Green', 'white'],
		price: 15000
	}
];

function ViewProducts() {
	const labels = ['Product ID', 'Product category', 'Quantity Available', 'Sizes', 'Colours', 'Price'];
	return (
		<main className='flex flex-col gap-2 w-full'>
			<div className='bg-gray-200  py-3 w-full flex justify-evenly row-span-1'>
				<AdminSearchbar placeholder='Search by name' />
				<AdminSearchbar placeholder='Search by status' />
			</div>
			<div className='table border-collapse  w-[100%]'>
				<div className='table-header-group mb-4'>
					{labels && (
						<>
							{labels.map((label) => (
								<div className=' px-1 table-cell font-semibold text-start '>{label}</div>
							))}
							<div className='table-row h-2'></div>
						</>
					)}
				</div>
				{products.map((product) => (
					<>
						<AdminProductItem
							productID={product.id}
							productCategory={product.productCategory}
							availableQuantity={product.availableQuantity}
							sizes={product.sizes}
							colours={product.colours}
							price={product.price}
						/>
						<div className='table-row h-2'></div>
					</>
				))}
			</div>
			<div className=' w-full h-screen overflow-y-auto hidden-scrollbar'></div>
		</main>
	);
}

export default ViewProducts;
