import React from 'react';

function Input({ label, className, ...props }) {
	return (
		<div>
			<div className='flex flex-col w-full'>
				<label className='font-semibold'>{label}</label>
				<input className={`gray-outline-white-bg p-2 ${className} `} {...props} />
			</div>
		</div>
	);
}

export default Input;
