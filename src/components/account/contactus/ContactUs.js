import React from 'react';
import Button from '../../Button/Button';
import Input from '../input/Input';
import MobileNav from '../mobilenavigation/MobileNav';

function ContactUs() {
	return (
		<div className='p-2'>
			<div className='sm:hidden flex'>
				<MobileNav />
			</div>
			<div className='flex flex-col gap-3 green-outline-white-bg p-3'>
				<p className='font-semibold'>Kindly fill the form and submit for review</p>
				<div className='flex flex-col gap-3'>
					<Input label='Full name' type='text' />
					<Input label='Phone number' type='tel' />
					<Input label='Email' type='email' />
					<textarea
						className='gray-outline-white-bg w-full resize-none outline-none p-3 indent-2'
						placeholder='Type here...'
						rows='12'
						maxLength={500}></textarea>
				</div>
				<span className='flex justify-end'>
					<Button title='send' />
				</span>
			</div>
		</div>
	);
}

export default ContactUs;
