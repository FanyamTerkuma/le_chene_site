import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import Button from '../../Button/Button';

function ShippingInfo() {
	return (
		<div className='h-max'>
			<h1 className='font-semibold'>Shipping information</h1>
			<div className='green-outline-white-bg flex flex-col gap-2 p-3'>
				<span className='bg-[#3A998E] text-white p-1 rounded-lg w-fit'>Default</span>
				<div className='flex items-center'>
					<span className='object-contain'>
						<IoLocationOutline size={25} />
					</span>
					<p>
						Nwafor Amaka Favour, +234-8034437612, No 10 Moloko Street, Orile Iganmu, Lagos State, Nigeria,
						100224
					</p>
				</div>
				<span className='flex justify-end'>
					<Button title='Edit' />
				</span>
			</div>
		</div>
	);
}

export default ShippingInfo;
