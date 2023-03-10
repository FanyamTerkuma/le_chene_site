import React from 'react';
import Button from '../../Button/Button';

function ShippedProduct({ product }) {
	return (
		<div className='flex flex-col gap-2 text-sm md:text-base '>
			{product.map((item) => (
				<div className='green-outline-white-bg p-3 flex flex-col gap-2 w-full'>
					<span className='font-semibold'>{item.status}</span>
					<div className='flex flex-col md:flex-row gap-2'>
						<div className=' md:w-24 md:h-fit rounded-lg'>
							<img className='rounded-lg ' src={item.image} alt='shipped item' />
						</div>
						<div className='w-full'>
							<span className='flex justify-between'>
								<span className='flex gap-2'>
									<p className='font-semibold'> Order ID:</p>
									<p>{item.id}</p>
								</span>

								<p className='text-[#00000080]'>Ordered {item.dateOrdered}</p>
							</span>
							<p className='md:w-[50%]'>{item.description}</p>
							<span className='flex gap-2'>
								<p>Color: {item.color}</p>
								<p>Size: {item.size}</p>
							</span>
						</div>
					</div>
					<hr />
					<div className='font-semibold'>
						{item.status === 'Awaiting delivery' ? (
							<p>Estimated Delivery Date: {item.deliveryDate}</p>
						) : (
							<p>Delivered on: {item.deliveryDate}</p>
						)}
					</div>
					<hr />
					<div className='flex justify-end'>
						<div>
							{/*for total price */}
							<p className='flex justify-end font-semibold mb-2'>Total: N8,500</p>
							{item.status === 'In dispute' ? '' : <Button title='Confirm Receipt' />}
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default ShippedProduct;
