import React from 'react';
import LabelAndData from '../LabelAndData';

function ClosedDispute({
	productImage,
	productName,
	productColor,
	productDescription,
	productSize,
	productPrice,
	quantity
}) {
	return (
		<div className='green-outline-white-bg cursor-pointer px-2 py-4 '>
			<div className='flex flex-col md:flex-row gap-2'>
				<div className=' md:w-24 md:h-fit rounded-lg'>
					<img className='rounded-lg ' src={productImage} alt='shipped item' />
				</div>
				<div className='w-full flex flex-col justify-between'>
					<p>{productName}</p>
					<span className='flex flex-col sm:flex-row  justify-between'>
						<LabelAndData label='Color' data={productColor} />
						<LabelAndData label='Size' data={productSize} />
						<LabelAndData label='Price' data={productPrice} />
						<LabelAndData label='Qty' data={quantity} />
					</span>
				</div>
			</div>
		</div>
	);
}

export default ClosedDispute;
