import React, { useState } from 'react';
import Button from '../../../Button/Button';
import ComplainTextBox from './ComplainTextBox';
import LabelAndData from './LabelAndData';
import ProductPopup from './ProductPopup';

function OrderProduct({ productName, productImage, productColor, productSize, productPrice, quantity }) {
	const priceByQuantity = quantity * productPrice;

	const [openTextBox, setOpenTextBox] = useState(false);
	const [openProductPopup, setOpenProductPopup] = useState(false);

	return (
		<div className='relative '>
			{openTextBox && (
				<ComplainTextBox
					onClick={() => {
						setOpenTextBox(!openTextBox);
					}}
				/>
			)}
			<div className='green-outline-white-bg px-2 py-3  flex sm:flex-row flex-col sm:items-center justify-around'>
				<div>
					{openProductPopup && (
						<ProductPopup
							productImage={productImage}
							productName={productName}
							productColor={productColor}
							productSize={productSize}
							productPrice={productPrice}
							quantity={quantity}
							onMouseLeave={() => setOpenProductPopup(!openProductPopup)}
						/>
					)}
					<p
						className='truncate  sm:max-w-[12em] max-w-full max-h-12 '
						onMouseOver={() => setOpenProductPopup(!openProductPopup)}>
						{productName}
					</p>
				</div>

				<LabelAndData label='Colour' data={productColor} />
				<LabelAndData label='Size' data={productSize} />
				<LabelAndData label='Price' data={priceByQuantity} />
				<div className='flex justify-end'>
					<Button title='complaint' onClick={() => setOpenTextBox(!openTextBox)} />
				</div>
			</div>
		</div>
	);
}

export default OrderProduct;
