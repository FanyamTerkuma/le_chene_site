import React, { useState } from 'react';
import Button from '../../../../Button/Button';
import ComplainTextBox from '../ComplainTextBox';
import LabelAndData from '../LabelAndData';
import ProductPopup from '../ProductPopup';

function IndisputeItem({
	productName,
	productImage,
	productDescription,
	productColor,
	productSize,
	productPrice,
	quantity
}) {
	const priceByQuantity = quantity * productPrice;

	const [openTextBox, setOpenTextBox] = useState(false);
	const [openProductPopup, setOpenProductPopup] = useState(false);

	return (
		<div className='green-outline-white-bg px-2 py-6 flex flex-col  gap-8'>
			{openTextBox && (
				<ComplainTextBox
					onClick={() => {
						setOpenTextBox(!openTextBox);
					}}
				/>
			)}
			<div className=' flex sm:flex-row flex-col sm:items-center justify-between gap-2 px-2 '>
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
						{productDescription}
					</p>
				</div>
				<LabelAndData label='Colour' data={productColor} />
				<LabelAndData label='Size' data={productSize} />
				<LabelAndData label='Price' data={priceByQuantity} />
			</div>
			<div className='flex justify-center gap-10'>
				<Button title='Edit dispute' onClick={() => setOpenTextBox(!openTextBox)} />
				<Button title='Cancel dispute' />
			</div>
		</div>
	);
}

export default IndisputeItem;
