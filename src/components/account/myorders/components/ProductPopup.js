import React from 'react';
import LabelAndData from './LabelAndData';

function ProductPopup({ productImage, productColor, productSize, productPrice, quantity, productName, onMouseLeave }) {
	return (
		<div
			className='green-outline-white-bg cursor-pointer p-2 absolute z-20 mx-auto left-2 w-1/2 drop-shadow-2xl '
			onMouseLeave={onMouseLeave}>
			<div className='flex flex-col md:flex-row gap-2'>
				<div className=' md:w-24 md:h-fit rounded-lg'>
					<img className='rounded-lg ' src={productImage} alt='shipped item' />
				</div>
				<div className='w-full'>
					<p className=''>{productName}</p>
					<span className='flex flex-col sm:flex-row  gap-2'>
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

export default ProductPopup;
