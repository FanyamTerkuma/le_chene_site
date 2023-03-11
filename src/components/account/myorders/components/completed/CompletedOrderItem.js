import React, { useState } from 'react';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';
import LabelAndData from '../LabelAndData';
import OrderProduct from '../OrderProduct';

function CompletedOrderItem({ orderId, orderDate, totalPrice, products }) {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div>
			<div>
				<div>
					<div className='green-outline-white-bg  p-2  flex sm:flex-row flex-col  items-center justify-between'>
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
							<OrderProduct
								productName={product.name}
								productImage={product.image}
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

export default CompletedOrderItem;
