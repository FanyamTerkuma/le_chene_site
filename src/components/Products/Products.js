import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../../data/data';
import { Rating } from '@mui/material';

const Products = () => {
	const [productList, setProductList] = useState(products);

	return (
		<div>
			<span className='font-bold ml-8'>Sort by:</span>
			Price{' '}
			<button className='border p-2 border-[#3A998E] rounded w-16 hover:bg-teal-600 hover:text-white'>
				Min
			</button>{' '}
			-{' '}
			<button className='border p-2 border-[#3A998E] rounded w-16 hover:bg-teal-600 hover:text-white'>Max</button>
			<div className='flex items-center'>
				<form className='ml-14 mt-6'>
					<label for='sale'>
						<input
							type='checklist'
							className='m-0 rounded w-4 border-[#3A9983] border-2'
							name='Sale'
							id='sale'
						/>{' '}
						Sale{' '}
					</label>
					<label for='hot' className='m-2'>
						<input
							type='checklist'
							className='m-0 rounded w-4 border-[#3A9983] border-2 shadow-black'
							id='hot'
						/>{' '}
						Hot{' '}
					</label>
					<span className='items-center'>
						<label for='rating' className='m-2 items-center'>
							<input type='checklist' className='m-0 rounded w-4 border-[#3A9983] border-2' id='rating' />
							<Rating />
						</label>
					</span>
				</form>
			</div>
			<div className='m-2 grid grid-cols-2 lg:grid-cols-4 gap-4 text-black pt-8'>
				{productList.map((item, index) => {
					return (
						<Link to={`/product/${item.id}`}>
							<div key={index} className='border w-[300px] shadow-lg hover:scale-95 duration-300'>
								<img
									src={item.image}
									alt={item.product_name}
									className='w-full h-[330px] object-cover rounded-t-lg border-none'
								/>

								<div className='mt-1 p-3 border-1px h-[180px] min-h-full relative'>
									<h4 className='font-bold'>{item.product_name}</h4>
									<p className='font-thin my-2 break-normal'>{item.description}</p>
									<p className='mb-7 hover:text-[#3A998E] text-xl'>
										<span>{item.currency}</span>
										{item.price}
										<span className='block'>
											<Rating />
										</span>
									</p>
									{/* <div className='absolute items-center bottom-0 bg-[#3A998E] text-white p-2 hover:visible w-[400px] text-center'>Add to Cart</div> */}
								</div>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
};
export default Products;
