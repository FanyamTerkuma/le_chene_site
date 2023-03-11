import React from 'react';
import MobileNav from '../mobilenavigation/MobileNav';
import CustomOrderItem from './CustomOrderItem';

function CustomOrder() {
	return (
		<div>
			<div className='sm:hidden flex'>
				<MobileNav />
			</div>
			<div className='p-3 '>
				<CustomOrderItem />
			</div>
		</div>
	);
}

export default CustomOrder;
