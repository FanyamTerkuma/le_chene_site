import React from 'react';

function TextBox({ label, rows = 1, ...props }) {
	return (
		<div>
			<div className='flex'>
				<p className='font-semibold'>{label}</p>
				<p className='text-red-400'>*</p>
			</div>
			<textarea
				className=' rounded-lg green-outline-white-bg indent-2 py-2 resize-none outline-none md:w-[26vw] w-full hidden-scrollbar'
				{...props}
				rows={rows}
				maxLength={500}></textarea>
		</div>
	);
}

export default TextBox;
