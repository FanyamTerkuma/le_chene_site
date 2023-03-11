import React from 'react';

function RadioInput({ id, label, ...props }) {
	return (
		<div className='flex gap-2 items-center justify-between p-2'>
			<label htmlFor={id}>{label}</label>
			<input className='cursor-pointer' type='radio' id={id} {...props} name='size' />
		</div>
	);
}

export default RadioInput;
