import React from 'react';
import MobileNav from '../mobilenavigation/MobileNav';
import ShippingForm from './ShippingForm';

function Profile() {
	return (
		<>
			<div className='sm:hidden flex'>
				<MobileNav />
			</div>
			<div className='flex justify-center gap-2 md:p-0 p-2 w-full'>
				<div className=' md:w-[55em] '>
					<ShippingForm />
				</div>
			</div>
		</>
	);
}

export default Profile;
