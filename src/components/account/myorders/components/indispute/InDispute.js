import React, { useState } from 'react';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';
import IndisputeItem from './IndisputeItem';
import LabelAndData from '../LabelAndData';

function InDispute({ orderId, orderDate, totalPrice, products }) {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className='flex flex-col gap-2 '>
			<div>
				<div>
					<div className='green-outline-white-bg mt-2 p-2  flex sm:flex-row flex-col items-center justify-between'>
						<LabelAndData label='Order ID' data={orderId} />
						<LabelAndData label='Date' data={orderDate} />
						<LabelAndData label='Total Price' data={totalPrice} />

						<div>
							{isOpen ? (
								<MdArrowDropUp
									className='cursor-pointer'
									size={22}
									onClick={() => setIsOpen(!isOpen)}
								/>
							) : (
								<MdArrowDropDown
									className='cursor-pointer'
									size={22}
									onClick={() => setIsOpen(!isOpen)}
								/>
							)}
						</div>
					</div>
				</div>
				{isOpen && (
					<div className='green-outline-white-bg mt-2 px-3 py-6 h-auto shadow-custom-shadow max-w-full flex flex-col gap-2 '>
						{products.map((product) => (
							<IndisputeItem
								productName={product.name}
								productImage={product.image}
								productDescription={product.description}
								productColor={product.color}
								productPrice={product.price}
								productSize={product.size}
								quantity={product.quantity}
							/>
						))}
					</div>
				)}
			</div>
		</div>
	);
}

export default InDispute;
