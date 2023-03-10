import React, { useState } from 'react';
import Button from '../../../Button/Button';

function ComplainTextBox({ onClick }) {
	const [text, setText] = useState('');
	const handleChange = (event) => {
		setText(event.target.value);
	};
	const MAX__NUMBER_OF_CHARACTERS = 500;
	return (
		<div className='absolute z-20 mx-auto right-0 left-0 drop-shadow-2xl'>
			<div className='mb-1 green-outline-white-bg p-3 w-full h-[22em]'>
				<p className='font-semibold'>Message</p>
				<hr />
				<textarea
					className='w-full resize-none outline-none'
					value={text}
					placeholder='Type your complaint here...'
					rows='11'
					maxLength={MAX__NUMBER_OF_CHARACTERS}
					onChange={handleChange}></textarea>
				<span className='flex justify-end text-[#00000080]'>
					{text.split('').length}/{MAX__NUMBER_OF_CHARACTERS}
				</span>
			</div>
			<div className='flex justify-end gap-2'>
				<Button title='cancel' onClick={onClick} />
				<Button title='send' />
			</div>
		</div>
	);
}

export default ComplainTextBox;
