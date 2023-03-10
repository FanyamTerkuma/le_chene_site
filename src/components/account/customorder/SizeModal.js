import React, { useState } from 'react';
import Button from '../../Button/Button';
import RadioInput from '../input/RadioInput';

function SizeModal({ handleSubmit }) {
	const [value, setValue] = useState('');
	const onChange = (e) => {
		setValue(e.target.value);
	};

	return (
		<div className='bg-white text-black w-auto md:w-[22vw] h-auto p-2'>
			<RadioInput id='small' value={value} label='Small' onChange={onChange} />
			<RadioInput id='medium ' value={value} label='Medium' onChange={onChange} />
			<RadioInput id='large ' value={value} label='Large' onChange={onChange} />
			<RadioInput id='xl' value={value} label='XL' onChange={onChange} />
			<RadioInput id='xxl' value={value} label='XXL' onChange={onChange} />
			<RadioInput id='3xl' value={value} label='3XL' onChange={onChange} />
			<div className='flex justify-center'>
				<Button title='submit' onClick={handleSubmit} />
			</div>
		</div>
	);
}

export default SizeModal;
