import React from 'react';
import { AiOutlineMessage } from 'react-icons/ai';
import { VscBellDot } from 'react-icons/vsc';
function AdminHeader({ pageTitle }) {
	return (
		<div className='shadow-lg sticky top-0 z-50 green-outline-white-bg rounded-none p-2 flex justify-between'>
			<div className='text-[#26867B] font-semibold flex items-center'>{pageTitle}</div>
			<div className='flex items-center gap-2 max-w-md  cursor-pointer'>
				<VscBellDot size={20} color='#26867B' />
				<AiOutlineMessage size={20} />
				<div className='rounded-full bg-gray-400 p-5'></div>
				<span className='font-semibold max-w-xs truncate'>staff name</span>
			</div>
		</div>
	);
}

export default AdminHeader;
