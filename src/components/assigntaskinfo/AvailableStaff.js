import React from 'react';

function AvailableStaff({ availableStaff }) {
	return (
		<div className='absolute right-0 z-50 green-outline-white-bg rounded-md shadow-custom-shadow p-2 w-full  grid grid-rows-2 gap-2'>
			<div className='grid col-auto py-2 justify-center'>
				<p className='green-outline-white-bg py-1 px-3 w-fit rounded-lg font-semibold text-[#26867B]'>
					Available staff
				</p>
			</div>
			{availableStaff.map((staff) => (
				<div className='flex gap-1 items-center cursor-pointer'>
					<div className='rounded-full bg-gray-400 p-5'>{staff.staffAvatar}</div>
					<span className='font-semibold max-w-xs truncate'>{staff.staffName}</span>
				</div>
			))}
		</div>
	);
}

export default AvailableStaff;
