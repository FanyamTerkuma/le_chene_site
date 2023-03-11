import React, { useState } from 'react';
import { pngs } from '../../../assets';
import Button from '../../Button/Button';
import Input from '../input/Input';
// Dummy data to check if dropdown component is working as expected
const coutriesAvailable = ['Nigeria', 'USA', 'Ghana', 'Congo', 'Mars'];
const statesAvailable = {
	Nigeria: ['Abuja', 'Lagos', 'Jos', 'Kaduna'],
	USA: ['Texas', 'Boston', 'New York'],
	Ghana: ['Accra'],
	Congo: ['City'],
	Mars: ['space station']
};

function ShippingForm() {
	const [selectedCountry, setSelectedCountry] = useState('');
	const [file, setFile] = useState(pngs.uploadIcon);
	function handleChange(e) {
		setFile(URL.createObjectURL(e.target.files[0]));
	}

	return (
		<div className=' md:w-[100%] mb-4'>
			<div className=' p-2 flex flex-col  justify-center items-center '>
				<div className='rounded-[50%] bg-gray-300 w-20 h-20'>
					<img className='rounded-[50%] w-full h-full object-cover' src={file} alt='customer avatar' />
				</div>
				<label htmlFor='files' className='font-semibold cursor-pointer'>
					upload image
				</label>
				<input id='files' type='file' onChange={handleChange} hidden />
			</div>
			<div className='green-outline-white-bg p-6 '>
				<form className=' flex flex-col gap-2 w-max	'>
					<Input label='Fullname' type='text' placeholder='Enter your full name' />
					<Input label='Apartment, Suite, etc' type='text' placeholder='Apartment, suite, etc.' />
					<Input label='City' type='text' placeholder='city' />
					<div className='flex md:flex-row flex-col gap-2 md:items-center  '>
						<Input
							className='md:w-[26em] '
							label='Phone number'
							type='tel'
							placeholder='Enter your phone number'
						/>
						<div className='flex flex-col max-w-full'>
							<label className='font-semibold'>Country</label>
							<select
								className='md:w-[26em] h-[2.6em] gray-outline-white-bg p-2 '
								onChange={(e) => setSelectedCountry(e.target.value)}>
								{coutriesAvailable.map((country, id) => (
									<option key={id} id={id}>
										{country}
									</option>
								))}
							</select>
						</div>
					</div>
					<div className='flex md:flex-row flex-col md:justify-between md:items-center'>
						<div className='flex flex-col'>
							<label className='font-semibold'>State</label>
							<select className='md:w-[26em] w-full h-[2.6em] gray-outline-white-bg p-2 '>
								{selectedCountry &&
									statesAvailable[selectedCountry].map((state, id) => (
										<option key={id} id={id}>
											{state}
										</option>
									))}
							</select>
						</div>
						<Input className='md:w-[26em]' label='Postal code' type='text' placeholder='Enter postalcode' />
					</div>
					<span className='flex justify-between items-center gap-2'>
						<Button title='Edit info' />
						<Button title='save' />
					</span>
				</form>
			</div>
		</div>
	);
}

export default ShippingForm;
