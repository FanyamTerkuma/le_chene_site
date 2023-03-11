import React from 'react';
import { Link } from 'react-router-dom';
import { pngs } from '../../../../assets/';
function OrdersToBeShipped() {
	return (
		<div className='flex flex-col items-center justify-center'>
			<img
				className='w-[45%] '
				src={pngs.to_be_shipped_image}
				alt='an illustration of a person with a shopping bag and cart'
			/>
			<span className='flex gap-1'>
				<p className='font-semibold'>No orders.</p>
				<Link className='font-semibold text-[#3A998E]' to='#'>
					Shop Now
				</Link>
			</span>
		</div>
	);
}

export default OrdersToBeShipped;
