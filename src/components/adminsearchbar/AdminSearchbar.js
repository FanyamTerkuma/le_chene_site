import React from 'react';
import { GoSearch } from 'react-icons/go';

function AdminSearchbar({ placeholder, props }) {
	return (
		<div className='border border-dark-teal w-fit flex items-center bg-white p-1 '>
			<GoSearch size={22} />
			<input type='text' placeholder={placeholder} className='focus:outline-none indent-1 px-1' {...props} />
		</div>
	);
}

export default AdminSearchbar;
