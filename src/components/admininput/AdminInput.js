import React from 'react';

function AdminInput({ label, type, ...props }) {
	return (
		<div className='flex flex-col'>
			<label className='font-semibold text-sm capitalize'>{label}</label>
			<input className='border border-dark-teal p-1 ' {...props} type={type} />
		</div>
	);
}

export default AdminInput;
